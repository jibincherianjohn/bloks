import { signOut } from 'firebase/auth';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase-configu';
import { Button } from 'react-bootstrap';
function Header({isAuth,setisAuth}) {

  const navigate =useNavigate()

const signUserout= ()=>{
 
   signOut(auth).then(()=>{
   localStorage.clear()
   setisAuth(false)
    navigate('/login')

   })

}

  return (
    <div className=''> 

<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className='fs-3'>Bloks</Navbar.Brand>
          <Nav className="me-auto">
         <Link to={'/'} style={{textDecoration:"none"}}>   <Nav.Link href="#home">Home</Nav.Link></Link>
         { !isAuth ? <Link to={'/login'}style={{textDecoration:"none"}}> <Nav.Link href="#features">Login</Nav.Link></Link>
         : (<>
           <p className='btn text-light' onClick={signUserout}>Logout</p> 
  
              <Link to={'/post'}style={{textDecoration:"none"}}><Nav.Link href="#pricing">Create Post</Nav.Link></Link>
          </>
          )
}
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header