
window.onload = function () {
   var a = [];
   a = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
    var d1 = document.createElement("select");
    d1.type = "dropdown";

    d1.id = "drop1";
    d1.name = "1";
    document.getElementById("box").appendChild(d1);

    for (let i = 1; i <= 31; i++) {
        var opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = i;
        d1.appendChild(opt);

    }


    var d3 = document.createElement("select");
    d3.type = "dropdown";
    d3.id = "drop3";
    d3.name = "3";
    document.getElementById("box").appendChild(d3);

    for (let i = 0; i < a.length; i++) {
        var opt2 = document.createElement("option");
        opt2.value = a[i];
        opt2.innerHTML =a[i];
        d3.appendChild(opt2);

    }


    var d2 = document.createElement("select");
    d2.type = "dropdown";
    d2.id = "drop2";
    d2.name = "2";
    document.getElementById("box").appendChild(d2);

    for (let i = 1950; i <= 2026; i++) {
        var opt1 = document.createElement("option");
        opt1.value = i;
        opt1.innerHTML = i;
        d2.appendChild(opt1);

    }

    var l1 = document.createElement("label");
    l1.id = "lbl1";
    l1.name = "lbl1";
    document.getElementById("box").appendChild(l1);

    var b1 = document.createElement("input");
    b1.type = "button";
    b1.id = "btn1";
    b1.value = "Click Here"
    b1.name = "btn1";
    document.getElementById("box").appendChild(b1);
    b1.onclick = function(){
        lbl1.innerHTML = drop1.value + "/" + drop3.value + "/" + drop2.value;
    }
    
}