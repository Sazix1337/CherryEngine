export class Request {
    static $Post(url, data = {}) {
        return new Promise(resolve => {
            fetch(url, { method: 'POST', body: data }).then(response => {
                resolve(response)
            })
        })
    }

    static $Get(url, data = {}) {
        return new Promise(resolve => {
            fetch(url, { method: 'GET' }).then(response => {
                resolve(response)
            })
        })
    }
}