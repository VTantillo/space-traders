import { createBrowserRouter } from 'react-router-dom'
import { Contracts } from './contracts'
import { Dashboard } from './dashboard'
import { ErrorPage } from './error-page'
import { Faction } from './factions/faction'
import { Factions } from './factions/list'
import { Layout } from './layout'
import { Register } from './register'
import { Fleet } from './ships/list'
import { Ship } from './ships/ship'
import { Status } from './status'
import { Systems } from './systems/list'
import { System } from './systems/system'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'fleet',
        children: [
          {
            index: true,
            element: <Fleet />,
          },
          {
            path: ':shipSymbol',
            element: <Ship />,
          },
        ],
      },

      {
        path: 'contracts',
        element: <Contracts />,
      },
      {
        path: 'systems',
        children: [
          {
            index: true,
            element: <Systems />,
          },
          {
            path: ':systemSymbol',
            element: <System />,
          },
        ],
      },
      {
        path: 'factions',
        children: [
          {
            index: true,
            element: <Factions />,
          },
          {
            path: ':factionSymbol',
            element: <Faction />,
          },
        ],
      },
      {
        path: 'status',
        element: <Status />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
])
