import React from 'react'
import illustration from '../assets/donate-illustration.svg'

const Success = ({dataDonate , setDataDonate}) => {
    return (
        <div className="text-center md:w-2/3 mx-auto">
            <img className="md:w-1/2 mx-auto my-14" src={illustration} alt="donate illustration" />
            <h1 className="text-2xl md:text-4xl">Thank you <span className="font-bold">{dataDonate.fullName}</span> for the donation</h1>
            <button onClick={() => setDataDonate(null)} className="donate">donate again</button>
        </div>
    )
}

export default Success
