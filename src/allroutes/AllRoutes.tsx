import { Routes, Route } from 'react-router-dom'
import { AccountSetup } from '../pages/AccountSetup'
import { CustomizeTopics } from '../pages/CustomizeTopics'
import { Homepage } from '../pages/Homepage'
export const AllRoutes = () => {

    return <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup/email' element={<AccountSetup />} />
        <Route path='/customize-topics' element={<CustomizeTopics />} />
        <Route path='/me/notifications' element={<h1>hj</h1>} />
    </Routes>
}