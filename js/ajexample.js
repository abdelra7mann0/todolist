var exi = document.getElementById("x");
var bar = document.getElementById("bar")
var lista =document.getElementById("list-item")
var req = new XMLHttpRequest();
var dataa = [];
var category = "technology"
var search =document.getElementById("search")
var searchIcon = document.getElementById("search-icon")

gett()

bar.addEventListener("click" , ba)
exi.addEventListener("click" , ex)


function ba() {
    lista.style.top = "0"
}


function ex() {
    lista.style.top = "-290px"

    
}
var links = document.querySelectorAll(".links");
for (let x = 0; x < links.length; x++) {
    links[x].addEventListener("click" , function(e) {
        category = e.target.text
        gett()
    } )

    

}

//  

function gett () {
    req.open("get" ,`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=84620d504fa24407a02e431d58fbbd36`)
    req.send()
    req.onreadystatechange=function(){
        if (req.readyState == 4 && this.status == 200 ) 
        {
           dataa=( JSON.parse(req.response).articles) 
           show()   
        }
    }
    
}
function show() {
    var en = ""

for (let i = 0; i < dataa.length; i++) {
    en += `
    
    <div id="item">
    <div id="img">
        <img src="${dataa[i].urlToImage}"alt="">
    </div>
    <p id="title">${dataa[i].title}</p>

    <p id="des">${dataa[i].description}</p>

</div>

</div>
    
    `
}

    document.getElementById("row").innerHTML=en
}








searchIcon.onclick=function () {
search.focus()    
}
search.onkeyup=function () {
    var bb = ""

    for (let i = 0; i < dataa.length; i++) {
        if (dataa[i].title.includes(search.value.toLowerCase())) {
            bb += `
    
            <div id="item">
            <div id="img">
                <img src="${dataa[i].urlToImage}"alt="">
            </div>
            <p id="title">${dataa[i].title}</p>
        
            <p id="des">${dataa[i].description}</p>
        
        </div>
        
        </div>
            
            `
            
        }
        
    }
    document.getElementById("row").innerHTML=bb

}
