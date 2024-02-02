window.onload = function () {
    var l1 = document.createElement("label");
    l1.id = "lbl1";
    l1.innerHTML = "1). 2+2 = ?";
    document.getElementById("box").appendChild(l1);

    var br = document.createElement("br");
    document.getElementById("box").appendChild(br);

    var r1 = document.createElement("input");
    r1.type = "radio";
    r1.name = "rdo1";
    r1.id = "rdo1";
    r1.value = "3";
    document.getElementById("box").appendChild(r1);

    var l2 = document.createElement("label");
    l2.id = "lbl1";
    l2.setAttribute("for", "rdo1");
    l2.innerHTML = "3";
    l2.style.display="inline-block";
    l2.style.marginRight="10px";
    document.getElementById("box").appendChild(l2);

    

    var r2 = document.createElement("input");
    r2.type = "radio";
    r2.name = "rdo1";
    r2.id = "rdo2";
    r2.value = "4";
    document.getElementById("box").appendChild(r2);

    var l3 = document.createElement("label");
    l3.id = "lbl2";
    l3.setAttribute("for", "rdo2");
    l3.innerHTML = "4";
    document.getElementById("box").appendChild(l3);






    var r3 = document.createElement("input");
    r3.type = "radio";
    r3.name = "rdo1";
    r3.id = "rdo3";
    r3.value = "6";
    document.getElementById("box").appendChild(r3);

    var l4 = document.createElement("label");
    l4.id = "lbl3";
    l4.setAttribute("for", "rdo3");
    l4.innerHTML = "6";
    document.getElementById("box").appendChild(l4);


    var r4 = document.createElement("input");
    r4.type = "radio";
    r4.name = "rdo1";
    r4.id = "rdo4";
    r4.value = "8";
    document.getElementById("box").appendChild(r4);

    var l5 = document.createElement("label");
    l5.id = "lbl5";
    l5.setAttribute("for", "rdo4");
    l5.innerHTML = "8";
    document.getElementById("box").appendChild(l5);


    var b1 = document.createElement("input");
    b1.type = "button"
    b1.id = "btn1";
    b1.name = "btn1";
    b1.value = "Click Here";
    document.getElementById("box").appendChild(b1);
    b1.onclick = function(){
        if (rdo2.checked==true) {
            lbl6.innerHTML = "You Are Right";
        }
        else{
            lbl6.innerHTML = "You Are Wrong";
        }
    }

    var l6 = document.createElement("label");
    l6.id = "lbl6";
    document.getElementById("box").appendChild(l6);



}