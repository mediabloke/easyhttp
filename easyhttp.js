function easyHTTP() {
    this.http = new XMLHttpRequest();
}

//Make HTTP Get Request
easyHTTP.prototype.get = (url, cb) => {
    this.http.open('GET', url, true);
    this.http.onload = () => {
        if (this.http.status === 200) {
            cb(null, this.http.responseText);
        } else {
            cb('Error: ' + this.http.status);
        }
    };
    this.http.send();
};


//Make HTTP POST Request
easyHTTP.prototype.post = (url, data, cb) => {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('content-type', 'application/json');

    this.http.onload = () => {
        cb(null, this.http.responseText);
    };
    this.http.send(JSON.stringify(data));
};

//Make HTTP PUT Request
easyHTTP.prototype.put = (url, data, cb) => {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('content-type', 'application/json');

    this.http.onload = function () {
        cb(null, this.http.responseText);
    };
    this.http.send(JSON.stringify(data));
};
//Make HTTP DELETE Request
easyHTTP.prototype.delete = (url, cb) => {
    this.http.open('DELETE', url, true);
    this.http.onload = function () {
        if (this.http.status === 200) {
            cb(null, "post deleted");
        } else {
            cb('Error: ' + this.http.status);
        }
    };
    this.http.send();
};