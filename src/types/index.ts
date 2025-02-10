export interface TimerState {
  isRunning: boolean
  timeLeft: number
  isPaused: boolean
}

export interface ThemeState {
  isDark: boolean
}

export interface Settings {
  soundEnabled: boolean
  volume: number
  language: string
}

export type Locale = 'en' | 'zh-CN' | 'zh-TW' | 'ja' | 'ko' 