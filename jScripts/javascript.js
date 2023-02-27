document.addEventListener("DOMContentLoaded", function (event) { });


function SaveName()
{
    document.getElementById("output").innerHTML = " ";
    if (document.getElementById("textbox").value != null && document.getElementById("textbox").value != "") {
        var usersname = document.getElementById("textbox").value;
        document.getElementById("content").classList.remove("visually-hidden");
        document.getElementById("body").classList.remove("stop-scrolling");
        document.getElementById("body").classList.add("scrollable-place");
        document.getElementById("output").innerHTML += usersname;
        const element = document.getElementById("content");
        element.scrollIntoView(true);
        document.getElementById("msg").value = "בדיקה";
    }
    else {
        document.getElementById("msg").classList.add("visability");
    }
}
var firstTime = false;


function man() {
    if (firstTime == true) {
        var olddata = document.getElementById("DynamicImg").lastChild;
        document.getElementById("DynamicImg").removeChild(olddata);
        firstTime = false;
    }
    if (firstTime == false) {
        var img = document.createElement('img');
        img.src = "images/ManAge.png";
        document.getElementById('DynamicImg').appendChild(img);
        firstTime = true
    }
    }

function woman() {
    if (firstTime == true) {

        var olddata = document.getElementById("DynamicImg").lastChild;
        document.getElementById("DynamicImg").removeChild(olddata);
        firstTime = false;
    }
    if (firstTime == false) {
        var img = document.createElement('img');
        img.src = "images/WomanAge.png";
        document.getElementById('DynamicImg').appendChild(img);
        firstTime = true
    }
}

    function reveal() {
        var reveals = document.querySelectorAll([".msgrightshort", ".msgrightlong", ".revealleft", ".revealleftHigh"]);
        for (var i = 0; i < reveals.length; i++) {
            if (reveals[i].width == 0) {console.log("dfd") }
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);

    // To check the scroll position on page load
    reveal();




