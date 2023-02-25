document.addEventListener("DOMContentLoaded", function (event) { });



function SaveName() {
    document.getElementById("output").innerHTML = " ";
    document.getElementById("feedback").innerHTML = " ";
    if (document.getElementById("textbox").value != null && document.getElementById("textbox").value != "") {
        var usersname = document.getElementById("textbox").value;
        console.log(usersname);
        document.getElementById("content").classList.remove("visually-hidden");
        document.getElementById("body").classList.remove("stop-scrolling");
        document.getElementById("body").classList.add("scrollable-place");
        document.getElementById("output").innerHTML += usersname;
        const element = document.getElementById("content");
        element.scrollIntoView(true);
    }
    else {
        document.getElementById("feedback").innerHTML = "יש להזין שם";
        //const aToAdd = document.createElement("a");
        //const LinkToAdd = document.createTextNode("#content");
        //aToAdd.appendChild(LinkToAdd);
        //container.appendChild(aToAdd);
    }

    function Man(){

    }

    function Woman() {

    }
}



