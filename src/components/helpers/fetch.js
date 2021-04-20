import { v4 as uuidv4 } from 'uuid';


export const getUsers = async ( url ) => {

    const resp = await fetch(url);

    const data = await resp.json();

    if (!data) {
        return false;
    }

    return data;

};

export const deletePost = async ( id ) => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${ id }`)
    return resp.ok;
};

export const createPost = async ( url, info ) => {

    const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            userId: uuidv4(),
            title: info.title,
            body: info.body,
        }),
        headers: { 'Content-type': 'application/json; charset=UTF-8'}
    });

    const data = await resp.json();

    if (!data) {
        return false;
    }

    return data;

};

export const updatePost = async ( url, info ) => {

    const resp = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(info),
        headers: { 'Content-type': 'application/json; charset=UTF-8'}
    });

    const data = await resp.json();

    if (!data) {
        return false;
    }

    return data;

};