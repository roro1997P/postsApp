import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { PostContext } from '../components/context/PostContext';
import { getPostById } from './helpers/getPostById';

export const Detail = ({ history }) => {

    const { state:posts } = useContext(PostContext);

    const { id } = useParams();
    const post = getPostById( posts, id );
    const { body, title, userId } = post;

    const handleReturn = () => {

        if( history.length <= 2 ) {
            history.push('/home');
        } else {
            history.goBack();
        }

    };

    return (
        <div className="row m-5">
        <div className="col-12">
            <h3 className="animate__animated animate__fadeInLeft"> Title: { title } </h3>
            <ul className="list-group list-group-flush animate__animated animate__fadeIn">
                <li className="list-group-item"> <b>Body: </b> { body }</li>
                <li className="list-group-item"> <b>Post Id: </b> { id } </li>
                <li className="list-group-item"> <b>User Id: </b> { userId } </li>
            </ul>

            <button className="btn btn-outline-info" onClick={ handleReturn }>
                Return
            </button>
        </div>
    </div>
    )
}
