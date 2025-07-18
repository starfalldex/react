import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'

import { authService } from './appwrite/index.js'
import { login, logout } from './store/authSlice.js'
import { Footer, Header } from './components/index.js'
import { Outlet } from 'react-router'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header />
        <main className='min-h-screen'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App