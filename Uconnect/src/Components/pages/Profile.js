import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../App';

const Profile = () => {
    const [pics, setPics] = useState([])
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")
    const { state, dispatch } = useContext(UserContext)
    useEffect(() => {
        fetch('/mypost', {
            headers: {
                'Authorization': localStorage.getItem('jwt')
            }
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                setPics(result.mypost)
                console.log(pics)
            })
    }, [])
    useEffect(() => {
        if (image) {
            const data = new FormData()
            data.append('file', image)
            data.append('upload_preset', 'Uconnect')
            data.append('cloud_name', 'imgdb22')

            fetch('https://api.cloudinary.com/v1_1/imgdb22/image/upload', {
                method: 'post',
                body: data
            })
                .then(res => res.json())
                .then(data => {
                    setUrl(data.url)
                    //localStorage.setItem("user",JSON.stringify({...state,pic:data.url}))
                    //dispatch({type:"UPDATEPIC",payload:data.url})
                    fetch('/updatepic', {
                        method: 'put',
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": localStorage.getItem('jwt')
                        },
                        body: JSON.stringify({ pic: data.url })
                    }).then(res => res.json())
                        .then(result => {
                            console.log(result)
                            localStorage.setItem("user", JSON.stringify({ ...state, pic: data.pic }))
                            dispatch({ type: "UPDATEPIC", payload: result.pic })
                        })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [image])
    const updatePhoto = (file) => {
        setImage(file)

    }
    return (
        <div style={{ maxWidth: '900px', margin: '0px auto' }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                margin: '20px 0px',
                maxWidth: '600px'
            }}>
                <div style={{ fontFamily: 'Calibri', marginLeft: '50px' }}>
                    <img style={{ width: '160px', height: '160px', borderRadius: '80px' }}
                        src={state ? state.pic : "loading"}
                    />

                    <div className="file-field input-field">
                        <div className="btn #64b5f6 blue darken-1">
                            <span>Update Pic</span>
                            <input type="file" onChange={(e) => updatePhoto(e.target.files[0])} />
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" />
                        </div>
                    </div>
                </div>
                <div style={{ fontFamily: 'Calibri', marginTop: '20px' }} >
                    <h2>{state ? state.name : 'loading'}</h2>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "108%",
                        }}
                    >
                        <h4>{pics.length}Posts</h4>
                        <h4>{state ? state.followers.length : "0"}Followers</h4>
                        <h4>{state ? state.following.length : "0"} Following</h4>
                    </div>
                </div>


            </div>
            <div className='gallery'>
                {
                    pics.map(item => {
                        return (
                            <img key={item._id} className='item' src={item.photo} alt={item.title} />
                        )
                    }
                    )
                }

            </div>
        </div>

    );
};

export default Profile;