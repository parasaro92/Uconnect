import React,{useState,useEffect} from "react";
import { Link,useNavigate } from 'react-router-dom';

const CreatePost =()=>{
    const history = useNavigate()
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [image,setImage] = useState('')
    const [url,setUrl] = useState('')

    useEffect(()=>{
        if(url){
            fetch("/createpost",{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":localStorage.getItem('jwt')
                },
                
                    body:JSON.stringify({
                        title,
                        body,
                        photo:url
                    })
            }).then(res=>res.json())
            .then(data=>{
                if(data.Error){
                    //M.toast({html:data.error,classes:"#c62828 red darken-3"})
                    return console.log(data.Error)
                }	
                else{
                    //M.toast({html:data.message,classes:"#43a047 green darken-1" })
                    
                    console.log('Created post Successfully')
                    history('/')
                }
            }).catch(err=>{console.log(err)})
        }
    },[url])
    const postDetails=() =>{

        const data = new FormData()
        data.append('file',image)
        data.append('upload_preset','Uconnect')
        data.append('cloud_name','imgdb22')

        fetch('https://api.cloudinary.com/v1_1/imgdb22/image/upload',{
            method:'post',
            body: data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    return(
        <div className="card input-filed"
        style={{
            margin:"10px auto",
            maxWidth:"500px",
            padding:"20px",
            textAlign:"center"

        }}
        >
            <input type="text" placeholder="title" onChange={(e)=>setTitle(e.target.value)}/>
            <input type="text" placeholder="body" onChange={(e)=>setBody(e.target.value)}/>
            <div className="file-field input-field">
                <div className="btn #64b5f6 blue darken-1">
                    <span>Upload Image</span>
                    <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
            </div>
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={()=>postDetails()}>
            Submit Post
            </button>
        </div>
    )

} 
export default CreatePost