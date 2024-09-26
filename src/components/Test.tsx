'use client'

import useAuth from "@/hooks/useAuth";
// import { getAuth } from "@/services/getAuth";
// import  Cookies from 'js-cookie'
const Test = ({user}) => {

  // const token = Cookies.get('access_token');
  // console.log('token')
  // console.log(token)


 
  return (
    <div>
      {user ? (
        <div>
          <h2>User Profile</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>First Name: {user.first_name}</p>
          <p>Last Name: {user.last_name}</p>
          <p>Superuser: {user.is_superuser ? 'Yes' : 'No'}</p>
        </div>
      ) : (
        <p>No user data found</p>
      )}
    </div>
  )
}

export default Test