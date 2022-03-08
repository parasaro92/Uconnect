import React from 'react'

const Profile = () =>{
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
                        <h2>Veerendra Makena</h2>
                    
                        <div style={{display:'flex',justifyContent:'space-between',width:'108%'}}>
                        <h4>10 Posts</h4>
                        <h4>10 Followers</h4>
                        <h4>10 Following</h4>
                        </div>
                    </div>
                    
                
            </div>
            <div className='gallery'>
            <img className='item' src='https://cdn.pixabay.com/photo/2020/06/14/18/11/the-caucasus-5298803_960_720.jpg'/>
            <img className='item' src='https://cdn.pixabay.com/photo/2022/01/31/15/18/coffee-6984075_960_720.jpg'/>
            <img className='item' src='https://cdn.pixabay.com/photo/2020/06/14/18/11/the-caucasus-5298803_960_720.jpg'/>
            <img className='item' src='https://cdn.pixabay.com/photo/2022/01/31/15/18/coffee-6984075_960_720.jpg'/>
            <img className='item' src='https://cdn.pixabay.com/photo/2020/06/14/18/11/the-caucasus-5298803_960_720.jpg'/>
            <img className='item' src='https://cdn.pixabay.com/photo/2022/01/31/15/18/coffee-6984075_960_720.jpg'/>
            </div>
            </div>

    );
};

export default Profile;