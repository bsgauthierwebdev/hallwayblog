import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom';
import Compose from './pages/Compose';
import Error from './pages/Error';
import Footer from './components/Footer';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Post from './pages/Post';
import Register from './pages/Register';
import './style.scss';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Landing />
      },

      {
        path: '/compose',
        element: <Compose />
      },
      
      {
        path: '/home',
        element: <Home />
      },

      {
        path: '/post/:id',
        element: <Post />
      },
    ]
  },

  {
    path: '/login',
    element: <Login />
  },

  {
    path: '/register',
    element: <Register />
  },

  {
    path: '/*',
    element: <Error />
  }
])

function App() {
  return (
    <div className = 'app'>
      <div className = 'container'>
        <RouterProvider router = {router} />
      </div>
    </div>
  );
};

export default App;
