import { Container, Button } from '@chakra-ui/react'
import './App.css';
import { useState } from 'react';

function App() {

  const [login, setLogin] = useState(true)
  return (
    <div className="App">
      <Container>
        <div className='form-box'>
          <div className='btn-sec'>
            <button className={login ? 'toggle' : ''} onClick={() => {setLogin(true)}}>Login</button>
            <button className={!login ? 'toggle' : ''} onClick={() => {setLogin(false)}}>Sign</button>
          </div>

          {
            login ? <>
              <div className='form '>
                <h2><b>Login Form</b></h2>
                <input type="text" placeholder='Enter Usename' />
                <input type="password" placeholder='Enter Password' />
                <a href="#"> Forget Password</a>
                <button>Login</button>
                <p>Not a Member?<a href="#" onClick={() => {setLogin(false)}}>Signup now</a></p>

              </div>

            </>
              : <>
               <div className='form '>
                <h2><b>Signup now</b></h2>
                <input type="text" placeholder='Enter Usename' />
                <input type="password" placeholder='Enter Password' />
                <input type="password" placeholder='Confirm Password' />
                <button>Signup</button>
                <p><a href="#" onClick={() => {setLogin(true)}}>Login Here</a></p>

              </div>
              
              </>
          }
        </div>
      </Container>
    </div>


  );
}

export default App;
