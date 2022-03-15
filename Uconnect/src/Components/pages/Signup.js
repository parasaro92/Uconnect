import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
	const [name,setName] = useState("")
	const [paswsword,setPassword] = useState("")
	const [email,setEmail] = useState("")
    const PostData = ()=>{
		fetch("/signup",{
			method:"post",
			header:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({
				name:"",
				password:"",
				email:""
			})
		}).then(res=>res.json())
		.then(data=>{
			console.log(data)
				
			
		})
	}

    return (
        <div className="mycard">
			<div className="card auth-card input-field">
				<h2>Uconnect</h2>
				<input type="text" className="form-control" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}  />
				<input type="text" className="form-control" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
				<input type="text" className="form-control" placeholder="Password" value={paswsword} onChange={(e)=>setPassword(e.target.value)}/>
				<button className="btn waves-effect waves-light #64b5f6 blue lighten-2"
				onClick={()=>PostData}
				>Sign Up</button>
                <h5>
                    <Link to="/signin">Already have an account ?</Link>
                </h5>
			</div>
		</div>
    )
}

export default Signup