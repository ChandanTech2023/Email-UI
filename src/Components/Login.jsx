import { signInWithPhoneNumber, signInWithPopup } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import { auth, provider } from '../firebase'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/appSlice'

function Login() {
  const dispatch = useDispatch();

  const SignInwithGoogle = async ()=>{
    try {
      const result = await signInWithPopup(auth, provider)
      console.log(result);
      dispatch(setUser({
        displayName:result.user.displayName, 
        email:result.user.email,
        photoUrl : result.user.photoURL
      }))

    } catch (error) {
      console.log(error);  
    }
  }
  return (
    <div className='w-screen h-screen flex justify-center items-center '>
        <div className='p-3 bg-white flex flex-col gap-3 rounded-md '>
    
            <GoogleButton type='dark' onClick={ SignInwithGoogle }/>

        </div>
         

    </div>
  )
}

export default Login