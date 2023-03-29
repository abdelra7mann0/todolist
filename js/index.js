// document.getElementById("btn").onclick=function(){
//     var x = parseInt( document.getElementById("liters").value);
//     var y = document.getElementById("op").value;
// switch ( y ) {
//     case "95":
//         var total= x * 20;
//         document.write("the total price is :" + total)
//     break;

//     case "92":
//             var total= x * 10;
//             document.write("the total price is :" + total)

//     break;
// }


// } 
// document.getElementById("btn").onclick=function() {
//     var x = parseInt(document.getElementById("deg").value);
//     if (x >= 95 ) {
//         document.write("your grade is A+")
        
//     } else if(x >=85 ) {
//         document.write("your grade is A")
        
//     } else if(x >=75 ) {
//         document.write("your grade is B")
        
//     }
//     else if(x >=60 ) {
//         document.write("your grade is c")
        
//     }
//     else if(x >=50 ) {
//         document.write("your grade is D")
        
//     }
//     else if(x < 50 ) {
//         document.write("your grade is F" + "See you in summer course")
        
//     }
    
    
    
// }
// var names =[ 'ahmed ' , ' abdo ' , ' rana ' ,' sanaa ' ,' mohamed ' , "ssss"];
// for (let x = 0; x <names.length;x++) {
//     document.write( names[ x ] )
// }
// var arr = [];

// function obb() {
//     var nam = document.getElementById("name").value;
//     var numbe = document.getElementById("number").value;
//     var ob = { name: nam , age : numbe} ;
//     arr.push(ob)
//     // console.log(arr);
//     show();

    
// }
// function show() {
//     var st = "";
//     var count = arr.length;

//     for (var x = 0; x < count; x++) {
//         st += "<h1> the age is "+ arr[x]['age'] +"</h1>";


//     }    
//     document.getElementById("show").innerHTML= st;

    
// }

// var data =[
//     {name:'abdo' , age: 25},
//     {name:'ahmed' , age: 33}
// ];
// data.push({name:"rana" , age:38})
// console.log(data[1]['name'])
// let deg = prompt("inter your degree");
// deg>=95?document.write("excellent"):deg<=95 &&deg>=85 ?document.write("b"):document.write("f") 
// let x = "abdaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdsdsdsdsdsdsdsdsdaaaaaaaaaaaaaaaaaaaaao";
// for (let i = x.length; i >=0 ; i--) {
//     console.log(x[i])
// }
// function perday(age) {
//     let x = age * 365 ;
//     return x;
    
// }
// let y = perday(27);
// function perhours(hours) {
//     let z= hours * 24;
//     return z ;
    
// }
// let result = perhours(y); 
// document.write( result);
// function cal(...arrr) {
//     var result=0;
//     for (let x = 0; x < arrr.length; x++) {
    
//         result += arrr[x];

//     }
//     console.log(result);

    
// }
// cal(55 , 6)
// let user = {
//     firstName:'abdelrahman',
//     lastName:'gamal',
//     email:'test@gmail.com',
//     age:26,
//     skills:['html','css','js','python','php'],
//     active:false,
//     phoneNumber:{
//         first:'0106547687',
//         second:'0126574687',
//     },
//     address:{
//         Egypt:'elmohandsen',
//         Uae:'abu dhabi',
//     },
//     check : function(){
//         if(user.active){
//             return "this is true ";
//         }else {
//             return "this is false";
//         }
//     }
    

// }
// console.log( user.phoneNumber.first);
// let user1 = {  name:'abdelrahman', getName:function(){ return this.name; }, };
// let user2= Object.create(user1 ,{age:25})
// var arr = [];
// function obb() {
//     var x= document.getElementById("name").value;
//     var y = document.getElementById("number").value;
//     var ob = { name:x , age: y }
//     arr.push(ob);
//     console.log(arr)
//     show()
// }
// function show(){
//    var count = arr.length ; 
//    var result = "";
//     for (let i = 0; i< count; i++) {
//         result +=`<h1>age is ${arr[i]["age"]}</h1> <p>name is  ${arr[i]["name"]}</p>`;
       
//         // document.write(arr[i]['name']);
        
//     } document.getElementById("show").innerHTML = result;
// }
// var arr = [] ; 
// function add() {
//     let namee = document.getElementById("name").value;
//     let agee = document.getElementById("number").value;
//     let ob = { name : namee , age : agee };
//     arr.push(ob);

//     console.log(arr)    
//     show()
// }
// function show() {
//     var count= arr.length;
//     var st = "";
//     for (var x = 0; x < count; x++) {
//          st +=`<h1>age is ${arr[x]["age"]}</h1> <span>name is  ${arr[x]["name"]}</span><button class="bb" onclick="delet(${x})">del</button><button onclick= "updat(${x})">update</button>`;
//     }        document.getElementById("show").innerHTML=st ;

    
// }
// function delet(x) {
//     arr.splice(x , 1)

//     show()
// }
// function updat( x ) {
//     var bb =   ` <br><input id="nmee"type="text"value="${arr[x]['name']}">
//     <input id="numberr"type="number"value="${arr[x]['age']}">
//     <button onclick="ud(${x})" id="btn">send</button>`;
//     document.getElementById("up").innerHTML= bb ; 
// }
// function ud(x) {
//     var nmee=document.getElementById("numberr").value;
//     var nam =document.getElementById("nmee").value;
//     arr[x]["name"]= nam ;
//     arr[x]["age"]= nmee;
//     // console.log(nam , nmee)
//     show()


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



// var arr= [];
// function data() {
//     var x = document.getElementById("name").value;
//     var y = document.getElementById("number").value;
//     var ob = { name : x , age : y};
//     arr.push(ob)
//     console.log (arr)
//     show()
// }
// function show () {
// var st = "";
// var count = arr.length;
// for (let x = 0; x < count; x++) {
//     st += `<p>the name is : ${ arr[x]["name"]} </p> <span> the age is ${arr[x]["age"]}</span> <button onclick="del(${x})" >del</button> <button onclick="up(${x})">update</button><br>` ; 

// }

// document.getElementById("show").innerHTML = st;
// }
// function del(x) {
// arr.splice(x , 1 )
// show ()
    
// }
// function up (x){
//     var updd = `<input id="namee"type="text"placeholder="name"value="${arr[x]["name"]}">
//     <input id="numberr"type="number"placeholder="age"value="${arr[x]["age"]}">
//     <button onclick="updo(${x})" id="btn">send</button>`;
//     document.getElementById("up").innerHTML = updd;
// }
// function  updo(x) {
//     var z = document.getElementById("namee").value;
//     var n = document.getElementById("numberr").value;
//     arr[x]["name"]= z;
//     arr[x]["age"]= n;
//     console.log(arr)
//     show()

// }
// document.getElementById("bb").onclick= function (){
// localStorage.setItem("name","ahmed")    
    
// }
// document.getElementById("btn").onclick=function() {
//     console.log(localStorage.getItem("name"))
    
// } 
// function change(x) {
//     document.getElementById('re').style.backgroundColor = x
//     localStorage.setItem("color" , x)
// }
// function remove(x) {
//     document.getElementById('re').classList.remove(x)
// }
// var z = "";
// window.onload= function() {
//     document.getElementById('re').style.backgroundColor= localStorage.getItem("color"); ;
// }
// function val() {
//     var x =document.getElementById("re").getAttribute("abdo");
//     if (x== 'true') {
//         document.getElementById("re").style.display="block";

        
//     }else{        document.getElementById("re").style.display="none";
// }
    
// }
// val()
// function repeat() {
//     var x = document.getElementById("re").getAttribute("for");
//     var j = "";
//     for (var i = 0; i < x; i++) {
//         j += "<div> mohamed</div>";
//         var y = document.getElementById("re").innerHTML = j ; 
//         // console.log("y")
//         // document.body.innerHTML= y ;
//         // document.write( y);
//         console.log("j")
        
//     }
    
// }
// repeat()

// function change( y ) {
//     var x =document.getElementById("con");
//     x.style.backgroundColor = y;

// }
// window.onscroll = function ( ){
//     var z = document.getElementById("na")
//     if (document.documentElement.scrollTop > 50) {
//         z.classList.add( "color");
        
//     }else {
//         z.classList.remove('color');

//     }
// }
// setTimeout(function(){
//     alert("hi")
// },6000)
// function cal() {
//     setTimeout(function() {
//     var x = parseInt(prompt("number 1"))  
    
        
//     }, 3000);
//     setTimeout(function() {
//         var y = parseInt(prompt( "number2" ))  
//     } , 6000)

//     console.log( x * y)
// }
// cal()
// function take() {
//     var x  = prompt("the number ")
//     var y = prompt("the seconde number ")
//     var result = x* y 
//     // console.log (result)
//     setTimeout(function(){
//         var n = parseInt(prompt("num 3")) 
//         console.log( result + n )

//     },1000)


  
// }
// take()
// document.getElementById("btn").onclick = function(){
//     document.getElementById("dd").innerHTML="<button id='nn'> send</button>"
//     document.getElementById("nn").addEventListener("click" , function() {
//         alert("say hi")
        
//     })
// }
// window.onscroll= function() {
//     document.getElementById("btn").style.cursor= "pointer"
//     if (document.documentElement.scrollTop > 150) {
//         document.getElementById("btn").style.opacity= "1"
//     }else{
//         document.getElementById("btn").style.opacity= "0"  
//        }

// } 

// document.getElementById("gg").onclick = function(){
        
//     }
// var banner = document.getElementsByClassName("banner")[0];
// var blocks = document.getElementsByClassName("blocks");
// for (let i = 0; i < 400; i++) {
//     banner.innerHTML +=  " <div class='blocks'></div>";
//     blocks[i].style.animationDelay= `${i * 0.05}s `

// }





                                    //   gallery            //   

// var back = document.querySelector('.back-center'); 
// var images = Array.from(document.querySelectorAll(".item-img img")) ;
// var exit = document.getElementById("close");
// var rightArrow = document.getElementById("right")
// var leftArrow = document.getElementById("left");
// var imagesCount = 0 ; 

// // keydown
// // mousemove
// //             start show //

// var count =images.length 
// for (let i = 0; i < count; i++) {
    
//     images[i].addEventListener("click",show )
// }
// function show(e) {
//     var v = e.target.src ; 
//     document.querySelector(".black").style.transform="scale(1)";
//     back.style.backgroundImage= `url(${v} )`
//     imagesCount = images.indexOf(e.target);


    
// }

// //        start function exit               //
// exit.addEventListener("click" , close)
// function close() {
//     document.querySelector(".black").style.transform="scale(0)";
    
// }
// //        start function next               //
// rightArrow.addEventListener("click" , right)
// function right() {
//     imagesCount++;



//     if (imagesCount == images.length) {
//         imagesCount = 0 ;
        
//     }
//         console.log(imagesCount)
//     back.style.backgroundImage= "url("+images[imagesCount].src+")"
// }
// //        start function  left next               //

// leftArrow.addEventListener("click" , left)
// function left() {
//     imagesCount--;



//     if (imagesCount < 0) {
//         imagesCount = images.length-1 ;
        
//     }
//         console.log(imagesCount)
//     back.style.backgroundImage= "url("+images[imagesCount].src+")"
// }
// //        start function  Esc  Keyboard            //
//  document.addEventListener("keydown" , ex)
//  function ex(e) {

// if (e.key == 'Escape') {
//     document.querySelector(".black").style.transform="scale(0)";;
    
// }}
// //        start function  space  Keyboard            //
// document.addEventListener("keydown" , sp)
// function sp(e) {

// if (e.key == ' ') {
//    document.querySelector(".black").style.transform="scale(0)";;
   
// }}
// //        start function  right next  keyboard             //

// document.addEventListener("keydown" , rr)
// function rr(e) {

// if (e.key == 'ArrowLeft') {
//     left()
   
// }
// }
// //        start function  left next  keyboard             //

// document.addEventListener("keydown" , ll)
// function ll(e) {

// if (e.key == 'ArrowRight') {
//     right()
   
// }
// }



var back = document.querySelector(".back-center")
var black = document.querySelector(".black")
var images =Array.from(document.querySelectorAll("img"))  
var cloce = document.getElementById("close") 
var next = document.getElementById("right")
var previous = document.getElementById("left")
var count = 0; 
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click" , show)
    
}
function show(e) {
    var source = e.target.src
    console.log(source);
    count = images.indexOf(e.target)

    black.style.transform= "scale(1)"
back.style.backgroundImage= `url(${source})`
}

var r = next.onclick=function() {
    count++;
if (count == images.length) {
    count = 0;

}
back.style.backgroundImage= `url(${images[count].src})`
console.log(count)


}
var n = previous.onclick=function() {
    count--;
if (count < 0) {
    count = images.length-1 ;


}
back.style.backgroundImage= `url(${images[count].src})`
console.log(count)



}
//  exit 
var ex = cloce.onclick=function() {
    black.style.transform= "scale(0)"
}


// document.onkeydown=function(e) {
//     if (e.key == "ArrowLeft") {
//        n()
//    }
   
//    }
// document.onkeydown=function(e) {
//     if (e.key == "Escape") {
//        ex()
//    }
//    console.log(e)

       
//    }
   
//    document.onkeydown=function(e) {
//     if (e.key == "ArrowRight") {
//        r()
//    }
   
//    }






   document.addEventListener("keydown" , righ)
   function righ(e) {
        if (e.key == "ArrowRight") {
       r()
   }
    
    
   }
   document.addEventListener("keydown" , lef)
   function lef(e) {
        if (e.key == "ArrowLeft") {
       n()
   }
    
    
   }
   document.addEventListener("keydown" , es)
   function es(e) {
        if (e.key == "Escape") {
       ex()
   }
    
    
   }
   document.addEventListener("keydown" , es)
   function es(e) {
        if (e.key == " ") {
       ex()
   }
    
    
   }






































