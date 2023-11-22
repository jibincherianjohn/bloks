import React from 'react'
import { Button } from 'react-bootstrap'
import { auth, provider } from '../firebase-configu'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function Login({setisAuth}) {

const navigate=useNavigate()

const signwithgoogle=  ()=>{

 signInWithPopup(auth,provider).then((result)=>{
  localStorage.setItem("isAuth",true)
  setisAuth(true)
navigate('/')
 })

}


  return (
    <div className='container w-100'>
      
      <div className='text-center container w-100 bg- mt-5'>  
           
            <p className='text-center fs-4'> sign with google to Continue</p>
  
            <Button onClick={signwithgoogle} className='btn  btn-dark rounded rounded shadow lg'><img width={45} height={45} src="https://i.postimg.cc/R0ckFbhj/pngwing-com-3.png" alt="" />Sign In with Google</Button>
         
      </div>
    </div >
  )
}

export default Login