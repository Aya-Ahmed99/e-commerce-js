
/**************up button ************** */
var up = document.getElementById("up");
window.onscroll = function () {
    "use strict";
    if (window.pageYOffset >= 300) {
        up.style.display = "block";
    }
    else {
        up.style.display = "none";

    }
    if (window.pageYOffset >= 100) {
        document.querySelector(".site .navv").classList.add("scrollnave");
    }
    else {
        document.querySelector(".site .navv").classList.remove("scrollnave");

    }
};

up.onclick = function () {
    "use strict";
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}
/**************up button ************** */



//load 
$(document).ready(function () {
    $(".load").fadeOut(1000);
});


//setting box 
var slideshowback = document.querySelectorAll(".back-option span"),
    slideshow,
    icon = document.querySelector(".setting-icon i");



icon.onclick = function () {
    this.classList.toggle("fa-spin");
    document.querySelector(".setting").classList.toggle("open");
}
function startfun() {
    slideshow = setInterval(function () {
        current++;
        clearAllClasses();
        if (current > imge.length - 1) {
            current = 1
        }
        else if (current < 1) {
            current = imge.length;
        }
        imge[current - 1].classList.add('active');
    }, 2000);

}
slideshowback.forEach(sp => {
    // add event on span
    sp.addEventListener("click", (e) => {

        e.target.parentElement.querySelectorAll(".active2").forEach(ss => {
            ss.classList.remove("active2");
        });
        // add class active to current element
        e.target.classList.add("active2");

        if (e.target.dataset.background === "yes") {
            startfun();
        }
        else {
            clearInterval(slideshow);
        }
    });

});
/*****************NavBar ************/
var navButton = document.getElementById("navButton"),
    cardbtn = document.querySelector(".card"),
    navLinks = document.getElementById("navlinks");

navButton.onclick = function () {
    navLinks.classList.toggle("activelinks");

}
/*****************NavBar ************/

/********************slider **************** */
var btnprev = document.getElementById("pre"),
    btnnext = document.getElementById("next"),
    imge = document.querySelectorAll(".img"),
    current = 1;


function clearAllClasses() {
    imge.forEach(e => {
        e.classList.remove('active');
    });
}

function theCheker() {
    clearAllClasses();
    imge[current - 1].classList.add('active');
    if (current == 1) {
        // add class disabeled in the prev button
        btnprev.classList.add('disabled');
    }
    else {
        btnprev.classList.remove('disabled');
    }
    // check if the current slide at the last slide
    if (current == imge.length) {
        // add class disabeled in the prev button
        btnnext.classList.add('disabled');
    }
    else {
        btnnext.classList.remove('disabled');
    }
}

function next() {
    if (btnnext.classList.contains('disabled')) {
        current = 1;
        theCheker();
        //btnnext.style.cursor = "no-drop"; for stop slider if images end
    }
    else {
        current++;
        theCheker();
    }
}


function prev() {
    if (btnprev.classList.contains('disabled')) {
        current = imge.length;
        theCheker();
        //btnprev.style.cursor = "no-drop"; for stop slider if images end
    }
    else {
        current--;
        theCheker();
    }
}




btnnext.onclick = next;
btnprev.onclick = prev;

theCheker();


/********************slider *********************** */


/***********CountDown *************** */
var time = 98000,
    day,
    hour,
    min,
    sec,
    remsec,
    dayelement = document.querySelector(".day"),
    hourselement = document.querySelector(".hour"),
    minuteselement = document.querySelector(".min"),
    secondselement = document.querySelector(".sec");

var countdown = setInterval(function () {
    day = Math.floor(time / 86400);
    hour = Math.floor(time / (60 * 60));
    min = Math.floor((time % (60 * 60)) / 60);
    remsec = time % 60;
    if (day < 10) {
        day = "0" + day;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (remsec < 10) {
        remsec = "0" + remsec;
    }
    document.querySelector(".day p").innerHTML = day + "&nbsp;&nbsp;&nbsp;  :";
    document.querySelector(".hour p").innerHTML = hour + "&nbsp;&nbsp;&nbsp;&nbsp;: ";
    document.querySelector(".min p").innerHTML = min + "&nbsp;&nbsp; : ";
    document.querySelector(".sec p").innerHTML = remsec;
    if (time > 0) {
        time = time - 1;
    }
    else {
        clearInterval(countdown);
    }

}, 1000);



/***********CountDown *************** */


/*********products *********** */
var buttons = document.querySelectorAll(".products ul li "),
    elements = document.querySelectorAll(".single-item "),
    addbtn = document.querySelectorAll(".single-item .over span");

function filterProduct(value) {
    buttons.forEach((button) => {
        //check if value equals innerText
        if (value.toLowerCase() == button.innerText.toLowerCase()) {
            button.classList.add("selected");
        } else {
            button.classList.remove("selected");
        }
    });

    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all Products") {
            element.classList.remove("hide");
        } else {
            //Check if element contains category class
            if (element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}

buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        if (btn.classList.contains("all-Products")) {
            filterProduct("all Products");
        }
        if (btn.classList.contains("Mens")) {
            filterProduct("Mens");
        }
        if (btn.classList.contains("Womens")) {
            filterProduct("Womens");
        }
        if (btn.classList.contains("kids")) {
            filterProduct("kids");
        }
        if (btn.classList.contains("Accessoris")) {
            filterProduct("Accessoris");
        }
    })
});
/*******************Product ********************** */


/*******************card ********************** */
var i = 0;
var newimages = {};
var price;
var quntatiy;
var plus;
var muins;
var totalprice;
addbtn.forEach(btnadd => {
    btnadd.addEventListener("click", function () {
        var path = btnadd.parentElement.parentElement.firstElementChild.getAttribute("src");
        price = btnadd.parentElement.parentElement.parentElement.lastElementChild.lastElementChild.innerHTML;
        if (!newimages.hasOwnProperty(path)) {
            i++;
            document.querySelector(".card span").innerHTML = i;
            newimages[path] = price;
        }
        else {
            Swal.fire('This Item already Added!! ')
        }

    });
});

window.onload = function(){
    filterProduct("all Products");
    startfun();
};

cardbtn.onclick = function () {
    $(".card1").fadeIn();

    for (var k in newimages) {
        var imgcon = document.createElement("div");
        var cardpro = document.createElement("div");
        var imgtag = document.createElement("img");
        var pprice = document.createElement("p");
        var btndelpro = document.createElement("button");
        pprice.className = "pricepro";
        imgtag.setAttribute("src", k);
        pprice.innerHTML = newimages[k];
        imgcon.className = "cardpro";
        imgcon.appendChild(imgtag);
        imgcon.appendChild(pprice);
        totalprice = document.querySelector(".totalprice");
        totalprice.innerHTML = `${parseInt(totalprice.innerHTML) + parseInt(newimages[k])}$`;

        quntatiy = document.createElement("div");
        plus = document.createElement("span");
        muins = document.createElement("span");
        var quntatiyval = document.createElement("span");
        quntatiy.className = "quntatiy";
        plus.className = "plus";
        muins.className = "muins";
        plus.innerHTML = "+";
        muins.innerHTML = "-";
        quntatiyval.innerHTML = "1";
        quntatiy.appendChild(muins);
        quntatiy.appendChild(quntatiyval);
        quntatiy.appendChild(plus);
        imgcon.appendChild(quntatiy);

        btndelpro.innerHTML = "Delete";
        btndelpro.className = "btndelpro";
        imgcon.appendChild(btndelpro);
        cardpro.className = "cardconpro";
        cardpro.appendChild(imgcon)
        document.querySelector(".cardcontent").appendChild(cardpro);

    };


}

window.addEventListener("click", function (e) {
    if (e.target.className === "btndelpro") {
        var priceonepice = e.target.parentElement.parentElement.children[0].children[1].innerHTML;
        console.log(priceonepice);
        totalprice.innerHTML = `${parseInt(totalprice.innerHTML) - parseInt(priceonepice)}$`;

        e.target.parentElement.remove();
    }
    if (e.target.className === "plus") {
        var countpro = e.target.parentElement.children[1];
        countpro.innerHTML++;
        for (var k in newimages) {
            if (e.target.parentElement.parentElement.children[0]) {
                var priceonepice = newimages[e.target.parentElement.parentElement.children[0].getAttribute("src")];
            }
        }
        console.log(priceonepice)
        var newp = e.target.parentElement.parentElement.children[1];
        newp.innerHTML = `${parseInt(priceonepice) * parseInt(countpro.innerHTML)}$ `;
        totalprice.innerHTML = `${parseInt(totalprice.innerHTML) + parseInt(priceonepice)}$`;

    }
    if (e.target.className === "btncheckout") {
        $(".card1").fadeOut();
        location.reload();
    }
    if (e.target.className === "muins") {
        if (e.target.parentElement.children[1].innerHTML <= 1) {
            e.target.parentElement.children[1].innerHTML = 1;
        }
        else {
            var countpromin = e.target.parentElement.children[1];
            countpromin.innerHTML--;
            for (var k in newimages) {
                if (e.target.parentElement.parentElement.children[0]) {
                    var priceonepice = newimages[e.target.parentElement.parentElement.children[0].getAttribute("src")];
                }
            }
            console.log(priceonepice)
            var newpmin = e.target.parentElement.parentElement.children[1];
            newpmin.innerHTML = `${parseInt(priceonepice) * parseInt(countpromin.innerHTML)}$ `;
            totalprice.innerHTML = `${parseInt(totalprice.innerHTML) - parseInt(priceonepice)}$`;


        }

    }
})
/*******************card ********************** */
