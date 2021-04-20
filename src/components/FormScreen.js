import React, { useContext, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { createPost } from './helpers/fetch';
import Swal from 'sweetalert2';
import { PostContext } from './context/PostContext';
import { types } from '../types/types';
import { v4 as uuidv4 } from 'uuid';

export const FormScreen = () => {

    const [ loading, setLoading ] = useState(false);
    const { dispatch } = useContext(PostContext);

    const [ formValues, handleInputChange ] = useForm({ title: '', body: '' });
    const { title, body } = formValues;
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(title.trim().length === 0 || body.trim().length === 0) {
            Swal.fire('All fields are required', '', 'warning');
            return false;
        }

        setLoading(true);
        const data = await createPost('https://jsonplaceholder.typicode.com/posts', formValues );
        
        if(!data) {
            Swal.fire('We have a problem', '', 'error');
            setLoading(false);
            return false;
        }

        Swal.fire('Success', '', 'success');
        setLoading(false);

        dispatch({
            type: types.addPost,
            payload: {
                userId: data.userId,
                id: uuidv4(),
                title: data.title,
                body: data.title,
            }
        })

    }

    return (
        <div className="container mt-3 animate__animated animate__fadeIn">
        <h3>Create post</h3>
        <form onSubmit={ handleSubmit }>
            <div className="form-group mt-3">
                <label htmlFor="title"><b>Title</b></label>
                <input 
                    type="text" 
                    className="form-control mt-3"  
                    name="title"
                    onChange={ handleInputChange }  
                    value={ title }  
                />
            </div>
            <div className="form-group mt-3">
                <label htmlFor="body"><b>Body</b></label>
                <input 
                    type="text" 
                    className="form-control mt-3"  
                    name="body"
                    onChange={ handleInputChange }
                    value={ body }  
                />
            </div>
            <button type="submit" className="btn btn-primary mt-3" disabled={ loading }>Confirm</button>
        </form>
        </div>
    )
}
