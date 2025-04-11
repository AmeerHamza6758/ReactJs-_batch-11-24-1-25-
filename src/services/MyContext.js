import { createContext, useState } from "react";

export const MyContext = createContext()

export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const [email, setEmail] = useState('ameerhamza@gmail.com')
    const [name, setName] = useState('Ameer')
    return (
        <MyContext.Provider value={{ count, email , name}}>
            {children}
        </MyContext.Provider>
    )
}