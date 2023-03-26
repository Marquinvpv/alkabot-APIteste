import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import Home from './routes/Home';
import Comments from './routes/Comments';
import User from './routes/User';
import './../src/css/index.css';

const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
        path:"/",
        element: <Home />
      },{
        path:"/posts/:id/comments",
        element: <Comments/>
      },{
        path:"/user/:id",
        element:<User />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
