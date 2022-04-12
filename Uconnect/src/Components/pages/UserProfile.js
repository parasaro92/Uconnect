import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const [userProfile, setProfile] = useState(null);
  const { state, dispatch } = useContext(UserContext);
  const { userid } = useParams();
  console.log(userid);
  useEffect(() => {
    fetch(`/user/${userid}`, {
      headers: {
        Authorization: localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setProfile(result);
      });
  }, []);

  const followUser = () => {
    fetch("/follow", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        followId: userid,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: "UPDATE",
          payload: { following: data.following, followers: data.followers },
        });
        localStorage.setItem("user", JSON.stringify(data));
        setProfile((prevState) => {
          return {
            ...prevState,
            user: data,
          };
        });
      });
    // const userFollowerResult = await followUser.json();
    // console.log(userFollowerResult);
    // dispatch({
    // 	type: "UPDATE",
    // 	payload: {
    // 		following: userFollowerResult.following,
    // 		followers: userFollowerResult.followers,
    // 	},
    // });
    // localStorage.setItem("user", JSON.stringify(userFollowerResult));
    // setProfile((prevState) => {
    // 	return {
    // 		...prevState,
    // 		findUser: {
    // 			...prevState.findUser,
    // 			followers: [
    // 				...prevState.findUser.followers,
    // 				userFollowerResult._id,
    // 			],
    // 		},
    // 	};
    // });
    // setShowFollow(false);
    // }
  };

  return (
    <>
      {userProfile ? (
        <div style={{ maxWidth: "900px", margin: "0px auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "20px 0px",
              maxWidth: "600px",
            }}
          >
            <div style={{ fontFamily: "Calibri", marginLeft: "50px" }}>
              <img
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "80px",
                }}
                src={userProfile.user.pic}
              />
            </div>
            <div style={{ fontFamily: "Calibri", marginTop: "20px" }}>
              <h2>{userProfile.user.name}</h2>
              <h5>{userProfile.user.email}</h5>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "108%",
                }}
              >
                <h4>{userProfile.posts.length}</h4>
                <h4>{userProfile.user.followers.length}</h4>
                <h4>
                  {userProfile.user.following
                    ? userProfile.user.following.length
                    : ""}
                </h4>
              </div>
              <button
                className="btn waves-effect waves-light #64b5f6 blue lighten-2"
                onClick={() => followUser()}
              >
                Follow
              </button>
            </div>
          </div>
          <div className="gallery">
            {userProfile.posts.map((item) => {
              return (
                <img
                  key={item._id}
                  className="item"
                  src={item.photo}
                  alt={item.title}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <h2>Loading...!</h2>
      )}
    </>
  );
};

export default UserProfile;
