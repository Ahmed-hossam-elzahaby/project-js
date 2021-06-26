var nameSiteInput = document.getElementById("siteName")
var urlInput = document.getElementById("siteUrl")
var ubdateWin = document.getElementById("win")
var plank;
var container;

if (localStorage.getItem("bookmarketList") == null) {

    container = [];

}
else {
    container = JSON.parse(localStorage.getItem("bookmarketList"))
    display();
}

function add() {
    console.log(same())
    if (validenameSiteInput() == true && valideurlInput() == true && same() == true) {
        var x = {
            bookMarket: nameSiteInput.value,
            webSite: urlInput.value,
        }
        container.push(x)
        localStorage.setItem("bookmarketList", JSON.stringify(container))
        display();
        clear();

    }
    else if (valideurlInput() != true) {
        alert("this url is wroung")
    }

    else {
        alert("invalid")

    }
}
function clear() {
    nameSiteInput.value = "";
    urlInput.value = "";
}

function display() {
    var cartona = ``
    for (var i = 0; i < container.length; i++) {

        cartona += ` <div class=" d-flex  justify-content-around  p-3  " >
 <h2  class="w-50 loca" > ${container[i].bookMarket} </h2>
<button type="button"  onclick="Delete(`+ i + `)" class="btn btn-danger ">Delete</button>
<button type="button"  onclick="ubdate(${i})"  class="btn btn-warning">Ubdate</button>
<a href="${container[i].webSite}" target="_blank"   class="btn btn-primary ">visit</a>


</div>
`
    }
    document.getElementById("result").innerHTML = cartona;
}


function validenameSiteInput() {
    var regex = /^([a-z]{3,8}|[A-Z]{3,8})$/

    if (regex.test(nameSiteInput.value) == true) {
        return true

    }

}

function valideurlInput() {
    var regex = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

    if (regex.test(urlInput.value) == true) {
        return true
    }

}

function Delete(index) {

    container.splice(index, 1)
    localStorage.setItem("bookmarketList", JSON.stringify(container))

    display();

}


function ubdate(i) {
    plank = i

    nameSiteInput.value = container[i].bookMarket
    urlInput.value = container[i].webSite
    ubdateWin.style.display = "inline-block"
    display();

}


ubdateWin.addEventListener("click", function () {


    container[plank].bookMarket = nameSiteInput.value
    container[plank].webSite = urlInput.value
    ubdateWin.style.display = "none"
    display();
    clear()
})



function same() {
    var check=true;
    for (var i = 0; i < container.length; i++) {

        
        if(nameSiteInput.value == container[i].bookMarket) {

            
            check = false

        }
        else {
            check = true

        }
    }

    return check
}










