function easyHTTP() {
    this.http = new XMLHttpRequest();
}

//Make HTTP Get Request
easyHTTP.prototype.get = function (url, cb) {
    const self = this;
    this.http.open('GET', url, true);
    this.http.onload = function () {
        if (self.http.status === 200) {
            cb(null, self.http.responseText);
        } else {
            cb('Error: ' + self.http.status);
        }
    };
    this.http.send();
};


//Make HTTP POST Request
easyHTTP.prototype.post = function (url, data, cb) {
    const self = this;
    this.http.open('POST', url, true)
    this.http.setRequestHeader('content-type', 'application/json');

    this.http.onload = function () {
        cb(null, self.http.responseText);
    };
    this.http.send(JSON.stringify(data));
};

//Make HTTP PUT Request
easyHTTP.prototype.put = function (url, data, cb) {
    const self = this;
    this.http.open('PUT', url, true)
    this.http.setRequestHeader('content-type', 'application/json');

    this.http.onload = function () {
        cb(null, self.http.responseText);
    };
    this.http.send(JSON.stringify(data));
};
//Make HTTP DELETE Request
easyHTTP.prototype.delete = function (url, cb) {
    const self = this;
    this.http.open('DELETE', url, true);
    this.http.onload = function () {
        if (self.http.status === 200) {
            cb(null, "post deleted");
        } else {
            cb('Error: ' + self.http.status);
        }
    };
    this.http.send();
};