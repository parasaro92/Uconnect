import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <div className="card home-card">
                <h5>Princy</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW5zfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div className='card-content'>
                    <i class="material-icons" style={{ color: "red" }}>favorite</i>
                    <h6>India-Himachal Pradesh</h6>
                    <p>If it is natural, picturesque beauty and a serenity far away from the cacophony of city life </p>
                    <input type="text" placeholder="add a comment" />
                </div>
            </div>
            <div className="card home-card">
                <h5>Sidharth</h5>
                <div className="card-image">
                    <img src="https://media.istockphoto.com/photos/futuristic-modern-empty-stage-reflective-dark-room-with-glowing-neon-picture-id1296175665?k=20&m=1296175665&s=612x612&w=0&h=kjMdfyJsAPyfRKMtEDqrI2wQQucM-yaKTPZB7oZK9fc=" />
                </div>
                <div className='card-content'>
                    <i class="material-icons" style={{ color: "red" }}>favorite</i>
                    <h6>Elevate Your Dance.</h6>
                    <p>Its great place near our college to show your moves. </p>
                    <input type="text" placeholder="add a comment" />
                </div>
            </div>
            <div className="card home-card">
                <h5>Priyanshu</h5>
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div className='card-content'>
                    <i class="material-icons" style={{ color: "red" }}>favorite</i>
                    <h6>Sunset view </h6>
                    <p>This is amazing!!!!!</p>
                    <input type="text" placeholder="add a comment" />
                </div>
            </div>
        </div>
    )
}

export default Home