export const getPostById = ( posts, uid ) => {

    let id = parseInt(uid);

    const postId = posts.find( post => post.id === id ) || null;

    return postId;

};