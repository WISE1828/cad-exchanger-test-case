import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import ContactPage from './pages/ContactPage/ContactPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/contact',
		element: <ContactPage />,
	},
])

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
