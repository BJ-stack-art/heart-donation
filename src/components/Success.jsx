import React from 'react'
import illustration from '../assets/donate-illustration.svg'

const Success = ({dataDonate}) => {
    return (
        <div>
            <h1>Thank you {dataDonate.fullName} for the donation</h1>
            <img src={illustration} alt="donate illustration" />
        </div>
    )
}

export default Success
