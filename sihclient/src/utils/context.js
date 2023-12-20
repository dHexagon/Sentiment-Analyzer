import {useContext, createContext, useState} from "react"

const LevelContext = createContext()

export const useLevelContext = () => useContext(LevelContext)

export const LevelProvider = ({children})=>{
    const [level, setLevel] =useState(-1)
    const [loading,setLoading] = useState(false)

    return (
        <LevelContext.Provider value={{level, setLevel, loading,setLoading}}>
            {children}
        </LevelContext.Provider>
    )
} 
