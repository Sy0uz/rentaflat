import { FC, useEffect } from 'react'
import AppRouter from './components/AppRouter'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { useActions } from './hooks/useActions'

const App:FC = () => {
    const {checkUserAuth} = useActions();

    useEffect(() => {
        checkUserAuth();
    }, [])

    return (
        <div className='App'>
            <div>
                <Navbar />
                <AppRouter />
            </div>                
            <Footer/>
        </div>
    )
}

export default App