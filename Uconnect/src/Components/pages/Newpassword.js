import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Newpassword = () => {
  const history = useNavigate();
  const [password, setPassword] = useState("");
  const { token } = useParams();
  console.log(token);
  const PostData = () => {
    fetch("/new-password", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        password,
        token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.Error) {
          //   M.toast({html:data.error,classes:"#c62828 red darken-3"})
          return console.log(data.Error);
        } else {
          //   M.toast({html:data.message,classes:"#43a047 green darken-1" })

          console.log("New Password ");
          history.push("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>Uconnect</h2>

        <input
          type="text"
          className="form-control"
          placeholder="Enter a new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn waves-effect waves-light #64b5f6 blue lighten-2"
          onClick={() => PostData()}
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default Newpassword;
