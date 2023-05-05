import React, { useContext } from 'react';
import { userContext } from '../UserProvider/UserProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserInfo = () => {

    let { user, update , recoverPassword} = useContext(userContext);

     let recoverUserPassword = () => {

        let email = document.getElementById('email').innerText
        if (!email) {
            toast('Please Provide Email to recover Password')
        }
        recoverPassword(email)
        .then(()=>toast("Please Check Your Email to Reset Password"))
        // console.log(email);

    }

    let updateUser = event => {

        event.preventDefault();
        let name = event.target.name.value;
        let photo = event.target.photo.value;

        // console.log(name, photo);

        update(name, photo)
            .then(() => {
                toast('Profile Updated')
                location.reload()
            }
            )
    }

    return (
        <div className='container mx-auto text-center'>
            <h1 className='text-3xl py-5'>User Information</h1>

            <div className='md:flex justify-around items-center '>
                <div className='p-5'>
                    {user &&
                        <>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <p className='text-xl'>Name : {user.displayName}</p>
                            <p className='text-xl'>Email : <span id='email'>{user.email}</span></p>


                        </>
                    }

                </div>
                <div className='border border-green-500 p-5 rounded-lg shadow-lg'>
                    <h1 className='text-2xl'>Update Information</h1>
                    <form onSubmit={updateUser} >
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
                            <input required name='photo' type="text" placeholder="URL of Photo" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </form>
                    <div className="form-control mt-6">
                        <button onClick={recoverUserPassword} className="btn btn-primary">Update Password</button>
                    </div>


                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UserInfo;