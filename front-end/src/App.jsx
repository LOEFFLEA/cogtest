import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsListPage from './pages/ProjectsListPage';
import ProjectPage from './pages/ProjectPage';
import NavBar from './NavBar';
import Layout from './Layout';
import NotFoundPage from './pages/NotFoundPage';

const routes = [{
  path:'/',
  element: <Layout />,
  errorElement: <NotFoundPage />,
  children: [{
    path: '/',
    element: <HomePage />
  }]
}]

    

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App
