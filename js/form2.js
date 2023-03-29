var username= document.getElementById("username");
var firstname= document.getElementById("firstname");
var lastname= document.getElementById("lastname");
var update = document.getElementById("update");
var delet = document.getElementById("delet");
var submit = document.getElementById("submit");
var mood = 'create'
var arr=[];
var tmp ;
submit.onclick=function() {
    if (localStorage.userinformation != null) {
        arr = JSON.parse(localStorage.userinformation)
    }else{
        arr = [];
    }
var ob = {
    "user name": username.value , 
    "first name": firstname.value , 
    "last name": lastname.value
}
if (mood === 'create') {
    arr.push(ob)

}else{
arr[tmp]=ob
}

localStorage.setItem( "userinformation" , JSON.stringify(arr) )


clear()
    Show()

}
//              clear 


function clear() {
    username.value = '';
    firstname.value='';
    lastname.value='';
}


//  Show 
function Show () {
    var tbody = document.getElementById("tbody");
    var ht ="";
    for (let i = 0; i < arr.length; i++) {
        ht += 
            `                    
                <tr>
                    <td>${arr[i]["user name"]}</td>
                    <td>${arr[i]["first name"]}</td>
                    <td>${arr[i]["last name"]}</td>
                    <td><button id = "update"onclick = "up(${i})">update</button></td>
                    <td><button id ="delet"onclick="dele(${i})">delet</button></td>
                </tr>
            `         
    }    if (arr.length > 0) {
        document.getElementById("length").innerHTML= `(${arr.length})`

    }else{
        document.getElementById("length").innerHTML= ``

    }

    tbody.innerHTML = ht;                   
    
}
// Show()



function dele(i) {
    arr.splice(i , 1 );
    localStorage.userinformation = JSON.stringify(arr)
    Show()         
}
document.getElementById("delall").onclick=function() {

    arr.splice(0)
    localStorage.clear()
    Show()
}
function up(i) {
    username.value=arr[i]["user name"]
    firstname.value=arr[i]["first name"]
    lastname.value= arr[i]["last name"]

    submit.innerHTML = 'update'
    mood='update'
    Show()
    tmp = i ;

}




















