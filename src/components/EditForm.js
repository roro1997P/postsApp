import React, { useContext, useMemo, useState } from 'react'
import { useParams } from 'react-router';
import { updatePost } from './helpers/fetch';
import { useForm } from '../hooks/useForm';
import { PostContext } from './context/PostContext';
import { getPostById } from './helpers/getPostById';
import Swal from 'sweetalert2';

export const EditForm = ({ history }) => {

    const [ loading, setLoading ] = useState(false);
    const { state } = useContext(PostContext);

    const { id } = useParams();

    const post = useMemo(() => getPostById(state, id), [state, id]);   
    const { userId } = post;

    const [ formValues, handleInputChange ] = useForm({ title: post.title, body: post.body, });
    const { title, body } = formValues;
    
    const handleReturn = () => {

        if( history.length <= 2 ) {
            history.push('/home');
        } else {
            history.goBack();
        }

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ( title.trim().length === 0 || body.trim().length === 0 ) {
            Swal.fire('All fields are required', '', 'warning');
            return;
        }

        setLoading(true);
        const data = await updatePost(`https://jsonplaceholder.typicode.com/posts/${ id }`, { title, body, userId });

        if (!data) {
            Swal.fire('We have a problem', '', 'error');
            setLoading(false);
            return;
        }
        Swal.fire( 'Success!' , '', 'success');
        setLoading(false);
    };

    return (
        <div className="container mt-3 animate__animated animate__fadeIn">
            <h3>Edit post</h3>
            <form onSubmit={ handleSubmit }>
                <div className="form-group mt-3">
                    <label htmlFor="title"><b>Title</b></label>
                    <input 
                        type="text" 
                        className="form-control mt-2"  
                        name="title"
                        onChange={ handleInputChange }  
                        value={ title }  
                    />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="body"><b>Body</b></label>
                    <input 
                        type="text" 
                        className="form-control mt-2"  
                        name="body"
                        onChange={ handleInputChange }  
                        value={ body }  
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3" disabled={ loading }>Confirm</button>
            </form>

            <button className="btn btn-outline-info w-25" onClick={ handleReturn }>
                Return
            </button>

        </div>
    )
}
