import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const useGetMessages = (id) => {
    const [ loading, setLoading ] = useState(false)
    const [ messages , setMessages ] = useState([])

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true)
            try{
                const res = await fetch(`api/${id}`)
                const data = await res.json()
                if(data.error){
                    throw new Error(data.error)
                }
                setMessages(data)

            }catch(error){
                toast.error(error.message)
            }finally{
                setLoading(false)
            }
        }

        getMessages()
    }, [])

    return { loading, messages }
}

export default useGetMessages