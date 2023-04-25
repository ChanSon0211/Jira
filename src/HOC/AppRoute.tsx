import { useAppSelector } from 'app/hooks'
import React from 'react'
import { Navigate } from 'react-router'

export interface AppRouteProps {
    path?: String,
    Component: any,
    isAdmin?: boolean,
    isAuth?: boolean,
}

const AppRoute = ({ path, Component, isAdmin, isAuth }: AppRouteProps) => {
    const profile = useAppSelector(state => state.user.userProfile);

    if (profile) {
        if (isAdmin) {
            return Component
        }
        if(isAuth) {
            return Component
        }

        return <Navigate to={'/'} />
    } else {
        return <Navigate to={'/'} />
    }


    
}

export default AppRoute