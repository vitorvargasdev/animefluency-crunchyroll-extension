import { inject } from "./injection";

let observer: MutationObserver | null = null;

const checkElements = () => {
  const app = document.getElementById("app");
  return !!app && app.childElementCount > 0;
};

const mutationHandler = async (mutations: MutationRecord[]) => {
  const changedVideo = "display: flex; height: 100%; width: 100%;";
  const isStyle = mutations[0].attributeName === "style";
  const isChangedVideo =
    (mutations[0].target as HTMLElement).getAttribute("style") === changedVideo;

  if (isStyle && isChangedVideo && !checkElements()) {
    console.info("Injecting...");
    await inject();
  }

  if (isStyle && isChangedVideo && checkElements()) {
    console.info("Injection already completed; skipping...");
  }
};

const startObservation = () => {
  observer = new MutationObserver(mutationHandler);

  const playerElement = document.getElementById("player0") as HTMLElement;
  observer.observe(playerElement, {
    attributes: true,
  });
};

startObservation();
