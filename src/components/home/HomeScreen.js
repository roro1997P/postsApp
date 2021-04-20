import React, { useContext } from 'react'
import { PostContext } from '../context/PostContext'
import { TitlesList } from './TitlesList';
import { types } from '../../types/types';

export const HomeScreen = () => {

    const { state, dispatch } = useContext(PostContext);

    const handleClick = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const resp = await data.json();
        dispatch({
            type: types.getPosts,
            payload: resp
        })
    };

    return (
        <div className="container">
        {
            (state.length === 0 )
                ? <button onClick={ handleClick } className="btn btn-info mt-5 align">Get Posts</button>
                : <ul className="cartas animate__animated animate__fadeIn">
                        {
                            state.map(p => (
                                <TitlesList
                                    key={p.id}
                                    title={p.title}
                                    id={p.id}
                                />
                            ))
                        }

                    </ul>
        }
        </div>
    )
}
