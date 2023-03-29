// let user = {
//     firstName : "Ahmed" ,
//     lastName : "mohamed",
//     getFullName : function() {
// return`Name is : ${this.firstName} ${this.lastName}`
//     }
// } 
// class user {
//     constructor(userName, salary) {
//         this.userName = userName
//         this.salary=salary
//     }

// }
// var m = new user("ahmed" , 2000)
// user.prototype.gettaxes=function () {
// console.log("hello")
    
// }
// console.log(m)
// class user2 extends user{
//     constructor(userName , salary , ability){
//         super(userName , salary);
//         this.a= ability
//     }

// }
// var h = new user2( "abdo" , 5000 , "good")
// console.log(h)
// class user3 extends user2{
//     constructor( userName , salary , ability , eff){
//         super(userName , salary , ability )
//         this.efficienccy=eff

//     }
// }
// var u = new user3("rana", 300 , "bad " , "high")
// console.log(u)
// var m = new Number()
// console.log(m)





let nm1 = document.getElementById("text1")
let nm2 = document.getElementById("text2")
let arr = []
let mood ="cal"
let tmp ;
document.getElementById("cal").onclick=()=>{
    let ob = 
    {
        "name1": nm1.value,
        "name2": nm2.value,
    }
    if (mood === "cal") {
        arr.push(ob)
        // document.getElementById("cal").innerHTML="add"
    }else{
        arr[tmp]=ob
    }
    crd.cle()
    crd.show()
    console.log(arr)
}
export class crud{

    show(){
        let en= "";
        for (var i = 0; i< arr.length; i++) {
            en+=`                   
         <tr>
            <td>${arr[i].name1}</td>
            <td>${arr[i].name2}</td>
            <td><button onclick="crd.del(${i})">delete</button></td>
            <td><button onclick="crd.up(${i})">update</button></td>
        </tr>`
        }
        document.getElementById("tb").innerHTML=en
    }
    del(i){
        arr.splice(i , 1)
        crd.show()
    }
    deall(){
            arr.splice(0)
            crd.show()    
        

    }
    up(i){
    nm1.value=arr[i]["name1"]
    nm2.value=arr[i]["name2"]
    document.getElementById("cal").innerHTML="update"
    mood= 'update'
    crd.show()
    tmp = i

    }
    cle(){
        nm1.value = "";
        nm2.value = "";
    }


}
let crd = new crud()
document.getElementById("de").onclick=function() {
    crd.deall()
    
}


// function up(){
//     console.log("saadsad") 
// }