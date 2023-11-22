import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { auth, db } from '../firebase-configu';
import { useNavigate } from 'react-router-dom';


function Createpost({isAuth}) {

const [title,setTitle] =useState("")
const [post,setPost]=useState("")

const navigate = useNavigate()

const postCollectionRef= collection(db,"posts")

const createPost = async ()=>{

  await addDoc(postCollectionRef,  {title,
   post,
   name: auth.currentUser.displayName ,
    idk : auth.currentUser.uid   })
    navigate('/')
} 
useEffect(()=>{
  if(!isAuth){
    navigate('/login')
  }

},[])

  return (
    <div className=' '>
<div className='container-flex w-100 mt-5 '>
  <h2 className='text-center fw-bold'> Create your post</h2>
  <div className=' container mt-5 bg-dark shadow rouneded rounded border border' >
    
  <Form className='bg - p-3'>
      <Form.Group className="mb-3 text-light" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text text-light" placeholder="Title" onChange={(e)=>{setTitle(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3 text-light" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Post</Form.Label>
        <Form.Control as="textarea" placeholder='Content' onChange={(e)=>{setPost(e.target.value)}} rows={3} />
      </Form.Group>
      <div className='container w-100 text-center mb-4'>
      <Button onClick={createPost} className='text-white mb-2  '>Post</Button>
      </div>
    </Form>
    
  </div>
</div>
    </div>
  )
}

export default Createpost