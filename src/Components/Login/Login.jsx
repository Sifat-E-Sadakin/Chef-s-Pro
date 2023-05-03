import React, { useContext, useState } from 'react';
import { userContext } from '../UserProvider/UserProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import ActiveLink from '../ActiveLink/ActiveLink';

const Login = () => {

    let [err, setErr]= useState(null)

    let {login, googlePopUp, gitPopUp} = useContext(userContext);


    let submit=(event)=>{
       
        event.preventDefault()

        let email= event.target.email.value;
        let password = event.target.password.value;

        console.log(email, password);

        setErr(null)
        login(email,password)
        .then(res =>{
            let user = res.user;
            console.log(user);
            
        }

        )
        .catch(err =>setErr(err.message))

    }
    return (
        <div className="hero  min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold p-5">Login now!</h1>

                    <form onSubmit={submit}  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <p>First time in Chef's Pro <span className='link font-semibold'><ActiveLink to='/signUp'>Sign Up here</ActiveLink></span> </p>
                                </label>
                                {err &&  <p>{err}</p>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                
                            </div>
                        </div>
                    </form>
                    <div className="form-control mt-6">
                    <button onClick={googlePopUp} className="btn btn-primary"><FaGoogle className='text-xl mr-2'></FaGoogle> Login With google</button>
                                
                    </div>
                    <div className="form-control mt-6">
                    <button onClick={gitPopUp} className="btn btn-primary"><FaGithub className='text-xl mr-2'></FaGithub> Login With github</button>
                                
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;