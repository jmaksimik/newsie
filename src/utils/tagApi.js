import tokenService from './tokenService';
const BASE_URL = '/api/tags/'

export function create(data) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${tokenService.getToken}`
        },
        body: JSON.stringify(data)
    }).then(res => {
        if(res.ok) return res.json()
        throw new Error('Error creating tag, check server terminal')
    })
}

export function getAll() {
    return fetch(BASE_URL, {
        headers: {
            Authorization: `Bearer ${tokenService.getToken}`
        }
    }).then(res => res.json());
}