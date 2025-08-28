import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Job from './components/Jobs'
import Browse from './components/Browse'
import JobDescription from './components/JobDescription'
import Profile from './components/Profile'
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'
import AdminJobs from './components/admin/AdminJobs'
import PostJob from './components/admin/PostJob'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/jobs',
    element: <Job />
  },
  {
    path: '/browse',
    element: <Browse />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/description/:id',
    element: <JobDescription/>
  },

  // admin ke liye yha se start hoga
  {
    path:"/admin/companies",
    element: <Companies/>
  },
  {
    path:"/admin/companies/create",
    element: <CompanyCreate/> 
  },
  {
    path:"/admin/companies/:id",
    element:<CompanySetup/> 
  },
  {
    path:"/admin/jobs",
    element:<AdminJobs/> 
  },
  {
    path:"/admin/jobs/create",
    element:<PostJob/> 
  },

])
function App() {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App