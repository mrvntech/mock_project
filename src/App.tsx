import "./App.scss"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import Popup from './component/popup'
import useSetupRootStore from "./utils/hook/useSetupRootStore"
import { Outlet } from "react-router-dom"
import { setIsInitilized } from "./stores/init"
import { RootState } from "./stores"

function App() {
  const isInitApplication = useRef(true)
  const isInitilized = useSelector((state: RootState) => state.init.isInitilized)
  const dispatch = useDispatch()
  useSetupRootStore(isInitApplication)
  useEffect(() => {
    setTimeout(() => {
      if (!isInitApplication.current) {
        dispatch(setIsInitilized(true))
      }
      isInitApplication.current = false
    }, 2000);
  }, [])

  return (
    <>
      <Popup />
      {
        isInitilized ?
          <Outlet />
          : <></>
      }
    </>
  )
}

export default App
