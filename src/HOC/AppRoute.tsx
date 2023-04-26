import { useAppSelector } from 'app/hooks';
import React from 'react'
import { Navigate, Route } from 'react-router';

export interface AppRouteProps{
    path?: string;
    Component?: React.ReactNode | any ;
    isAdmin?: boolean;
    isAuth?: boolean;
}

const AppRoute = ({path, Component, isAdmin, isAuth}: AppRouteProps) => {


    const profile = useAppSelector(state => state.user.userProfile);

    if (profile) {
        if (isAdmin) {
            return {...Component}
            
        }
    }


    if(profile) {
        if(isAuth) {
            return {...Component}
        }
    }

  return <Navigate to='/' />
}

export default AppRoute