import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubinfoLoader } from './components/Github/Github.jsx'
import Facebook, { facebookinfoLoader } from './components/Facebook/Facebook.jsx'
import Instagram, { instagramInfoLoader } from './components/Instagram/Instagram.jsx'


//1st Way
const router = createBrowserRouter([
  {
    path : '/',
    element :<Layout/>,
    children :[
      {
        path :"",
        element: <Home/>
      },
      {
        path :"about",
        element :<About/>
      },
       {
        path :"contact",
        element :<Contact/>
      },
        {
        path :"user/:userid",
        element :<User/>
      },

       {
       loader : githubinfoLoader,
        path :"github",
        element :<Github/>
      },

       {
       loader : facebookinfoLoader,
        path :"facebook",
        element :<Facebook/>
      },

      {
       loader : instagramInfoLoader,
        path :"instagram",
        element :<Instagram/>
      },

    ]
  }
])


////2nd way

// const router =createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/"element={<Layout/>}>
//       <Route path='' element ={<Home/>}/>
//       <Route path='about' element ={<About/>}/>
//       <Route path='contact' element ={<Contact/>}/>
//       <Route path='user/:userid'element={<User/>}/>
//       <Route
//       loader={githubinfoLoader}
//        path ='github' 
//        element ={<Github/>}
//        />
//       loader={facebookinfoLoader}
//        path ='facebook' 
//        element ={<Facebook/>}
//        />
//       loader={instagraminfoLoader}
//        path ='instagram' 
//        element ={<Instagarm/>}
//        />

//     </Route>
//   )
// )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
