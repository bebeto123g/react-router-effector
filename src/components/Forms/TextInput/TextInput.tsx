import React, {
    FC,
    FocusEventHandler,
    InputHTMLAttributes,
    KeyboardEventHandler,
    useEffect,
    useRef,
    useState,
} from 'react'

import styles from './TextInput.module.scss'

interface ITextInput extends InputHTMLAttributes<HTMLInputElement> {
    labelText: string
}

const TextInput: FC<ITextInput> = ({ name, value, onChange, labelText, className, ...props }) => {
    const [stateValue, setStateValue] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (inputRef && stateValue !== value) {
            {/* @ts-ignore */}
            inputRef.current.value = value
        }
    }, [value, stateValue])

    const checkChange: FocusEventHandler<HTMLInputElement> = (event) => {
        if (value !== event.target.value) {
            setStateValue(event.target.value)
            {/* @ts-ignore */}
            onChange(event)
        }
    }

    const pressEnter: KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.key === 'Enter') {
            {/* @ts-ignore */}
            checkChange(event)
        }
    }

    return (
        <div className={`${styles.formGroup} ${className ?? ''}`}>
            <label htmlFor={name}>{labelText}</label>
            <input
                {...props}
                name={name}
                type='text'
                defaultValue={value}
                onBlur={checkChange}
                onKeyUp={pressEnter}
                ref={inputRef}
                className={`${styles.input}`}
            />
        </div>
    )
}

export default TextInput
