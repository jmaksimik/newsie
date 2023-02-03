import tokenService from './tokenService';
const BASE_URL = '/api/tags/'

export function create(data) {
    console.log(data, '<- data passed from form to utils/tagApi.js')
    return fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify({data}),
        headers: {
            'Authorization': `Bearer ${tokenService.getToken()}`,
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        if(res.ok) return res.json()

    
        return res.json().then(res => {
            console.log(res, 'issue in util/tagapi create function');
            throw new Error('something went wrong in create post')
        })
    })
}

export function getAll() {
    return fetch(BASE_URL, {
        headers: {
            Authorization: `Bearer ${tokenService.getToken()}`
        }
    }).then(res => {
        if(res.ok) return res.json()
        throw new Error('error in util/tagAPI fetch')
    });
}

export function deleteTag(tagId) {
    return fetch(`${BASE_URL}${tagId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${tokenService.getToken()}`
        }
    }).then(res => {
        if(res.ok) return res.json()
        throw new Error('Error deleting tag; issue in utils/tagApi')
    })
}