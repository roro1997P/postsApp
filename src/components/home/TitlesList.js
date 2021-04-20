import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { types } from '../../types/types';
import { PostContext } from '../context/PostContext';
import { deletePost } from '../helpers/fetch';
import { getPostsFiltered } from '../helpers/getPostsFiltered';

export const TitlesList = ({ title, id }) => {

    const { state, dispatch } = useContext(PostContext);

    const handleDelete = async () => {
        
        const resp = await deletePost(id);
        if(resp){
            const posts = getPostsFiltered( state, id );
            dispatch({
                type: types.deletePost,
                payload: posts
            });
            Swal.fire('Success', '', 'success');
        } else {
            Swal.fire('We have a problem', '', 'error');
        }
    };

    return (
        <div className="card-deck carta">
            <h5 className="card-title title">{title}</h5>
            <Link to={`edit/${id}`} className="btn btn-primary">
                Edit
                    </Link>
            <Link to={`detail/${id}`} className="btn btn-dark">
                Details
            </Link>
            <button onClick={handleDelete} className="btn btn-danger">
                Delete
            </button>
        </div>
    )
}
