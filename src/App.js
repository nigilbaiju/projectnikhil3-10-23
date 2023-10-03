
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Product from './components/Product'
import ErrorPage from './components/ErrorPage';
import Productdetails from './components/Productdetails';
import RootLayout from './components/RootLayout';
import HomePage from './components/HomePage';
// import Inputfor from './components/Inputfor';

function App() {
  const router= createBrowserRouter([
    {
      path:"/",
      element: <RootLayout/>,
      errorElement: <ErrorPage/>,
      children:[
        {path:"/", element:<HomePage/>},
        {path:"/product", element:<Product/>},
        {path:"/product/:productId", element:<Productdetails/>}
      ]

    }
   ]);
   return (
     <div className="App">
      <RouterProvider router={router}/>
      {/* <Inputfor/> */}
     </div>
   );
 
}

export default App;
