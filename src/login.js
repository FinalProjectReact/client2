import React,{useRef} from 'react'
// import { useNavigate } from 'react-router-dom';

export default function Login() {

const inputName=useRef();
const inputPass=useRef();

// const useNavigategate=useNavigate();
// 

const data = (ev) => {
    
    const myName = inputName.current.value;
    const myPassword = inputPass.current.value;
    // if (users.find(user => user.name === myName && user.password === myPassword)) {
  
    //     localStorage['username'] = myName;
    //     localStorage['userpass'] = myPassword;
    //     localStorage['isLogin'] = true;

    //     alert('נרשמת בהצלחה!');
    //         // ניווט לדף הבית
    //         navigate('/home');
    //     }
    //     else {
    //         // ניווט לדף הרשמה
    //         navigate('/Register');
    //     }
    
        // לא לרענן את הדף
        ev.preventDefault();

    } 

   



  return (
    <div>
           <p>hello</p> 
            {/* <form onSubmit={ok}>
                <input type='text' required ref={inputName} />
                <input type='password' required ref={inputPass} />
                <button>Login</button>
            </form> */}
            
    </div>
    
  )
}
