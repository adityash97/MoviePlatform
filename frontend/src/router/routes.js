import {Routes,Route} from 'react-router-dom'
import {Home} from '../components/HomePage.js'

export function Router(){
    return <Routes>
        <Route index element={<Home/>}></Route>
    </Routes>
}