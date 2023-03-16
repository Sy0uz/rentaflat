import { FC } from 'react'
import AppRouter from './components/AppRouter'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const App:FC = () => {
    return (
        <div className='App'>
            <div>
                <Navbar/>
                <AppRouter/>                
            </div>
            <Footer/>
        </div>
    )
}

export default App