import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index.tsx'
import { store } from './stores/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React>
  //   <RootLayout />
  // </React>,
  <RootLayout />
)


function RootLayout() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}
