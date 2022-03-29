import React,{useEffect, useState,useContext} from 'react'
import { UserContext } from '../../App';
import { useParams } from 'react-router-dom';

const UserProfile = () =>{
    const [userProfile,setProfile]=useState(null)
    const {state,dispatch} = useContext(UserContext)
    const {userid} = useParams()
    console.log(userid)
    useEffect( ()=>{
            fetch(`/user/${userid}`,{
                headers:{
                    'Authorization':localStorage.getItem('jwt')
                }
            }).then(res=>res.json())
            .then(result=>{
                console.log(result)
                setProfile(result)
            })
    },[])
    return(
        <>
        {userProfile? 
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
                        <h2>{userProfile.user.name}</h2>
                        <h5>{userProfile.user.email}</h5>
                        <div style={{display:'flex',justifyContent:'space-between',width:'108%'}}>
                        <h4>{userProfile.posts.length}</h4>
                        <h4>10 Followers</h4>
                        <h4>10 Following</h4>
                        </div>
                    </div>
                    
                
            </div>
            <div className='gallery'>
            {
                userProfile.posts.map(item=>{
                    return(
                        <img key={item._id} className='item' src={item.photo} alt={item.title}/>
                    )
                }
                )
            }

            </div>
            </div>
            : <h2>Loading...!</h2>}
            </>
    );
};

export default UserProfile;
