const container = document.querySelector('#result')

let baseURL = 'https://thronesapi.com/api/v2/Characters';

let getThrones = async()=> {
    let response = await fetch(baseURL);
    console.log(response);
    if(!response.ok){
        alert(`http error: ${response.status}` )
    }
    let data = await response.json();
    console.log(data); 
    
    let result = '';
    
    data.forEach((user,index)=>{
        console.log(user.fullName);
        result += `<div class="card">
        <h2 class="fullName">${user.fullName}</h2>
        <img class="charImg" src="${user.imageUrl}">
        <h5 class="title">${user.title}</h5>
        </div>`
    })
    
    container.innerHTML=result;
}
getThrones()