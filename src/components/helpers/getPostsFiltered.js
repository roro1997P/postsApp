export const getPostsFiltered = ( posts, id ) => {

    return posts.filter( post => post.id !== id )

};