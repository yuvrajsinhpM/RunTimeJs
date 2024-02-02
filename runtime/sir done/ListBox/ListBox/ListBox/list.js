window.onload = function () {

    var l1 = document.createElement("select");
    l1.setAttribute("multiple","multiple");
    for (let i = 1; i <10; i++) {
        var opt= document.createElement("option");
        opt.innerHTML = "Option"+i;
        opt.value = "Option"+i;
        l1.appendChild(opt);
        
    }
    document.getElementById("box").appendChild(l1);

    var l2 = document.createElement("select");
    l2.setAttribute("multiple","multiple");
    document.getElementById("box").appendChild(l2);

    var t1 = document.createElement("input");
    t1.type = "text";
    t1.name = "txt1";
    t1.id = "txt1";
    document.getElementById("box").appendChild(t1);

    var b1 = document.createElement("input");
    b1.type = "button";
    b1.value = "Add Item";
    b1.id = "btn1";
    b1.name = "btn1";
    document.getElementById("box").appendChild(b1);
    b1.onclick = function () {
        var op1 = document.createElement("option");
        op1.value = "grg"; 
        op1.innerHTML = t1.value;
        l1.appendChild(op1);
    }

    for (let i = 0; i < 4; i++) {
        var br = document.createElement("br");
        document.getElementById("box").appendChild(br);
    }

    var b2 = document.createElement("input");
    b2.type = "button";
    b2.value = ">";
    b2.id = "btn2";
    b2.name = "btn2";
    document.getElementById("box").appendChild(b2);
    b2.onclick = function () {
        var SelectedOption = l1.selectedOptions[0];
        l2.appendChild(SelectedOption);
        
    }

    var b3 = document.createElement("input");
    b3.type = "button";
    b3.value = ">>";
    b3.id = "btn3";
    b3.name = "btn3";
    document.getElementById("box").appendChild(b3);
    b3.onclick = function () {
        var AllOptionOfL1 = l1.options;

        for (let i = 0; i < AllOptionOfL1.length; i++) {
            const SingleOptions = AllOptionOfL1[i];
            var op1 = document.createElement("option");
            op1.value = SingleOptions.value; 
            op1.innerHTML = SingleOptions.value;
            l2.appendChild(op1);
            
        }
        l1.innerHTML = "";
        console.log(AllOptionOfL1);
    }

    var b4 = document.createElement("input");
    b4.type = "button";
    b4.value = "<<";
    b4.id = "btn4";
    b4.name = "btn4";
    document.getElementById("box").appendChild(b4);
    b4.onclick = function () {
       
    }

    var b5 = document.createElement("input");
    b5.type = "button";
    b5.value = "<";
    b5.id = "btn5";
    b5.name = "btn5";
    document.getElementById("box").appendChild(b5);
    b5.onclick = function () {

    
    }
}
