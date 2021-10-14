import React from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import illustration from '../assets/box-illustration.svg'


const formSchema = yup.object({
    donation   : yup.number('Donation must be a number').min(10).required(),
    email      : yup.string().email().required(),
    fullName   : yup.string().matches(/^[a-zA-Z\s]+$/ , 'Full name can only contain letters').required(),
    nric       : yup.string().matches(/^[TFSG]\d{7}[A-Z]$/ , 'Invalid NRIC format').required(),
    address    : yup.string().min(5).max(60),
    phoneNumber: yup.string().min(8).max(15).matches(/^[+]?[(]?\d{1,4}[)]?[-\s\./0-9]+$/ , 'Invalid phone number format'),
})

const Form = ({setDataDonate}) => {
    const {register, handleSubmit , formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })
    
    const onSubmit = (data) => {
        console.table(data)
        setDataDonate(data)
    }
    
    return (
        <div>
            <img src={illustration} alt="box illustration" />
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    <p>{errors.fullName?.message}</p>
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
