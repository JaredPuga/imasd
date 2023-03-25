import Cookies from "js-cookie";

const { createContext, useState, useEffect } = require("react");



const LoginContext = createContext()

const LoginProvider = ({children}) => {



    const [loggeado, setLoggeado] = useState(false)
    const [name, setName] = useState('')
    const [id, setId] = useState(0)

    return (
        <LoginContext.Provider
            value={{
                loggeado,
                setLoggeado,
                setName,
                name,
                id,
                setId,
            }}
        >
            {children}
        </LoginContext.Provider>
    )
}


export {
    LoginProvider
}

export default LoginContext