import React, { useContext, useState } from 'react';
import { userContext } from '../UserProvider/UserProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Navigate, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    let [err, setErr] = useState(null)

    let { login, googlePopUp, gitPopUp, user, recoverPassword } = useContext(userContext);

    let location = useLocation();
    // console.log(location);

    let navigate = useNavigate();

    let go = location.state?.from?.pathname || '/';



    let submit = (event) => {

        event.preventDefault()

        let email = event.target.email.value;
        let password = event.target.password.value;

        console.log(email, password);

        setErr(null)
        login(email, password)
            .then(res => {
                let user = res.user;
                console.log(user);
                navigate(go)

            }

            )
            .catch(err => setErr(err.message))

    }

    let handelGooglePopUp = () => {
        googlePopUp()
            .then(res => {
                navigate(go)
            })

    }
    let handelGitPopUp = () => {
        gitPopUp()
            .then(res => {

                navigate(go)
            })

    }

    let recoverUserPassword = () => {

        let email = document.getElementById('email').value
        if (!email) {
            toast('Please Provide Email to recover Password')
        }
        recoverPassword(email)
        .then(()=>toast("Please Check Your Email to Reset Password"))
        // console.log(email);

    }


    return (
        <div className="hero  min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold p-5">Login now!</h1>

                    <form onSubmit={submit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input id='email' required name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a onClick={recoverUserPassword} className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <p>First time in Chef's Pro <span className='link font-semibold'><ActiveLink to='/signUp'>Sign Up here</ActiveLink></span> </p>
                                </label>
                                {err && <p className='text-warning'>{err}</p>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>

                            </div>
                        </div>
                    </form>
                    <div className="form-control mt-6">
                        <button onClick={handelGooglePopUp} className="btn btn-primary"><FaGoogle className='text-xl mr-2'></FaGoogle> Login With google</button>

                    </div>
                    <div className="form-control mt-6">
                        <button onClick={handelGitPopUp} className="btn btn-primary"><FaGithub className='text-xl mr-2'></FaGithub> Login With github</button>

                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;