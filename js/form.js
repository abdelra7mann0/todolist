var title = document.getElementById("title");
var price = document.getElementById("price");
var taxes = document.getElementById("taxes");
var ads = document.getElementById("ads");
var discount = document.getElementById("discount");
var total = document.getElementById("total");
var count = document.getElementById("count")
var category = document.getElementById("category");
var create = document.getElementById("create");
var search =document.getElementById("search");
var btntitle =document.getElementById("btntitle");
var btncategory =document.getElementById("btncategory");
var update =document.getElementById("update");
var delet =document.getElementById("delet");
var mood = "create";
var tmp ;





        // calculate totallll                    /*




function calulate() {
    if (price.value != '') {
        let result = (+price.value + +taxes.value + +ads.value ) - +discount.value;
        total.innerHTML= result
        total.style.backgroundColor="green"
    }else {
        total.innerHTML= '';

        total.style.backgroundColor="rgb(129, 8, 8)"

    }


}


//      add product to array                 /*



var arr= [];
if (localStorage.product != null) {
arr = JSON.parse(localStorage.product)
    
}else{
    arr= [];
}
create.onclick=function() {
    calulate()
var ob = { 
    title: title.value ,
    price: price.value , 
    taxes: taxes.value , 
    ads: ads.value ,
    discount: discount.value ,
    count: count.value , 
    total: total.innerHTML , 
    category : category.value 
};
if (mood === "create") {
    if (count.value > 1 ) {
        for (let x = 0; x < count.value; x++) {
            arr.push(ob )
            
        }
        
    }else{
        arr.push(ob )
    
    }
}else{
    arr[ tmp]= ob ;
    mood = "create";
    create.innerHTML="create";
    count.style.display= "unset";

}

localStorage.setItem("product" , JSON.stringify(arr))
console.log(JSON.parse(localStorage.product) )
clear()
show()


}
//     clear inputs after create                 /*

function clear() {
    title.value='';
    price.value = '';
    taxes.value ='';
    discount.value = '';
    count.value ='';
    total.innerHTML= '';
    category.value  = '';
    ads.value = ''

    }


    //  show 



    function show() {
        calulate()
        var z = document.getElementById("tbody")
        let tt = '';

        for (let i = 0; i < arr.length; i++) {
            tt += `
            <tr>
                <td>${[i]}</td>
                <td>${arr[i]['title']}</td>
                <td>${arr[i]['price']}</td>
                <td>${arr[i]['taxes']}</td>
                <td>${arr[i]['discount']}</td>
                <td>${arr[i]['total']}</td>
                <td>${arr[i]['category']}</td>
                <td><button onclick="updatee(${i})" id="update">update</button></td>
                <td><button id="delet"onclick="dele(${i})">delet</button></td>
            </tr>
            ` ;
        }
        z.innerHTML =tt; 
        var del = document.getElementById("deletall");

        if (arr.length > 0 ) {
            del.innerHTML= `<button onclick="deletAll()">Delet All (${arr.length })</button>`;
            
        }else{
            del.innerHTML= "";
        }
        
    }
    show()


    //               /*
    function dele(i) {
        arr.splice(i , 1 );
        localStorage.product = JSON.stringify(arr)
        show()         
    }
    //               /*
    function deletAll()
    {

        localStorage.clear()
        arr.splice(0);
        show()
    } 


    // 
    function updatee(i) {
        title.value = arr[i].title
        price.value = arr[i].price
        taxes.value = arr[i].taxes
        ads.value = arr[i].ads
        discount.value = arr[i].discount
        category.value = arr[i].category
        create.innerHTML="update"
        count.style.display="none"
        calulate()
        mood = "update"
        tmp = i ; 
        scroll({
            top:0 , 
            behavior : 'smooth'       
        })

    }
