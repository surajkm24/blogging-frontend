import { Routes, Route } from 'react-router-dom'
import { AccountSetup } from '../pages/AccountSetup'
import { SingleBlog } from '../pages/SingleBlog'
import { CustomizeTopics } from '../pages/CustomizeTopics'
import { Homepage } from '../pages/Homepage'
import { LoginWithEmail } from '../pages/LoginWithEmail'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import {useEffect} from 'react';
import { getUserData, refreshToken } from '../redux/auth/auth.action'

export const AllRoutes = () => {

    const auth = useSelector((store: RootState) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(auth)
    dispatch<any>(getUserData(auth.primaryToken)).then((res: any) => {
      if (res === 'Invalid token!') {
        dispatch<any>(refreshToken(auth.refreshToken)).then((res: any) => {
          if (res.message === 'Token regenerated successfully!') {
            dispatch<any>(getUserData(res.primaryToken));
          }
        })
      }
    })
  }, [])

    return <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup/email' element={<AccountSetup />} />
        <Route path='/customize-topics' element={<CustomizeTopics />} />
        <Route path='/login/email' element={<LoginWithEmail />} />
        <Route path='/me/notifications' element={<h1>hj</h1>} />
        <Route path='/blog/:id' element={<SingleBlog />} />
    </Routes>
}