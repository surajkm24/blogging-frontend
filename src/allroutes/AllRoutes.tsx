import { Routes, Route } from 'react-router-dom'
import { AccountSetup } from '../pages/AccountSetup'
import { SingleBlog } from '../pages/SingleBlog'
import { CustomizeTopics } from '../pages/CustomizeTopics'
import { Homepage } from '../pages/Homepage'
import { LoginWithEmail } from '../pages/LoginWithEmail'
export const AllRoutes = () => {

    return <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup/email' element={<AccountSetup />} />
        <Route path='/customize-topics' element={<CustomizeTopics />} />
        <Route path='/login/email' element={<LoginWithEmail />} />
        <Route path='/me/notifications' element={<h1>hj</h1>} />
        <Route path='/blog/:id' element={<SingleBlog />} />
    </Routes>
}