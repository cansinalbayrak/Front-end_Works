const jsonPlaceholderURL = "https://jsonplaceholder.typicode.com/";

// FETCH

// fetch(`${jsonPlaceholderURL}todos/1`)
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => console.log(data));

  // fetch(`${jsonPlaceholderURL}comments`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(newComment),
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  
  // async await
    
//   const getTodoById = async (todoId) => {
//     const res = await fetch(`${jsonPlaceholderURL}todos/${todoId}`);
//     const data = await res.json();
//     return data;
//   };
  
//   getTodoById(7).then((res) => console.log(res));

//GET

// fetch(`${jsonPlaceholderURL}todos/1`).then(res => {
//     console.log(res);
//     return res.json(); 
// }).then(data => console.log(data))



// Aşağıda tarifinden anlayacağınız istekleri https://jsonplaceholder.typicode.com/ URL'ine atın. her bir isteği 1 kere then, 1 kere de async/await yöntemi ile atın. Toplamda 5 then, 5 async/await isteği atacaksınız. isteklerinizi fonksiyon içerisinde tanımlayın.
//getCommentById, getAllComments, deleteComment, updateCommentPatch, updateCommentPut

//GET --------------------------------------------------------

// function getCommentById(id) {
//   return fetch(`${jsonPlaceholderURL}comments/${id}`)
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       return data;
//     })
// }

// getCommentById(1)
//   .then(data => {
//       console.log(data);
//   })
//   .catch(error => console.error(error));

//GETALL --------------------------------------------------------------

//   function getAll() {
//     return fetch(`${jsonPlaceholderURL}comments`)
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         return data;
//       })
//   }
  
//   getAll()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => console.error(error));
  

// GETALL V2----------------------------

// const getAllComments= async () => {
//     const res = await fetch(`${jsonPlaceholderURL}comments`);
//     const data = await res.json();
//     return data;
//   };
//   getAllComments().then((res) => console.log(res));

//UPDATE PUT------------------------------------------------

// function updatePut(id,neww) {
//     return fetch(`${jsonPlaceholderURL}comments/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(neww),
//       })
//       .then(res => {
//         return res.json();
//       })
//       .then(data => {
//         return data;
//       })
//   }
      
//   const newComment6 = {
//     postId: 3,
//     email: "example@gmail.com",
//     body: "Lorem ipsum dolor sit amet non elit",
//   };

//   updatePut(9,newComment6)
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => console.error(error));
      

// UPDATE V2---------------------------------

// const updateCommentPut= async (id, newData2) => {
//     const res = await fetch(`${jsonPlaceholderURL}comments/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newData2),
//       });
      
//     const data = await res.json();
//     return data;
//   };
    
//   const newComment2 = {
//     postId: 6,
//     name: "lorem",
//     body: "Lorem ipsum dolor sit amet non elit",
//   };
    
//   updateCommentPut(5,newComment2).then((res) => console.log(res));

// const newComment7 = {
//     postId: 3,
//     name: "KLDŞD",
//     body: "Lorem ipsum dolor sit amet non elit",
//   };

//UPDATE V2-------------------------------------------------------

// fetch(`${jsonPlaceholderURL}comments/7`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(newComment7),
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));

//PATCH----------------------------------------------------------------------
// const newComment8 = {
//     postId: 3,
//     name: "KLDŞD",
//     body: "Lorem ipsum dolor sit amet non elit",
//   };
    
// fetch(`${jsonPlaceholderURL}comments/7`, {
//     method: "PATCH",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(newComment8),
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));

//PATCH V2---------------------------------------------------------------

// const updateCommentPatch= async (id, newData) => {
//     const res = await fetch(`${jsonPlaceholderURL}comments/${id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newData),
//       });
          
//     const data = await res.json();
//     return data;
//   };
        
//   const newComment = {
//     postId: 3,
//     name: "lorem ipsum",
//     email: "example@gmail.com",
//     body: "Lorem ipsum dolor sit amet non elit",
//   };
        
//   updateCommentPatch(4,newComment).then((res) => console.log(res));
         
//DELETE --------------------------------------------------------------------

// function deleteCom(id) {
//     return fetch(`${jsonPlaceholderURL}comments/${id}`, {
//         method: "DELETE",
//       })
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         return data;
//       })
//   }
                  
//   deleteCom()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => console.error(error));
  
                    
//DELETE V2----------------------------------------------------------------


//   const deleteComments= async (id) => {
//     const res = await fetch(`${jsonPlaceholderURL}comments/${id}`, {
//         method: 'DELETE',
//       });
//     const data = await res.json();
//     return data;
//   };
//   deleteComments(2).then((res) => console.log(res));






// async function asyncGetRequest (url) {
//     try {
//       // matematikte => gruplama ve işlem önceliği
//       const data = await (await fetch(url)).json()
  
//       return data
//     } catch (error) {
//       return error
//     }
//   }
  
  
//   async function asyncPostRequest (url, options) {
//     try {
//       const response = await fetch(url, options)
//       const data = await response.json()
  
//       return data
//     } catch (error) {
//       return error
  
//     }
//   }
  
  // Yukarıdaki yardımcı metodlar iç kısımlarında seri çalışıyor olsalar bile,
  // bu yardımcı metodları kullandığımız noktalarda,
  // paralel mi seri mi çalışmasını istediğimizi dikte edebiliriz:
  
//   async function callAsyncRequests() {
//     const payload = { title: 'Bugunku derse calisalim', userId: 2, completed: false }
  
//     const dataOne = asyncGetRequest('https://jsonplaceholder.typicode.com/todos/10')
//     const dataTwo = asyncPostRequest('https://jsonplaceholder.typicode.com/todos', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(payload)
//     })
//   }
  
  // callAsyncRequests()
  
  
  // GET https://jsonplaceholder.typicode.com/todos/5
  // GET https://jsonplaceholder.typicode.com/todos/9
  // GET https://jsonplaceholder.typicode.com/todos/3
  
  // Yukarıdaki istekleri seri olarak (sırayla) nasıl çalıştırırız?
  
//   async function runRequestsInSerial () {
//     const dataOne = await asyncGetRequest('https://jsonplaceholder.typicode.com/todos/5')
  
//     console.log('[runRequestsInSerial] dataOne', dataOne)
  
//     const dataTwo = await asyncGetRequest('https://jsonplaceholder.typicode.com/todos/9')
  
//     console.log('[runRequestsInSerial] dataTwo', dataTwo)
  
//     const dataThree = await asyncGetRequest('https://jsonplaceholder.typicode.com/todos/3')
  
//     console.log('[runRequestsInSerial] dataThree', dataThree)
//   }
  
  
  // runRequestsInSerial()
  
  
  // İstekleri paralel (aynı anda) çalıştırma
  
  
//   async function requestOne () {
//     const dataOne = await asyncGetRequest('https://jsonplaceholder.typicode.com/todos/5')
  
//     console.log('dataOne', dataOne)
//   }
  
//   async function requestTwo () {
//     const dataTwo = await asyncGetRequest('https://jsonplaceholder.typicode.com/todos/9')
  
//     console.log('dataTwo', dataTwo)
//   }
  
//   async function requestThree () {
//     const dataThree = await asyncGetRequest('https://jsonplaceholder.typicode.com/todos/3')
  
//     console.log('dataThree', dataThree)
//   }
  
//   async function runRequestsInParallel () {
//     requestOne()
//     requestTwo()
//     requestThree()
//   }
  
  // runRequestsInParallel()
  
  
  // Hem Paralel hemde Seri Çalıştırma
  
  // id=5 ve id=9 paralel sonrasında id=3 isteğinin çalışması
  
//   async function runRequestsInBoth () {
//     const promiseOne = asyncGetRequest('https://jsonplaceholder.typicode.com/todos/5') // 5sn
//     const promiseTwo = asyncGetRequest('https://jsonplaceholder.typicode.com/todos/9') // 2sn
  
//     const dataOne = await promiseOne
//     const dataTwo = await promiseTwo
  
//     const dataThree = await asyncGetRequest('https://jsonplaceholder.typicode.com/todos/3') // 4sn
  
  
//     console.log('dataOne', dataOne)
//     console.log('dataTwo', dataTwo)
//     console.log('dataThree', dataThree)
//   }
  
//   runRequestsInBoth()
  
  
  // SORU: async_await ile
  
  // Ürünleri çekebileceğiniz URL: https://dummyjson.com/products
  // Yukaridaki API'a bir asenkron istek gönderiyor olacaksınız. Bu istek sonucunda ürünler listesini çekiyor olacaksınız. Aynı zamanda sayfada bir input ve bir button olacak.
  // Butona tıklanıldığında input içerisine girilmiş değeri (string'i) ürünler listesi içerisinde title değerinde aranacak. Arama sonucu üzerinden bir sıralama gerçekleştirilecek. Önce kategoriye göre alfabetik olarak sıralayıp eğer aynı kategoriye sahip ürünler varsa bunları rating değerine sıralayacaksınız. En sonda da çıktıyı konsole yazdıracaksınız.
 

//   function search(products, searchTerm) {
//     return products.filter((product) =>
//       product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }

  
// function sortProducts(products) {
//     return products.sort((a, b) => {
//       const cat = a.category.localeCompare(b.category);
//       if (cat !== 0) {
//         return cat;
//       }
//       return b.rating - a.rating;
//     });
//   }

  
// filterButton.addEventListener("click", async () => {
//   try {
//     const filterIn = inputTag.value;
//     const products = await getProducts();
//     console.log(products)
//     console.log(Object.values(products)[0])
//     const filteredProducts = Object.values(products)[0].filter((pro)=>
//         pro.title.toLowerCase().includes(filterIn.toLowerCase()));
//     console.log(filteredProducts)
//     const sortedProducts = filteredProducts.sort((pro1,pro2)=>
//     {
//         const resultNum = pro1.category.localeCompare(pro2.category);
//         if (resultNum === 0) {
//             return pro1.rating - pro2.rating;
//         }
//         else{
//             return resultNum;
//         }
//     });
    
//      //console.log(sortedProducts);
//      return sortedProducts;
//   } catch (err) {
//      //console.error("Hata:", err);
//      return err;
//   }
// });
  


const url = "https://dummyjson.com/products";
const inputTag = document.getElementById("filterI");
const filterButton = document.getElementById("filterB");
  
async function getProducts() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function FilterProducts(){
    try {
        const filterIn = inputTag.value;
        const products = await getProducts();
        //ya da products.products yap içinde products arrayi var çünkü
        //sort yaparken || operatörü kullanabilirdin
        const filteredProducts = Object.values(products)[0].filter((pro)=>
        pro.title.toLowerCase().includes(filterIn.toLowerCase()));

        const sortedProducts = filteredProducts.sort((pro1,pro2)=>
        {
            const resultNum = pro1.category.localeCompare(pro2.category);
            if (resultNum === 0) {
                return pro1.rating - pro2.rating;
            }
            else{
                return resultNum;
            }
        });
            return sortedProducts;

        } catch (err) {
            return err;
        }
}

filterButton.addEventListener("click",async function() {
    const returnVal = await FilterProducts();
    console.log(returnVal);
  });





 




