import tokenService from './tokenService';
const BASE_URL = '/api/tags/'

export function create(data) {
    return fetch(BASE_URL, {
        method: 'POST',
        body: data,
        headers: {
            Authorization: 'Bearer ' + tokenService.getToken()
        },
    }).then(res => {
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
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
        if(res.ok) return res.json()
        throw new Error('error in util/tagAPI fetch')
    });
}