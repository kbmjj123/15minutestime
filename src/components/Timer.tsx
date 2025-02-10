import { useState, useEffect, useCallback } from 'react'
import { TimerState } from '@/types'

const FIFTEEN_MINUTES = 15 * 60 // 15 minutes in seconds

export default function Timer() {
  const [state, setState] = useState<TimerState>({
    isRunning: false,
    timeLeft: FIFTEEN_MINUTES,
    isPaused: false,
  })

  const startTimer = useCallback(() => {
    setState((prev: TimerState) => ({ ...prev, isRunning: true, isPaused: false }))
  }, [])

  const pauseTimer = useCallback(() => {
    setState((prev: TimerState) => ({ ...prev, isPaused: true }))
  }, [])

  const resetTimer = useCallback(() => {
    setState({
      isRunning: false,
      timeLeft: FIFTEEN_MINUTES,
      isPaused: false,
    })
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (state.isRunning && !state.isPaused) {
      interval = setInterval(() => {
        setState((prev: TimerState) => {
          if (prev.timeLeft <= 0) {
            clearInterval(interval)
            return { ...prev, isRunning: false }
          }
          return { ...prev, timeLeft: prev.timeLeft - 1 }
        })
      }, 1000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [state.isRunning, state.isPaused])

  const minutes = Math.floor(state.timeLeft / 60)
  const seconds = state.timeLeft % 60

  return (
    <div className="timer-container">
      <div className="timer-display">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      
      <div className="timer-controls">
        <button
          onClick={state.isRunning ? pauseTimer : startTimer}
          className="btn btn-primary"
        >
          {state.isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={resetTimer}
          className="btn btn-secondary"
        >
          Reset
        </button>
      </div>
    </div>
  )
} 