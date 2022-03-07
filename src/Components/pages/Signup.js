import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="mycard">
			<div className="card auth-card input-field">
				<h2>Uconnect</h2>
				<input type="text" className="form-control" placeholder="Name" />
				<input type="text" className="form-control" placeholder="Email" />
				<input type="text" className="form-control" placeholder="Password" />
				<button className="btn waves-effect waves-light #64b5f6 blue lighten-2">Sign Up</button>
                <h5>
                    <Link to="/signin">Already have an account ?</Link>
                </h5>
			</div>
		</div>
    )
}

export default Signup