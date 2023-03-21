import './App.css';
import MainPage from './Pages/MainPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Pages/Login';
import Root from './Pages/Root';
import Header from './Components/Header/Header';




function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Root />,
      children: [
        { index: true, element: <Login /> },
        { path: '/home', element: <MainPage /> }
      ]
    },


  ])


  return (
    <RouterProvider router={router} />

  );
}

export default App;
