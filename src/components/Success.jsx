import React, { useEffect, useState } from 'react'
import illustration from '../assets/donate-illustration.svg'
import { Link, useHistory , Redirect } from "react-router-dom"

const Success = () => {
    let history = useHistory();
    const [name, setName] = useState(null)
    
    useEffect(() => {
        if(history.location.state)
                setName(history.location.state.data.fullName)
    }, [])
    
    if(history.location.state) {
        return (
            <div className="text-center md:w-2/3 py-16 mx-auto">
                <img className="md:w-1/2 mx-auto my-14" src={illustration} alt="donate illustration" />
                <h1 className="text-2xl md:text-4xl">Thank you <span className="font-bold">{name}</span> for the donation</h1>
                <Link to="/">
                <button className="donate">donate again</button>
                </Link>
            </div>
        )
    } else {
        return <Redirect to="/" />
    }
}

export default Success
