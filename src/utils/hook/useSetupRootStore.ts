import { useDispatch } from "react-redux";
import { MutableRefObject, useEffect } from "react";
import { setIsInitilized } from "../../stores/init";

export default function useSetupRootStore(isInitApplication: MutableRefObject<boolean>) {
    const dispatch = useDispatch()
    // loading init data.
    // init root store
    // dispatch()

    useEffect(() => {
        setTimeout(() => {
            if (!isInitApplication.current) dispatch(setIsInitilized(true))
            else isInitApplication.current = false;
        }, 8000);
    }, [])
}