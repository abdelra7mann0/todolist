// var pass = document.getElementById("pass");
// var show = document.getElementById("btn");
// var hide = document.getElementById("hide");
// var len = document.getElementById("len")
// var lab = document.getElementById("la")
// var z = show.onclick = function (){
// var st = ''
// st = pass.value.length;
// len.innerHTML = st
// if (pass.value == '') {
//     pass.style.border = "2px solid red"
//     lab.style.display="block"

    
// }else{
//     pass.style.border = ""
//     lab.style.display="none"


// }

// }
// pass.onfocus = function () {

//     lab.style.display="none"
//     pass.style.border = ""


// }
// // document.onkeyup=function() {
// //     var st = ''
// // st = pass.value.length;
// // len.innerHTML = st

    
// // }
// document.onkeydown=function(e) {
//     if (e.key == "Enter") {
//         z()
//     }
    
// }
// function star() {
//     for (let x = 0; x < 5; x++) {
//         document.write(" <br>*")
//         for (let y = 0; y < x; y++) {
//             document.write(" *")
            
//         }
        
//     }
    
// }
// star()
// for (let i = 0; i <5; i++) {
// for (let x = 0; x < i ; x++) {
//     document.write("*")

    
// }
// document.write("*" + `<br>`)

// }
// var eq = document.getElementById("eq")
// var pt = document.getElementById("put")
// eq.addEventListener("click" , cal)
// // var x = 
// function cal() {
    
    
//     for( let i = 0 ; i <= 10 ; i++){
//         len.innerHTML +=`${parseInt(pt.value ) } *  ${i}  = ${ parseInt(pt.value )  * i} <br> `
//     }
    
// }
// for (let i = 0; i < 7; i++) {

//     document.getElementById("table").innerHTML +=` <tr>
//     ${bb()}
// </tr>  

// `    

// }
// var bb = function() {
//     for (let x = 0; x < 8; x++) {
//         document.getElementById("tbody").innerHTML +=`<tr id = "tr">
//             ${cc()}
//         </tr>      
//         `
//     }

// } 
// bb()




/*           aJaxxxxxx        */
// var dataa = '';
// document.getElementById("server").onclick = function () {
// var en = '';
//     var request = new XMLHttpRequest();
// request.open("Get" , "https://api.github.com/users" ,true)
// request.send();
// request.onreadystatechange=function () {
//     if (request.readyState === 4 && request.status === 200) {
//         dataa= (JSON.parse(request.response) );
//         console.log(dataa)

//         for (let i= 0; i < dataa.length; i++) {
//             en +=
//             `<tr >
//             <td >${dataa[i].login}</td>
//             <td > <img onClick='show(${i})'src="${dataa[i].avatar_url}"width= 100px ; height = 100px> </td>
//          </tr>`
//             document.getElementById("tb").innerHTML= en      
      
//         }

    
//     }


// }

// }
// function show(i) {
//     var sh = document.getElementById("show");
//     sh.style.display= "block"
//     // tmp = i ;
//     var ent = "";
//     for (let x = 0; x <dataa.length ; x++) {
//         ent =`
//         <img src = "${ dataa[i].avatar_url}" width = "100px" height = "100px">
//         <br>
//         <span>${dataa[i].login}</span>
//         <br>
//         <span>${ dataa[i].id}</span>
        

//     `        
//     sh.innerHTML = ent 
//     }

// }

var user = [];
var img = [];
var tmp ; 

var cont = document.getElementById("cont")

document.getElementById("server").onclick = function (){
    var aj = new XMLHttpRequest();
aj.open("Get" , "https://jsonplaceholder.typicode.com/users" , true)
aj.send();
    aj.onreadystatechange= function() 
    {
        if (aj.readyState === 4 && aj.status === 200 ) {
            user = JSON.parse(aj.response)
            console.log(user)
            for (let i = 0; i < user.length; i++) {  
            
            tmp = i ;
            }

        
        }
    }

    // 


    var ajj = new XMLHttpRequest();
ajj.open("Get" , "https://jsonplaceholder.typicode.com/photos" , true)
ajj.send();
    ajj.onreadystatechange= function() 
    {
        var dd = '';
        if (ajj.readyState === 4 && ajj.status === 200 ) {
            img = JSON.parse(ajj.response)
            for (let x = 0; x < user.length; x++) {
                dd += 
                `         
            <div id="pro"> 
                <div id="form">
                    <h2>About ME :</h2>
                    <small id="name"><span> name  :</span>  ${user[tmp].name} </small>
                    <small id="id"> <span>id :</span> ${user[tmp].id} </small>
                    <small id="email"><span>email :</span>${user[tmp].email}</small>
                    <small id="addres"> <span>addres :</span> ${user[tmp].address.street}</small>
                </div>
                <div id="img"> 
                    <img src="${img[x].url}"alt=""width="100%"height="200px">
                </div>
                <p id="para"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos dolore voluptatib</p>

    
            </div>
                `
                cont.innerHTML=dd    
            }
        
        }
    }
}

