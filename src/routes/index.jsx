import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout';
import NavBar from '../pages/NavBar';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Input from '../pages/Input';

export const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <Layout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <Home />,
  //     },
  //     {
  //       path: '*',
  //       element: <NotFound />,
  //     },
  //   ],
  // },
  {

  path:"/",
  
  element:
  <div   >
   <NavBar/>
   <Home/>
    </div>
  },
  
  {
    path:"/login",
    element:<div >
   <NavBar/>
   <Login/>
    </div>
  },
  {
    path:"/signup",
    element:<div >
   <NavBar/>
  <SignUp/>
    </div>
  },
  {
    path:"/input",
    element:<div >
   <NavBar/>
   <Input/>
    </div>
  },
]); 