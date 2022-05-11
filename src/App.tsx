import React from 'react'
import './styles/global.scss'

import Header from './components/Header/Header'
import AppRouter from './routes/AppRouter'

function App() {
    return (
        <>
            <Header />
            <AppRouter />
        </>
    )
}

export default App
