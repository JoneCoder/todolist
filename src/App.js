import { RouterProvider } from "react-router-dom";
import router from './Router';

import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header/>
        <RouterProvider router={router} />
      <Footer/>
    </div>
  );
}

export default App;
