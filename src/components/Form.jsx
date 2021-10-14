import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'


 /* donation : yup.number().required().min(10),
        email : yup.string().email().required(),
        fullname : yup.string().matches(/^[a-zA-Z\s]+$/,"Harus Alphabet").required(),
        nric : yup.string().required().matches(/^[TFSG]\d{7}[A-Z]$/,"Format NRIC tidak valid"),
        address : yup.string().min(10).max(60),
        phone_number : yup.string().min(10).matches(/^[+][(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]$/,"Nomer Telepon Tidak Valid") */

const formSchema = yup.object({
    donation   : yup.number().min(10).required(),
    email      : yup.string().email().required(),
    fullName   : yup.string().required(),
    nric       : yup.string().required(),
    address    : yup.string(),
    phoneNumber: yup.string(),
})

const Form = () => {
    const {register, handleSubmit , watch , formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })
    
    
    console.log(watch("email"))
    
    return (
        <div>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <div>
                    <label>Donation Amount</label>
                    <input type="number" {...register('donation')} />
                    <p>{errors.donation?.message}</p>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" {...register('email')} />
                    <small>{errors.email?.message}</small>
                </div>
                <div>
                    <label>Full Name</label>
                    <input type="text" {...register('fullName')} />
                    <p>{errors.fullName?.message}</p>k
                </div>
                <div>
                    <label>NRIC</label>
                    <input type="text" {...register('nric')} />
                    <p>{errors.nric?.message}</p>
                </div>
                <div>
                    <label>Address</label>
                    <input type="text" {...register('address')} />
                    <p>{errors.address?.message}</p>
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" {...register('phoneNumber')} />
                    <p>{errors.phoneNumber?.message}</p>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
