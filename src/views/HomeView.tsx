import React, { FormEventHandler } from 'react'
import { useStore } from 'effector-react'

import TextInput from '../components/Forms/TextInput/TextInput'
import Container from '../UI/Container/Container'
import { $userForm, changeUserName, changeUserLastName } from '../store/user'

const HomeView = () => {
    const form = useStore($userForm)

    const submitHandler: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        // eslint-disable-next-line
        console.log(form)
    }

    return (
        <Container>
            <h1>Home Page</h1>
            <form onSubmit={submitHandler}>
                <TextInput
                    value={form.name}
                    onChange={changeUserName}
                    name={'name'}
                    labelText='Имя'
                />
                <TextInput
                    value={form.lastName}
                    onChange={changeUserLastName}
                    name={'lastName'}
                    labelText='Фамилия'
                />
                <button type='submit'>Отправить форму</button>
            </form>
        </Container>
    )
}

export default HomeView
