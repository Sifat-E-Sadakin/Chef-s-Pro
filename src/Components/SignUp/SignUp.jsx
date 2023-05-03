import React, { useContext, useState } from 'react';
import { userContext } from '../UserProvider/UserProvider';
import ActiveLink from '../ActiveLink/ActiveLink';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const SignUp = () => {

    let {googlePopUp, createNewUser, gitPopUp, update} = useContext(userContext);

    let [err, setErr] = useState(null)


    let submit=(event)=>{
       
        event.preventDefault()

        let email= event.target.email.value;
        let password = event.target.password.value;
        let confirmPassword = event.target.ConfirmPassword.value;
        let name = event.target.name.value;
        let photo = event.target.photo.value;



        console.log(email, password, confirmPassword);

        setErr(null)

        

        if (password != confirmPassword){
            setErr('Password Did not Matched')
            return;

        }
        if(password.length <6){
            setErr('Password Must Contain at least 6 character')
            return;

        }
        // if(!/(?=.*[0-9])/.test(password)){
        //     setErr('Password must contain a number')
        //     return

        // }
        createNewUser(email,password)
        .then(res =>{
            let user = res.user;
            console.log(user);
            update(name, photo)
            
        }

        )
        .catch(err=> setErr(err.message))

    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col ">
                        <div className="text-center ">
                            <h1 className="text-5xl font-bold p-5">Sing Up Here!</h1>

                            <form onSubmit={submit}  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input required name='name' type="text" placeholder="Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input name='photo' type="text" placeholder="URL of Photo" className="input input-bordered" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input required name='email' type="email" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input required type="password" name='password' placeholder="password" className="input input-bordered" />
                                        
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Confirm Password</span>
                                        </label>
                                        <input type="password" name='ConfirmPassword' placeholder="Confirm password" className="input input-bordered" />
                                        
                                    </div>
                                    <p>Already have an account  <span className='link font-semibold'><ActiveLink to='/login'>Login here</ActiveLink></span> </p>
                                    {err && <p className='text-accent'>{err}</p>}
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </div>
                            </form>
                            <div className="form-control mt-6">
                                <button onClick={googlePopUp} className="btn btn-primary"><FaGoogle className='text-xl mr-2'></FaGoogle>SignUp with google</button>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={gitPopUp} className="btn btn-primary"><FaGithub className='text-xl mr-2'></FaGithub>SignUp with github </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default SignUp;