import Fetch from './fetch.js';

let service = {
    signUp(data) {
        return Fetch("http://119.23.79.87:1477/api/v1.0/signup/", {
            method: "POST",
            data: data
        })
    },
    logIn(data) {
        return Fetch("http://119.23.79.87:1477/api/v1.0/signin/", {
            method: "POST",
            data: data
        })
    },
    postscore(data,token) {
        return Fetch("http://119.23.79.87:1477/api/v1.0/postscore/", {
            method: "POST",
            data: data
        },token)
    }
}

export default service;