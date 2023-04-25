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

    const profile1 = {id: 1, name: 'asdf', email: 'dskjfls@gmail.com', userType: 'admin'}


    if (profile1) {
        if (isAdmin) {
            if (profile1.userType === 'admin') {

                return {...Component}
            }else {
                return <Navigate to='/' />
            }
        }
    }


    if(profile1) {
        if(isAuth) {
            return {...Component}
        }
    }

  return <Navigate to='/' />
}

export default AppRoute