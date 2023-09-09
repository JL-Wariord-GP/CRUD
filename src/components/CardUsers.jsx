import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import eye from '../assets/icons8-visible-16.png'

const CardUsers = ({user, getUsers, setUpdate, handleOpenForm}) => {
    const [eyeUsers, setEyeUsers] = useState(false)

    {
        //! DELETE RECORD USERS
    }

    const deleteUsers = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#dc3545',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your record has been deleted.',
                'success'
              )
              const URL = `https://crud-users-l6b4.onrender.com/api/users/${user._id}/`
                axios.delete(URL)
                .then(res => getUsers())
                .catch(error => console.log(error))
            } else if (
                result.dismiss === Swal.DismissReason.cancel
              ){
                Swal.fire(
                  'Cancelled',
                  'Your record has not been deleted',
                  'error'
                )
              }
          })   
    }

    {
        //! UPDATE USERS INFORMATION
    }

    const getUpdate = () => {
        handleOpenForm()
        setUpdate(user)
    }
    {
        //! VALIDATION OF PERMISSIONS TO DISPLAY PASSWORD
    }
    const handleEye = () => {
        Swal.fire({
            title: 'You have permission to view passwords?.',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Excellent!', '', 'success')
              setEyeUsers(true)
            } else if (result.isDenied) {
              Swal.fire('¡Come back when you have permission!', '', 'info')
              setEyeUsers(false)
            }
          })
        
    } 

  return (
    <main className='box__card'>
        <ul>
            <li className='card__title'>{`${user['name']} ${user['lastName']}`}</li>
            <li className='card__email'>{user.email}</li>
            <li className='card__birthday'>{user.registrationDate}</li>
            <div className='card__box__pass__img'>
                <li className='card__password'>{eyeUsers ? `${user.password}` : '**********'}</li>   
                <button className='btn__eye__img' onClick={handleEye}><img className='card__password__img' src={eye} /></button>
            </div>
            <div className='btn__del__upd'>
                <button onClick={() => {deleteUsers(user._id)}} className='btn__del'>
                    <box-icon name='trash' type='solid' color='#ff0000'></box-icon>
                </button>
                <button onClick={getUpdate} className='btn__upd'>
                    <box-icon name='edit-alt' type='solid' color='#baa714' ></box-icon>
                </button>
            </div>
        </ul>
    </main>
  )
}

export default CardUsers