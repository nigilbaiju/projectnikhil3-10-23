import React,{useState} from 'react'

const Inputfor = () => {
    const [viewd,setViewdata] = useState([]);
    const [title,setTitle] =useState('');
    const [error,setError] =useState(false);
    const [amount,setAmount] =useState('');
    const [da,setDate] =useState('');
    
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
    const readfulldata =(event) => {
        event.preventDefault();
        if(title.trim () ==='' || amount === '' || da ==='' )
        {
            setError(true);
            return;
        } 
        else
        {
            setError(false);
        }
        const myobj ={
            t:title,
            a:amount,
            d:da
        }
 
        console.log(myobj)
        //To save data
        fetch(
            "https://sample-77224-default-rtdb.firebaseio.com/samplepjt.json",
            {
                method: "POST",
                body: JSON.stringify(myobj),
                headers: {
                    "Content-Type":'application/json',
                },
            }
        );
        viewdata();

              
        
    }
    //To retrieve data      
    const viewdata =() => {
        
        fetch("https://sample-77224-default-rtdb.firebaseio.com/samplepjt.json").then((response) => {
            return response.json()
          }).then((data) => {
            // console.log(data);
            // console.log(snapshotToArray(data));
            setViewdata(snapshotToArray(data));
          })
          
    }
    function snapshotToArray(snapshot) {
        const array = [];
    
        Object.keys(snapshot).forEach((key) => {
          array.push(snapshot[key]);
        });
    
        return array;
      }
      
     

      // let screen='';
      // console.log("items=",viewd)
      // screen=viewd.length >0 && viewd.map((item) => {
      //   return <li>{item.t}</li>
      // })
     
  
  return (

 
    <div>
      {title}
      <br/>
      Title<input type='Text' onChange={readtitle}/> <br/>
      Amount<input type='text' onChange={readamount}/><br/>
      Date<input type='date' onChange={readdate}/><br/>
      <button type='submit' onClick={readfulldata} >Save</button>
      <button type='submit' onClick={viewdata} >View</button>
      <br/>
      {error && "Error occurs"}
      {/* {screen} */}

      <br/>
      <br/>
      <br/>
      <table border ="1">
        <tr>
        <td>Title</td>
        <td>Amount</td>
        <td>Date</td>
        </tr>
    
        {viewd.map((value,index)=>{
                  return(
                    <tr key={index}> 
                    {console.log(value['a'])}
                      <td>{value.t}</td>
                      <td>{value.a}</td>
                      <td>{value.d}</td>   
                    </tr>
                  )
                })}
        

       
      </table>
    </div>
  )
}

export default Inputfor
