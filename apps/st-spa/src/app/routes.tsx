import { createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from './error-page'
import { Home } from './home'
import { Layout } from './layout'
import { Systems } from './systems/list'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'systems',
        element: <Systems />,
      },
    ],
  },
])
