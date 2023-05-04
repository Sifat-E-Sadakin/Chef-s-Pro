import React, { useContext } from 'react';
import { userContext } from '../UserProvider/UserProvider';

const UserInfo = () => {

    let { user } = useContext(userContext);
   
    return (
        <div className='container mx-auto text-center'>
            <h1 className='text-3xl py-5'>User Information</h1>
            {user &&
                <>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </div>
                    <p className='text-xl'>Name : {user.displayName}</p>
                    <p className='text-xl'>Email : {user.email}</p>


                </>
           }
        </div>
    );
};

export default UserInfo;