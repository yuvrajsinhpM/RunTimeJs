var count = 1;

function btn1() {
    CreateRow(count);
    count++;

}
function CreateRow(No) {
    var gen;
    if (rdo1.checked == true) {
        gen = "Male";
    }
    else {
        gen = "Female";
    }
    var tr1 = document.createElement("tr");
    document.getElementById("tbdTag").appendChild(tr1)

    var td1 = document.createElement("td");
    td1.innerHTML = No;
    tr1.appendChild(td1);

    var td2 = document.createElement("td");
    tr1.appendChild(td2);

    var td3 = document.createElement("td");
    tr1.appendChild(td3);

    var td4 = document.createElement("td");
    tr1.appendChild(td4);

    var td5 = document.createElement("td");
    tr1.appendChild(td5);

    var td6 = document.createElement("td");
    tr1.appendChild(td6);

    var td7 = document.createElement("td");
    tr1.appendChild(td7);

    var td8 = document.createElement("td");
    tr1.appendChild(td8);

    var td9 = document.createElement("td");
    tr1.appendChild(td9);

    var lbl1 = document.createElement("label");
    lbl1.innerHTML = txt1.value;
    td2.appendChild(lbl1);

    var lbl2 = document.createElement("label");
    lbl2.innerHTML = txt2.value;
    td3.appendChild(lbl2);

    var lbl3 = document.createElement("label");
    lbl3.innerHTML = Drop1.value;
    td4.appendChild(lbl3);

    var lbl4 = document.createElement("label");
    lbl4.innerHTML = gen;
    td5.appendChild(lbl4);

    var lbl5 = document.createElement("label");
    lbl5.innerHTML = add1.value
    td6.appendChild(lbl5);

    var lbl6 = document.createElement("label");
    lbl6.innerHTML = dt1.value;
    td7.appendChild(lbl6);

    var Edit = document.createElement("button");
    Edit.type = "button";
    Edit.innerHTML = "Edit";
    td8.appendChild(Edit);
    Edit.onclick = function () {
        txt1.value = lbl1.innerHTML;
        txt2.value = lbl2.innerHTML;
        if(gen=="Male"){
             rdo1.checked = true;
        }
        else{
            rdo2.checked = true;
        }
        Drop1.value = lbl3.innerHTML;
        add1.value = lbl5.innerHTML;
        dt1.value = lbl6.innerHTML;



        hide.style.display = "none";
        var Update = document.createElement("button");
        Update.type = "button";
        Update.innerHTML = "Update";
        document.getElementById("LightBlueBox").appendChild(Update);
        Update.onclick = function () {
            lbl1.innerHTML = txt1.value
            lbl2.innerHTML = txt2.value;
            lbl3.innerHTML = Drop1.value;
            var gen;
            if (rdo1.checked == true) {
                gen = "Male";
            }
            else {
                gen = "Female";
            }
            lbl4.innerHTML = gen;
            lbl5.innerHTML = add1.value
            lbl6.innerHTML = dt1.value;
            hide.style.display = "block";
            Update.style.display = "none";

        }

    }

    var Remove = document.createElement("button");
    Remove.type = "button";
    Remove.innerHTML = "Remove";
    td9.appendChild(Remove);
    Remove.onclick = function () {
        document.getElementById("tbdTag").removeChild(tr1);
        var TotalOfNoCol = document.querySelectorAll("#tbdTag>tr>td:nth-child(1)");
        count = 1;
        for (let index = 0; index < TotalOfNoCol.length; index++) {
            var FirstTdCol = TotalOfNoCol[index];
            FirstTdCol.innerHTML = index + 1;
            count++;
        }
    }



}
