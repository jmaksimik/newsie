import tokenService from './tokenService';
const BASE_URL = '/api/bookmarks'

export function create(data) {
    console.log(data, '<- data passed from clickhandler to utils/bookmarkApi.js')
    return fetch(BASE_URL, {
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