var count = 1;
window.onload = function () {

    var b1 = document.createElement("input");
    b1.type = "button";
    b1.id = "btn1";
    b1.name = "btn1";
    b1.value = "Add";
    document.getElementById("box").appendChild(b1);
    b1.onclick = function () {
        var br = document.createElement("br");
        document.getElementById("box").appendChild(br);
        var br = document.createElement("br");
        document.getElementById("box").appendChild(br);

        var l1 = document.createElement("label");
        l1.id = "lbl1";
        l1.innerHTML = count++;
        l1.style.display = "inline-block";
        l1.style.marginRight = "10px";
        document.getElementById("box").appendChild(l1);

        var t1 = document.createElement("input");
        t1.type = "text";
        t1.style.display = "inline-block";
        t1.style.marginRight = "10px";
        t1.id = "txt1";
        t1.name = "txt1";
        document.getElementById("box").appendChild(t1);

        var t2 = document.createElement("input");
        t2.type = "text";
        t2.id = "txt2";
        t2.style.display = "inline-block";
        t2.style.marginRight = "10px";
        t2.name = "txt2";
        document.getElementById("box").appendChild(t2);

        var t3 = document.createElement("input");
        t3.type = "text";
        t3.id = "txt3";
        t3.style.display = "inline-block";
        t3.style.marginRight = "10px";
        t3.name = "txt3";
        document.getElementById("box").appendChild(t3);

        var b2 = document.createElement("input");
        b2.type = "button";
        b2.id = "bt21";
        b2.style.display = "inline-block";
        b2.style.marginRight = "10px";
        b2.name = "btn2";
        b2.value = "Remove";
        document.getElementById("box").appendChild(b2);
        b2.onclick = function () {
            document.getElementById("box").removeChild(t1);
            document.getElementById("box").removeChild(t2);
            document.getElementById("box").removeChild(t3);
            document.getElementById("box").removeChild(l1);
            document.getElementById("box").removeChild(b2);





        }
    }

}