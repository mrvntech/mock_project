import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import "./App.scss"

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
