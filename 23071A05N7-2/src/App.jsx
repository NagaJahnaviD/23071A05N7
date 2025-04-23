import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import ErrorEle from './Components/ErrorEle'
import Home from './Components/Home'
function App() {
    const browserRouterObj = createBrowserRouter([
      {
        path: "",
        element: <Layout />,
        errorElement: <ErrorEle />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "signin",
            element: <Signin />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
        ],
      },
    ]);
    return (
      <div>
        <RouterProvider router={browserRouterObj} />
      </div>
    );
}

export default App
