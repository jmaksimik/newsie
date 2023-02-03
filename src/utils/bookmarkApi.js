import tokenService from './tokenService';
const BASE_URL = '/api/bookmarks/'

export function create(data) {
    console.log(data, '<- data passed from clickhandler to utils/bookmarkApi.js')
    return fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Authorization': `Bearer ${tokenService.getToken()}`,
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        if(res.ok) return res.json()

        return res.json().then(res => {
            console.log(res, 'issue in util/bookmarkApi create function')
            throw new Error('something went wrong in adding bookmark -- error from utils/bookmarkApi')
        })
    })
}

export function deleteBookmark(bookmarkId) {
    return fetch(`${BASE_URL}${bookmarkId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${tokenService.getToken()}`
        }
    }).then(res => {
        if(res.ok) return res.json()
        throw new Error('Error deleating bookmark; issue in utils/bookmarkApi ')
    })
}

export function getAll() {
    return fetch(BASE_URL, {
        headers: {
            Authorization: `Bearer ${tokenService.getToken()}`
        }
    }).then(res => {
        if(res.ok) return res.json()
        throw new Error(res, '<- issue here')
    })
}