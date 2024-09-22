import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Redirect() {

    const { currentUser , error} = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        
        
        if(!currentUser){
            
            navigate('/sign-up')
        } 
    }, [currentUser,navigate]);

    return (
    <></>
  )
}
