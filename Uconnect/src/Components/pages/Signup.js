import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';

import M from 'materialize-css';

const Signup = () => {

	const history = useNavigate()
	const [name,setName] = useState("")
	const [email,setEmail] = useState("")
	const [password,setPassword] = useState("")
	const PostData =()=>{
		if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
			return console.log('Invalid email')
		}
		fetch("/signup",{
			method:"post",
			headers:{
				"Content-Type":"application/json"
			},
			
				body:JSON.stringify({
					name,
					email,
					password
				})
		}).then(res=>res.json())
		.then(data=>{
			if(data.Error){
				//M.toast({html:data.error,classes:"#c62828 red darken-3"})
				return console.log(data.Error)
			}	
			else{
				//M.toast({html:data.message,classes:"#43a047 green darken-1" })
				console.log(data)
				history('/signin')
			}
		}).catch(err=>{console.log(err)})

	}

    return (
        <div className="mycard">
			<div className="card auth-card input-field">
				<h2>Uconnect</h2>
				<input type="text" className="form-control" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}  />
				<input type="text" className="form-control" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
				<input type="password" className="form-control" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
				<button className="btn waves-effect waves-light #64b5f6 blue lighten-2" onClick={()=>PostData()}>Sign Up</button>
                <h5>
                    <Link to="/signin">Already have an account ?</Link>
                </h5>
			</div>
		</div>
    )
}

export default Signup