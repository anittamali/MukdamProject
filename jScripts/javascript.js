document.addEventListener("DOMContentLoaded", function (event) { });

//saves the name of the user and show validation message
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
    var self = document.getElementById("manage");
    self.classList.remove("visabilityHidden2");
    self.classList.add("visabilityVisible2");
    var other = document.getElementById("womanage");
    other.classList.add("visabilityHidden2");
    other.classList.remove("visabilityVisible2");
    document.getElementById("content2").classList.remove("visually-hidden");
    }

function woman() {
    var self = document.getElementById("womanage");
    self.classList.remove("visabilityHidden2");
    self.classList.add("visabilityVisible2");
    var other = document.getElementById("manage");
    other.classList.add("visabilityHidden2");
    other.classList.remove("visabilityVisible2");
    document.getElementById("content2").classList.remove("visually-hidden");
}

    function reveal() {
        var reveals = document.querySelectorAll([".msgrightshort", ".msgrightlong", ".revealleftS", ".revealleftM", ".revealleftL", ".msgGender"]);
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 50;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }
    window.addEventListener("scroll", reveal);
    // To check the scroll position on page load
    reveal();