const host = 'http://localhost:8000/api';

async function makeAuthenticatedGetRequest(url, callback = () => {}) {
    url = host + url;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });

    if (response.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
        return;
    }

    callback(response);
    return response;
}

async function makeUnauthenticatedGetRequest(url, callback = () => {}) {
    url = host + url;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    callback(response);
    return response;
}

async function makeAuthenticatedPostRequest(url, data, callback = () => {}) {
    url = host + url;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(data)
    });

    if (response.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
        return;
    }

    callback(response);
    return response;
}

async function makeUnauthenticatedPostRequest(url, data, callback = () => {}) {
    url = host + url;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    callback(response);
    return response;
}

export { makeAuthenticatedGetRequest, makeUnauthenticatedGetRequest, makeAuthenticatedPostRequest, makeUnauthenticatedPostRequest };