import React, { useContext, useState } from "react";
import { DataContext } from "../DataContext";
import "../App.css";

export default function Homepage() {
  const {
    signUp,
    login,
    email,
    setEmail,
    password,
    setPassword,
    age,
    setAge,
    confirmPassword,
    setConfirmPassword,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    ageError,
    setAgeError,
  } = useContext(DataContext);

  const [flag, setFlag] = useState(true);
  const updateFlag = () => {
    setFlag(!flag);
    setEmailError(null);
    setPasswordError(null);
    setAgeError(null);
  };

  //registeration
  const validEmail = (e) => {
    setEmail(e.target.value);
    setEmailError(null);
  };

  const validAge = (e) => {
    setAge(e.target.value);
    setAgeError(null);
  };

  const validPassword = (e) => {
    setPassword(e);
    setPasswordError(null);
  };

  const validConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordError(null);
  };

  //login
  const userEmail = (e) => {
    setEmail(e.target.value);
    setEmailError(null);
  };
  const userPassword = (e) => {
    setPassword(e.target.value);
    setPasswordError(null);
  };

  return (
    <div className="main">
      <div className="whyJoinUs">
        <h5>Why Join Us?</h5>
        <p>
          <strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            interdum orci eu sem congue laoreet. Mauris sed massa velit.
          </strong>
          <br />
          Phasellus vulputate sem nibh, vitae vestibulum lectus sodales a.
          Pellentesque ultricies, risus ac ultrices gravida, massa sapien
          dapibus justo, eu dictum urna nibh id neque. Aliquam erat volutpat.
          Pellentesque mauris enim, tempus eu nunc sed, aliquet gravida purus.
          Nulla id sapien purus. Donec vel eros sem. Phasellus vulputate sem
          nibh, vitae vestibulum lectus sodales a. Pellentesque ultricies, risus
          ac ultrices gravida, massa sapien dapibus justo, eu dictum urna nibh
          id neque. Aliquam erat volutpat. Pellentesque mauris
        </p>
      </div>
      {flag ? (
        <div className="loginRegister">
          <h3>Login</h3>
          <label>Email:</label>
          <input onChange={userEmail}/>
          <br />
          {emailError && <label className="error">{emailError}</label>}
          <br />
          <label>Password:</label>
          <input type="password" onChange={userPassword}/>
          <br />
          {passwordError && <label className="error">{passwordError}</label>}
          <br />
          <button onClick={() => login(email, password)}>Submit</button>
          <br />
          <button onClick={updateFlag}>Register</button>
        </div>
      ) : (
        <div className="loginRegister">
          <h3>Register</h3>
          <label>Email:</label>
          <input onChange={validEmail}/>
          <br />
          {emailError && <label className="error">{emailError}</label>}
          <br />
          <label>Age:</label>
          <input onChange={validAge}/>
          <br />
          {ageError && <label className="error">{ageError}</label>}
          <br />
          <label>Password:</label>
          <input type="password" onChange={(e)=>validPassword(e.target.value)}/>
          <br />
          {passwordError && <label className="error">{passwordError}</label>}
          <br />
          <label>Confirm password:</label>
          <input onChange={validConfirmPassword}/>
          <br />
          {passwordError && <label className="error">{passwordError}</label>}
          <br />
          <button onClick={()=>signUp(email, password, confirmPassword, age)}>Submit</button>
          <br />
          <button onClick={updateFlag}>Login</button>
        </div>
      )}
    </div>
  );
}
