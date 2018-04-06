import Fetch from './fetch.js';

let service = {
    signUp(data) {
        return Fetch("http://119.23.79.87:1477/api/v1.0/signup/", {
            method: "POST",
            data: data
        })
    }
}

export default service;