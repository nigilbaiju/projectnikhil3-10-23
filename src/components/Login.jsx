import React,{useState} from 'react'

const Login = (props) => {

    const [em,setEmail] =useState('');
    const [pwd,setPassword] =useState('');
    const [error,setError] =useState(false);

    const readEmail =(event) => {
        event.preventDefault();
        setEmail(event.target.value);
    }

    const readPassword=(event) => {
        event.preventDefault();
        setPassword(event.target.value);
    }
    const readlogindata =(event) => {
        event.preventDefault();
        if(em.trim () ==='' || pwd === '' )
        {
            setError(true);
            return;
        } 
        else
        {
            setError(false);
        }

        props.checkLogin(em,pwd);
    }
  return (
    <div>
    <form>
      Email: <input type="text" onChange={readEmail}/><br/>
      Password: <input type="password" onChange={readPassword} /><br/>
      <button type='submit' onClick={readlogindata}>Login</button>
      </form>
      {error && 'Error Occurs'}
    </div>
  )
}

export default Login
