import React from 'react'


 const UserDetails = (props) => {
  return (
    <div className='userDetails'>
        <p>{props.name}</p>
        <p>{props.email}</p>
    </div>
  )
}


export default UserDetails;