class HttpRequest {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    get(url, callback) {
        this.xhr.open("GET", url);
        this.xhr.addEventListener("load", () => {
            const response = {
                status: this.xhr.status
            };

            if (this.xhr.status === 200) {
                response.data = JSON.parse(this.xhr.responseText);
            }

            callback(response);
        });
        this.xhr.send();
    }

    post(url, data, callback) {
        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        this.xhr.addEventListener("load", () => {
            const response = {
                status: this.xhr.status
            };

            if (this.xhr.status === 201) {
                response.data = JSON.parse(this.xhr.responseText);
            }

            callback(response);
        });
        this.xhr.send(JSON.stringify(data));
    }

    put(url, data, callback) {
        this.xhr.open("PUT", url);
        this.xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
        this.xhr.addEventListener("load", () => {
            const response = {
                status: this.xhr.status
            };

            if (this.xhr.status === 200) {
                response.data = JSON.parse(this.xhr.responseText);
            }

            callback(response);
        });
        this.xhr.send(JSON.stringify(data));
    }

    delete(url, callback) {
        this.xhr.open("DELETE", url);
        this.xhr.addEventListener("load", () => {
            const response = {
                status: this.xhr.status
            };

            if (this.xhr.status === 200) {
                response.data = JSON.parse(this.xhr.responseText);
            }

            callback(response);
        });
        this.xhr.send();
    }
}

export default HttpRequest;
