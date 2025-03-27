export enum States {
  PLAYING = 'playing',
  PAUSED = 'paused',
}

export enum PLAYER_STATE_PROPS {
    CONTROLS = 'controls',
    CURRENT_TIME = 'currentTime',
    DEFAULT_MUTED = 'defaultMuted',
    DEFAULT_PLAYBACK_RATE = 'defaultPlaybackRate',
    DURATION = 'duration',
    ENDED = 'ended',
    LOOP = 'loop',
    MUTED = 'muted',
    PAUSED = 'paused',
    PLAYBACK_RATE = 'playbackRate',
    VOLUME = 'volume'
}

export interface State {
    playerElement: HTMLVideoElement | undefined,
    lastFrameProgress: number | undefined,
    state: States
    currentProgress: number
    timeJump: boolean
}
