const http = new easyHTTP;

http.get('https://jsonplaceholder.typicode.com/posts', (err, posts) => {
    if (err) {
        console.log(err);
    } else {
        console.log(posts);
    }

});

//Post request

//create the data
const data = {
    name: 'the name',
    number: 1232343456
};

http.post('https://jsonplaceholder.typicode.com/posts', data, (err, response) => {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});

//put request

http.put('https://jsonplaceholder.typicode.com/posts/5', data, (err, response) => {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});

http.delete('https://jsonplaceholder.typicode.com/posts/3', (err, response) => {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});