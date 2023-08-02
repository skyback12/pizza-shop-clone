// this file will do Network Call
//const promise = orderBook();
// async function return promise
// async function orderBook(){
//     const order = await fetch(ORDERURL);
//     const del = await fetch(DELURL);
//     const notification = await fetch(NOTIFICATION_URL);
//     return {order, del, notification};
//     // const promise = fetch(ORDERURL);
//     // promise.then(function(response){
//     //     const promise = fetch(DELURL);
//     //     promise.then(function(response){
//     //          const promise = fetch(DELNOTIFICATION_TO_USER)       
//     //     })
//     // })
// }
async function doNetworkCall(){
    console.log('Fn Starts');
    const URL = 'https://raw.githubusercontent.com/Skill-risers/pizzajson/main/pizza.json';
    try{
    const response = await fetch(URL); // Header + Body
    const obj = await response.json(); // JSON Convert into Object (DeSerialization)
    return obj;  //  Wrap in Promise   
}
    catch(err){
        throw err;
    }
}
export default doNetworkCall;
    // Promise Style
    // const promise  = fetch(URL);
    // console.log('Promise is ', promise);
    // promise.then(function(response){
    //     console.log('Res ', response);
    //     return response;
    // }).catch(function(err){
    //     console.log('Error is ', err);
    // });
    //console.log('Fn Ends...');
//}