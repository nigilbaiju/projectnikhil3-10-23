import { ref, set } from 'firebase/database';
import React,{useState}  from 'react'
import { uid } from 'uid';
import { db } from './Database';


const Course = () => {
    const [cname,setCname] =useState('');
    const [duration,setDuration] =useState('');
    const [fee,setFee] =useState('');
    const [error,setError] =useState(false);

    const readcoursename =(event) => {
        event.preventDefault();
        setCname(event.target.value);
    }
    const readcourseduration =(event) => {
        event.preventDefault();
        setDuration(event.target.value);
    }
    const readcoursefee =(event) => {
        event.preventDefault();
        setFee(event.target.value);
    }
    const readcoursedetails =(event) => {
        event.preventDefault();
        if(cname.trim () ==='' || duration === '' || fee ==='' )
        {
            setError(true);
            return;
        } 
        else
        {
            setError(false);
        }


        const uuid=uid();
        set(ref(db,`Events/${uuid}`),{cname,duration,fee,uuid,});
        
    }

    const connecttodb =() => {
        
    }

  return (
    <div>
      Course Name: <input type='text' onChange={readcoursename}/><br/>
      Duration: <input type='text' onChange={readcourseduration}/><br/>
      Fee Amount: <input type='text' onChange={readcoursefee}/><br/><br/>
      <input type='submit' onClick={readcoursedetails}/><br/><br/>
      {error && "Error occurs"}
    </div>
  )
}

export default Course
