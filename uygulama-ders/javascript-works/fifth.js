const jsonPlaceholderURL = "https://jsonplaceholder.typicode.com/";

// XHR
// XML HTTP REQUEST
// EXTENDIBLE MARKUP LANGUAGE HTTP REQUEST

// GET REQUEST
// const getRequest = (endpoint, callback) => {
//     const xhr = new XMLHttpRequest
//     xhr.open("GET", endpoint)
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === XMLHttpRequest.DONE){
//             if(xhr.status === 200){
//                 const response = JSON.parse(xhr.responseText)
//                 callback(null, response)
//             } else {
//                 callback("Couldn't fetch the data " + xhr.status, null)
//             }
//         }
//     }
//     xhr.send()
// }

// getRequest(`${jsonPlaceholderURL}posts/7`, (error, response) => {
//     if(error){
//         console.log(error);
//     } else {
//         console.log(response);
//     }
// })

// POST REQUEST
// const postRequest = (url, data, cb) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open("POST", url, true);
//     xhr.setRequestHeader("Content-Type", "application/json")

//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status < 300 && xhr.status >= 200){
//                 console.log(typeof xhr.responseText);
//                 const response = JSON.parse(xhr.responseText)
//                 console.log(response);
//                 cb(null, response)
//             } else {
//                 cb("Hata :" + xhr.status, null)
//             }
//         }
//     }
//     xhr.send(JSON.stringify(data))
// };


// const postData = { name: "Cem", age: 30 };

// postRequest(`${jsonPlaceholderURL}posts`, postData, (error, response) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// });

//PATCH

const patchRequest = (url, data, cb) => {
    const xhr = new XMLHttpRequest();
    xhr.open("PATCH", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status < 300 && xhr.status >= 200) {
                const response = JSON.parse(xhr.responseText);
                cb(null, response);
            } else {
                cb("Hata: " + xhr.status, null);
            }
        }
    };

    xhr.send(JSON.stringify(data));
};

const newData2 = { name: "ali"};
patchRequest(`${jsonPlaceholderURL}posts/6`, newData2, (error, response) => {
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
});


//PUT

const putRequest = (url, data, cb) => {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status < 300 && xhr.status >= 200) {
                const response = JSON.parse(xhr.responseText);
                cb(null, response);
            } else {
                cb("Hata: " + xhr.status, null);
            }
        }
    };

    xhr.send(JSON.stringify(data));
};

const newData = { name: "can", title: "klvsm" };
putRequest(`${jsonPlaceholderURL}posts/1`, newData, (error, response) => {
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
});


//DELETE

const deleteRequest = (url, cb) => {
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", url, true);

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status < 300 && xhr.status >= 200) {
                const response = JSON.parse(xhr.responseText);
                cb(null, response);
            } else {
                cb("Hata: " + xhr.status, null);
            }
        }
    };

    xhr.send();
};

deleteRequest(`${jsonPlaceholderURL}posts/3`, (error, response) => {
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
});












