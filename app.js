const http = new easyHTTP;

// GET POSTS

// http.get('https://jsonplaceholder.typicode.com/comments',
//     function (err, response) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(response)
//         }
//     });



// GET SIMPLE POST

// http.get('https://jsonplaceholder.typicode.com/comments/1',
//     function (err, response) {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(response)
//         }
//     })





// CREATE POST

// Create Data

const data = {
    title: 'Customer Post',
    body: 'this is a custom post'
};

http.post('https://jsonplaceholder.typicode.com/posts', data,
    function (err, post) {
        if (err) {
            console.log(err)
        } else {
            console.log(post)
        }
    });