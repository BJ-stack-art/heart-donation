import React from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import illustration from '../assets/box-illustration.svg'
import { useHistory } from 'react-router-dom'


const formSchema = yup.object({
    donation   : yup.number().typeError('you must specify a number').min(10).required(),
    email      : yup.string().email().required(),
    fullName   : yup.string().matches(/^[a-zA-Z\s]+$/ , 'Full name can only contain letters').required(),
    nric       : yup.string().matches(/^[TFSG]\d{7}[A-Z]$/ , 'Invalid NRIC format').required(),
    address    : yup.string().min(5).max(60).nullable(true).transform(v => v === '' ? null : v),
    phoneNumber: yup.string().min(8).max(15).matches(/^[+]?[(]?\d{1,4}[)]?[-\s\./0-9]+$/ , 'Invalid phone number format').nullable(true).transform(v => v === '' ? null : v), // eslint-disable-line
})

const Form = () => {
    const history = useHistory()
    const {register, handleSubmit , formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })
    
    const onSubmit = (data) => {
        history.push('/success' , {data})
    }
    
    return (
        <div className=" md:w-2/3 mx-auto">
            <div className="md:w-2/3 mx-auto">
                <img className="w-full" src={illustration} alt="box illustration" />
            </div>
            <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <div className={"flex items-center " + (errors.donation ? "invalid" : "")}>
                        <span className="absolute text-3xl font-light translate-x-8">S$</span>
                        <input autoFocus={true} min="10" className={" py-4 px-8 pl-20 text-2xl font-semibold"} placeholder="Donation amount" type="number" {...register('donation')} />
                    </div>
                    <p className="error">{errors.donation?.message}</p>
                </div>
                <div className="flex flex-col md:flex-row gap-0 md:gap-8 mt-8">
                    <div className={"form-group md:w-1/2 w-full " + (errors.email ? "invalid" : "")}>
                        <label>Email <span className="text-red-400">*</span></label>
                        <input type="email" {...register('email')} />
                        <p className="error">{errors.email?.message}</p>
                    </div>
                    <div className={"form-group md:w-1/2 w-full " + (errors.fullName ? "invalid" : "")}>
                        <label>Full Name <span className="text-red-400">*</span></label>
                        <input type="text" {...register('fullName')} />
                        <p className="error">{errors.fullName?.message}</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-0 md:gap-8">
                    <div className={"form-group md:w-1/2 w-full " + (errors.nric ? "invalid" : "")}>
                        <label>NRIC <span className="text-red-400">*</span></label>
                        <input  type="text" {...register('nric')} />
                        <p className="error">{errors.nric?.message}</p>
                    </div>
                    <div className={"form-group md:w-1/2 w-full " + (errors.phoneNumber ? "invalid" : "")}>
                        <label>Phone Number</label>
                        <input type="text" {...register('phoneNumber')} />
                        <p className="error">{errors.phoneNumber?.message}</p>
                    </div>
                </div>
                <div className={"form-group " + (errors.address ? "invalid" : "")}>
                    <label>Address</label>
                    <input  type="text" {...register('address')} />
                    <p className="error">{errors.address?.message}</p>
                </div>
                <div className="flex justify-end">
                <button className="submit" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form
