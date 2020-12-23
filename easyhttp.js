function easyHTTP() {
    this.http = new XMLHttpRequest();
}


// MAKE A GET HTTP REQUEST
easyHTTP.prototype.get = function (url, callback) {

    this.http.open('GET', url, true);

    this.http.onload = () => {
        if (this.http.status === 200) {
            callback(null, this.http.responseText);
        } else {
            callback('error:' + this.http.status);
        }
    }

    this.http.send()
}

//MAKE AN HTTP POST REQUEST
easyHTTP.prototype.post = function (url, data, callback) {
    this.http.open('POST', url, true)
    this.http.setRequestHeader('content-type',
        'application/json')

    this.http.onload = () => {
        callback(null, this.http.responseText);
    }

    this.send(JSON.stringify(data));
}

//MAKE AN HTTP PUT REQUEST


//MAKE AN HTTP DELETE REQUEST