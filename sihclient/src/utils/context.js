import {useContext, createContext, useState} from "react"

const LevelContext = createContext()

export const useLevelContext = () => useContext(LevelContext)

export const LevelProvider = ({children})=>{
    const [level, setLevel] =useState(0)

    return (
        <LevelContext.Provider value={{level, setLevel}}>
            {children}
        </LevelContext.Provider>
    )
} 
