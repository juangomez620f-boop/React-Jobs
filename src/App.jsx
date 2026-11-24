import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router" 
import HomePage from "./Pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./Pages/JobsPage";
import JobPage from "./Pages/JobPage";
import NotFoundPage from "./Pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"element={<MainLayout/>}>
    <Route index element ={ <HomePage/> }/>
    <Route path="jobs" element ={ <JobsPage/> }/>
     <Route path="jobs/:id" element ={ <JobPage/> }/>
     <Route path="*" element ={ <NotFoundPage/> }/>
    </Route>
  )   
); 

const App = () => {
  return <RouterProvider router={router} />
}

export default App
