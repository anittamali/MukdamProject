document.addEventListener("DOMContentLoaded", function (event) { });

//saves the name of the user
function SaveName()
{
    document.getElementById("output").innerHTML = " ";
    if (document.getElementById("textbox").value != null && document.getElementById("textbox").value != "") {
        var usersname = document.getElementById("textbox").value;
        document.getElementById("content").classList.remove("visually-hidden");
        document.getElementById("body").classList.remove("stop-scrolling");
        document.getElementById("body").classList.add("scrollable-place");
        document.getElementById("output").innerHTML += usersname;
        document.getElementById("msg").classList.remove("visabilityVisible");
        document.getElementById("msg").classList.add("visabilityHidden");
        const element = document.getElementById("content");
        element.scrollIntoView(true);
 
    }
    else {
        document.getElementById("msg").classList.remove("visabilityHidden");
        document.getElementById("msg").classList.add("visabilityVisible");
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
    console.loge("SS")
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
        var reveals = document.querySelectorAll([".msgrightshort", ".msgrightlong", ".revealleftS", ".revealleftM", ".revealleftL", ".msgGender"]);
        for (var i = 0; i < reveals.length; i++) {
            if (reveals[i].classList.contains('msgGender')) {console.log("TRANSGENDER PARTY") }
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 50;
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




