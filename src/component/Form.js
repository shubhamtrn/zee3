import React,{useState} from 'react'

function Form() {
    const [name,setName]=useState({firstname:"",lastname:""})
    const[email,setemail]=useState({emailid:""})

    const onHandeled=(e)=>{
        alert(`Usernamne: ${name.firstname} ${name.lastname} email id: ${email.emailid}`)
    }
  return (
    <div>
        <form onSubmit={onHandeled}>
      <label>Username</label>
      <input type="text" value={name.firstname} onChange={(e)=>setName({...name,firstname:e.target.value})} />
      <input type="text" value={name.lastname} onChange={(e)=>setName({...name,lastname:e.target.value})} />
      <br />
      <br />
      <label>Email address</label><br />
      <input type="text" value={email.emailid} onChange={(e)=>setemail({...email,emailid:e.target.value})} /><br></br>
      <br />
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
