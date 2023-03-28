import { useState } from 'react'

const useForm = (initialForm = {})=> {

    const [state, setState] = useState(initialForm)

    const handleInpuChange = ({target})=> {
        setState({
            ...state,
            [target.name]:  target.value,
        })
    }

    const reset = ()=>{
        setState( initialForm )
    }

    return [state, handleInpuChange, reset]
}

export default useForm