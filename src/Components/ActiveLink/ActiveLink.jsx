import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600 font-bold": ""
                        
                        
                    }
                  >
                    {children}
                    {/* other code */}
        </NavLink>
    );
};

export default ActiveLink;