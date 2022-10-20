import { useDispatch, useSelector } from 'react-redux';
import { AllRoutes } from './allroutes/AllRoutes'
import './App.css'
import { RootState } from './redux/store';
import { useEffect } from 'react';
import { getUserData, refreshToken } from './redux/auth/auth.action';

function App() {

  const auth = useSelector((store: RootState) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
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

  return (
    <div className="App">
      <AllRoutes />
    </div>
  )
}

export default App
