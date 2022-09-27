import { createBrowserRouter } from "react-router-dom";
import About from '../Components/About';
import Home from '../Components/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "about",
      element: <About />,
    }
  ]);

  export default router;