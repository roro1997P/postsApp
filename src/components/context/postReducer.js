import { types } from '../../types/types';


export const postReducer = ( state, action ) => {
    switch ( action.type ) {

        case types.getPosts:
            return action.payload;

        case types.addPost:
            return [ ...state, action.payload ];

        case types.deletePost:
            return action.payload;
    
        default:
            return state;
    }
}