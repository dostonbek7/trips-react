import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
//pages
import Home from "./pages/Home";
import About from './pages/About'
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./pages/Signup";

function App() {
  const user = false
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute user={user}>
        <RootLayout />
      </ProtectedRoute>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path:'about',
          element:<About/>
        },
        {
          path:'contact',
          element:<Contact/>
        }
      ],
    },
    {
      path:'login',
      element: <Login/>,
    },
    {
      path:'signup',
      element: <Signup/>,
    }
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
