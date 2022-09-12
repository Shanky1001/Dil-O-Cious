import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CartState } from '../App';
import './Components Styles/login.css';
import userData from '../Assests/userData.json'

const Login = () => {
    const navigate = useNavigate();
    const { setLogged, setOpenSnack, setUserName } = CartState();

    const log = (e) => {
        e.preventDefault();
        const emailLog = document.querySelector("#emailLog").value;
        const passlogin = document.querySelector("#passlogin").value;
        const uname = document.querySelector("#uname").value;
        if (emailLog === "" || passlogin === "" || uname === '') {
            setOpenSnack({ open: true, html: `Please fill all the fields !!`, severity: "error", time: "1500" })
        } else {
            userData.forEach((val) => {
                if (val.email === emailLog && val.pass === passlogin && val.uname === uname) {
                    setLogged(true);
                    navigate('/menu');
                    setUserName(`${uname}`)
                    setOpenSnack({ open: true, html: `Welcome ${uname} ` })
                    document.querySelector("#emailLog").value = "";
                    document.querySelector("#passlogin").value = '';
                    document.querySelector("#uname").value = '';
                } else {
                    setOpenSnack({ open: true, html: `No matching user found! Please try again.`, severity: "error", time: "1500" })
                }
            })
        }
    }

    return (
        <div id="registerContainer">
            <h1 style={{ textAlign: "center", fontSize: "2.5rem", paddingTop: "5vh" }}>Log In</h1>
            <form id='registerForm'>
                <div>
                    <h1>Email-Id</h1>
                    <input type='email' placeholder='email@abc.com' required autoFocus id='emailLog' />
                    <h1> Password </h1>
                    <input type='password' placeholder='password' required id='passlogin' />
                    <p id="notice"></p>
                    <button onClick={log}> Login </button>
                </div>
            </form>
        </div>
    )
}

export default Login