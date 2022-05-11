// применяем кэлбэк через какое-то время после ввода
// фактически для бОльшей оптимизации useTransition, чтобы не использовать LazyInput
import { useCallback, useRef } from 'react'
import { ITimeoutId } from '../global'

function useDebounce(callback: (...args: any[]) => void, delay: number = 0) {
    const timer = useRef<ITimeoutId>()

    const debounceCallback = useCallback((...args: any[]) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }

        timer.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }, [callback, delay])

    return debounceCallback
}

export default useDebounce
