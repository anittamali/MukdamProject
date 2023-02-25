document.addEventListener("DOMContentLoaded", function (event) { });


function SaveName() {
    document.getElementById("output").innerHTML = "";
    if (document.getElementById("textbox").value != null && document.getElementById("textbox").value != "") {
        var usersname = document.getElementById("textbox").value;
        console.log(usersname);
        document.getElementById("content").classList.remove("visually-hidden");
        document.getElementById("body").classList.remove("stop-scrolling");
        document.getElementById("body").classList.add("scrollable-place");
        document.getElementById("output").innerHTML += usersname;
        
        }
    }


