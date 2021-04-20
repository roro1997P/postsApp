import React, { useEffect, useReducer } from 'react'
import { PostContext } from './components/context/PostContext';
import { postReducer } from './components/context/postReducer'
import { AppRouter } from './router/AppRouter'


const init = () => {
    return JSON.parse(localStorage.getItem('posts')) || [];
}

export const BlogApp = () => {

    const [state, dispatch] = useReducer(postReducer, [], init);

    useEffect( () => {
        localStorage.setItem('posts', JSON.stringify(state))
    }, [state]);

    return (

        <PostContext.Provider value={{
            state,
            dispatch,
        }}>
            <AppRouter />
        </PostContext.Provider >

    )
}