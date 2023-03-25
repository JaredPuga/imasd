import { useContext } from "react"
import LoginContext from "../context/loginProvider"

export const useLogin = () => {
    return useContext(LoginContext)
}