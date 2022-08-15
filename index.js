// SETTING UP AXIOS
//==================
const axios = require('axios').default;

// ADVANTAGES OF USING AXIOS.
//=============================
/**The syntax is much simpler than the traditional mode of doing a post request.
 * It just rocks and warms the heart plus its configuration is far much simpler.
 */

// SOME VARIABLES
//================
let sundaySchool = {
      title: "Sunday School",
      time: "9:00 am",
      duration: "2 hours",
      language: "Kikuyu"
    }

//MAKING A POST REQUEST WITH AXIOS.
//==================================
/*
axios.get(' http://localhost:5002/services')
.then((response) => {
  console.log(response);
}, (error) => {
  console.log(error);
});
*/
//MAKING A POST REQUEST WITH AXIOS.
//================================
/**Just make sure that your object/request has an id and you will be all good */
/*
let posting = () =>{
    axios.post('http://localhost:5002/services',{
    id:1,
    title: "Youth service",
    time: "9:00 am",
    duration: "2 hours",
    language: "Sheng"
    }
).then(resp =>{
    console.log(resp.data);
}).catch(error =>{
    console.log(error);
})};


posting();

*/

//MAKING A PUT REQUEST WITH AXIOS.
//================================
/**Just make sure that your url has an id and you will be all good */

/* axios.put('http://localhost:5002/services/1',{
    id:1,
    title: "Youth service",
    time: "9:00 am",
    duration: "2 hours",
    language: "Sheng"
}).then(resp =>{
    console.log(resp.data);
}).catch(error =>{
    console.log(error);
});
*/

// MAKING A DELETE REQUEST
//=========================
// axios.delete('http://localhost:5002/services/1');\


//MODIFICATION OF THE POST REQUEST
//================================
/**The modification done are :-
 * Putting the axios post request in a function.
 * Declaring the object data in a separate function.
 * 
 * THIS IS PROOF THAT THE DATA CAN BE MADE AS DYNAMIC AS POSSIBLE.
 */
let postData = (data) =>{
    axios.post('http://localhost:5002/services',data
).then(resp =>{
    let res = resp.data;
    console.log(res);
}).catch(error =>{
    console.log(error);
})};


postData(sundaySchool);