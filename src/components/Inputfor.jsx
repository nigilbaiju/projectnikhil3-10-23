import React,{useState} from 'react'

const Inputfor = () => {
    
    const [title,setTitle] =useState('');
    const [error,setError] =useState(false);
    const [amount,setAmount] =useState('');
    const [da,setDate] =useState();
    const onSubmit =(event) => {
        event.preventDefault();
        if(title.trim () ==='' || amount === '' || da ==='' )
        {
            setError(true);
            return;
        } 
    }
    const readtitle =(event) => {
        event.preventDefault();
        console.log("Title:" + event.target.value);

        setTitle(event.target.value);
    }
    const readamount =(event) => {
        event.preventDefault();
        console.log("Amount "+ event.target.value);
        setAmount(event.target.value);
    }
    const readdate =(event) => {
        event.preventDefault();
        console.log("Date "+ event.target.value);
        setDate(event.target.value);
    }
    const myobj ={
        t:title,
        a:amount,
        d:da
    }
  return (

 
    <div>
      {title}
      <br/>
      Title<input type='Text' onChange={readtitle}/> <br/>
      Amount<input type='text' onChange={readamount}/><br/>
      Date<input type='date' onChange={readdate}/><br/>
      <button type='submit' onClick={onSubmit} >Save</button>
      <br/>
      {error && 'Error occurs'}
    </div>
  )
}

export default Inputfor
