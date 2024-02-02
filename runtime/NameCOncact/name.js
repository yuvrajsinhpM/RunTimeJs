window.onload = function () {
    var t1 = document.createElement("input");
    t1.type = "text";
    t1.id = "txt1";
    t1.placeholder = "First Name";
    t1.name = "txt1";
    document.getElementById("box").appendChild(t1);

    var t2 = document.createElement("input");
    t2.type = "text";
    t2.name = "txt2";
    t2.id = "txt2";
    t2.placeholder = "Middle Name";
    document.getElementById("box").appendChild(t2);

    var t3 = document.createElement("input");
    t3.type = "text";
    t3.id = "txt3";
    t3.name = "txt3";
    t3.placeholder = "Last Name";
    document.getElementById("box").appendChild(t3);

    var nbps = document.createElement("br");
    document.getElementById("box").appendChild(nbps);
    var nbps = document.createElement("br");
    document.getElementById("box").appendChild(nbps);

    var b1 = document.createElement("input");
    b1.type = "button";
    b1.id = "btn1";
    b1.name = "btn1";
    b1.value = "Concat String";
    
    b1.onclick = function () {
        lbl1.innerHTML = txt1.value+ "&nbsp;" + txt2.value +"&nbsp;" + txt3.value;
    }

    document.getElementById("box").appendChild(b1);
    var nbps = document.createElement("br");
    document.getElementById("box").appendChild(nbps);
    var nbps = document.createElement("br");
    document.getElementById("box").appendChild(nbps);
    
    var l1 = document.createElement("label");
    l1.id = "lbl1";
    l1.name = "lbl1";
    document.getElementById("box").appendChild(l1);
}