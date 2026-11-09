import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router'
import HomePage from './pages/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<HomePage/>} />)
);

const App = () => {
  return <RouterProvider router={router} />
}

export default App
