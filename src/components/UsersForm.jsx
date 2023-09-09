import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Swal from 'sweetalert2'

const defaultValueReset = {
    email: '',
    password: '',
    name: '',
    lastName: '',
    registrationDate: ''
}

const UsersForm = ({ getUsers, update, handleCloseForm }) => {
    const { register, reset, handleSubmit } = useForm()
    {
        //! USERS CRATION
    }

    const getCreateUsers = data => {
        const URL = 'https://crud-users-l6b4.onrender.com/api/users/'
        axios.post(URL, data)
            .then(res => {
                Swal.fire(
                    'Good job!',
                    'User created successfully!!',
                    'success'
                )
                getUsers()
            })
            .catch(error => console.log(error))
    }
    {
        //! UPDATE USERS INFORMATION
    }

    useEffect(() => {
        reset(update)
    }, [update])

    const btnSubmit = data => {
        if (update) {
            const URL = `https://crud-users-l6b4.onrender.com/api/users/${update._id}/`
            axios.patch(URL, data)
                .then(res => {
                    getUsers()
                })
                .catch(error => console.log(error))
            reset(defaultValueReset)
        }
        else {
            getCreateUsers(data)
            reset(defaultValueReset)
        }
    }

    return (
        <div className='container__form'>
            <form onSubmit={handleSubmit(btnSubmit)}>
                <main className='container__main__create'>
                    <h2 className='form__title'>Create New Users</h2>
                    <div className='form__container' id='formContainer'>
                        <li className='form__group'>
                            <input className='form__input' type="text" id='name'{...register("name")} placeholder=' ' required/>
                            <label htmlFor="name" className='form__label'>Name: </label>
                            <span className='form__line'></span>
                        </li>

                        <li className='form__group'>
                            <input className='form__input' type="text" id='lastName'{...register("lastName")} placeholder=' ' required/>
                            <label htmlFor="lastName" className='form__label'>Last Name: </label>
                            <span className='form__line'></span>
                        </li>

                        <li className='form__group'>
                            <input className='form__input' type="email" id='email'{...register("email")} placeholder=' ' required/>
                            <label htmlFor="email" className='form__label'>Email: </label>
                            <span className='form__line'></span>
                        </li>

                        <li className='form__group'>
                            <input className='form__input' type="date" id='registrationDate'{...register("registrationDate")} required/>
                            <label htmlFor="registrationDate" className='form__label'></label>
                        </li>

                        <li className='form__group'>
                            <input className='form__input' type="password" id='password'{...register("password")} placeholder=' ' required/>
                            <label htmlFor="password" className='form__label'>Password</label>
                            <span className='form__line'></span>
                        </li>

                        <div className='form__submit'>
                            <button className='form__submit__create form_btn'>Create</button>
                            <button onClick={handleCloseForm} className='form__submit__close form_btn '>Close</button>
                        </div>
                    </div>
                </main>
            </form>
        </div>
    )
}

export default UsersForm