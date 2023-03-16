import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routes } from '../router'

const AppRouter:FC = () => {
    return (
        <Routes>
            {
                routes.map((route) => 
                    <Route 
                        key={route.path} 
                        path={route.path} 
                        element={<route.component/>}
                    />
                )
            }
            <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path='/*' element={<Navigate to='/error'/>}/>
        </Routes>
    )
}

export default AppRouter