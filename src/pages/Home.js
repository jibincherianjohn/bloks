import { collection,  deleteDoc,  doc,  getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase-configu'
import { ArrowDown, Bookmark, PenTool, Play, Trash2, User } from 'react-feather';
import Card from 'react-bootstrap/Card';
import './Home.css'
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Home({isAuth}) {

  const [postList,setPostList]=useState([])

  const postCollectionRef= collection(db,"posts")



useEffect(()=>{

  const getPosts= async () =>{

 const data = await getDocs(postCollectionRef)
 setPostList(data.docs.map((i)=>({...i.data(), id : i.id })))


  }
getPosts()

})

const deletePost = async(id)=>{
 const postDoc = doc (db,"posts", id  )

   await deleteDoc(postDoc)
}


  return (
    <div id='lk'>
       <div style={{marginTop:'150px'}} className='container w-100 mb-5 border border shadow 'id='l'>
        <Row className=' w-100 lv'>
            <Col  lg={6} md={12}>
            <h3 style={{}} className='fs-3 p-2 fw-bold hdng' >Bloks</h3>
            <p className=''><i>Craft Your Blog sharing your thoughts! to Express Your thesis</i> </p>
       <Link to={'/login'} style={{textDecoration:'none'}}>    <Button className='btn rounded rounded ol' id='ok'> Let's Go <Play></Play></Button></Link>
       <br />
       <br />
           <Button className='mb-4 text-light' variant='outline-dark'><a className='text-light' style={{textDecoration:'none'}} href="#card">Explore Now</a></Button>
            </Col>

            <Col className=' shadow'  lg={6} md={12}>
            <img style={{width:'107%'}} src="https://i.postimg.cc/Yq4qJtsY/01recurpost-gif-1.gif" alt="" />
            </Col>
        </Row>
        </div>
        
        <hr style={{margin:'100px'}} />
   

{
       postList.map((j)=>{
            return(
                <div className='container w-75 crddiv'>
               <Card id='card' style={{border:'2px solid white'}} className='crd mb-4  mt-5 bg-light shadow'>
                <div className='text-start'><Bookmark className='text-primary'></Bookmark></div>
      <Card.Body>
      
        <Card.Title className='fs-3 text-center text-dark '>{j.title}</Card.Title>
        <Card.Text>
            <p className='pka mt-4 text-dark '>{j.post}</p>
            <div className='text-start mt-4'>
               <User className='mb-2 text-dark' size={20}></User> {j.name}
            </div>
      {isAuth && auth.currentUser.uid ==j.idk && ( <div  className='text-end'><Trash2 className='btn ' style={{color:'red'}} 
           onClick={()=>{deletePost(j.id)}} size={50}></Trash2></div>)}


        </Card.Text>
      </Card.Body>
    </Card>
              </div>
            )
        })
        }

  
    </div>
  )
}

export default Home