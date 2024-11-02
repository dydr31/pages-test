import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ProjectsPage } from './components/ProjectsPage';
import { ErrorPage } from './components/ErrorPage';

const router = createHashRouter([{
  path: '/*',
  element: <Header/>,
  errorElement: <ErrorPage/>,
  children: [
    {
       path: '/*',
       element: <HomePage/>
    },
    {
      path: '/projects',
      element: <ProjectsPage/>
    }
  ]
}])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
