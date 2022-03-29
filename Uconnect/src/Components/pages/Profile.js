import React,{useEffect, useState,useContext} from 'react'
import { UserContext } from '../../App';

const Profile = () =>{
    const [pics,setPics]=useState([])
    const {state,dispatch} = useContext(UserContext)
    useEffect( ()=>{
            fetch('/mypost',{
                headers:{
                    'Authorization':localStorage.getItem('jwt')
                }
            }).then(res=>res.json())
            .then(result=>{
                setPics(result.mypost)
            })
    },[])
    return(
        <div style={{maxWidth:'900px',margin:'0px auto'}}>
            <div style={{
                display:'flex',
                justifyContent:'space-around',
                margin:'20px 0px',
                maxWidth:'600px'
            }}>
                    <div style={{fontFamily:'Calibri',marginLeft:'50px'}}>
                    <img style={{width:'160px',height:'160px',borderRadius:'80px'}}
                    src='https://www.dailycameranews.com/wp-content/uploads/2015/06/Sony-RX100-IV-Sample-Images.jpg'
                   />
                   </div>
                    <div style={{fontFamily:'Calibri',marginTop:'20px'}} >
                        <h2>{state?state.name:'loading'}</h2>
                    
                        <div style={{display:'flex',justifyContent:'space-between',width:'108%'}}>
                        <h4>10 Posts</h4>
                        <h4>10 Followers</h4>
                        <h4>10 Following</h4>
                        </div>
                    </div>
                    
                
            </div>
            <div className='gallery'>
            {
                pics.map(item=>{
                    return(
                        <img key={item._id} className='item' src={item.photo} alt={item.title}/>
                    )
                }
                )
            }

            </div>
            </div>

    );
};

export default Profile;