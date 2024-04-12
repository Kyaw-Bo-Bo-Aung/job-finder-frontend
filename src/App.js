import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import './App.css';
import RootLayout from './layouts/RootLayout'

import Home from './pages/Home';
import Detail from './pages/Detail';
import List from './pages/List';

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="jobs" element={<Detail />} />
      {/* <Route path="" element={<Detail />} />  */}
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
