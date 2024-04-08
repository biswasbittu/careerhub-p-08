
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Error from './components/ErrorPage/Error.jsx'
import Statistaics from './components/Statistics/Statistaics.jsx'
import Appliedjobs from './components/Appliedjobs/Appliedjobs.jsx'
import Blog from './components/Blog/Blog.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistaics />,
      },
      {
        path: "/jobs",
        element: <Appliedjobs />,
      },
      {
        path: "/blog",
        element:<Blog/>
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
