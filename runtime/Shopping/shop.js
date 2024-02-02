var count = 1;

window.onclick = function () {

}

function btn1() {

    CreateRow(count);
    count++;
}

function CreateRow(No) {
    var tr1 = document.createElement("tr");
    document.getElementById("tbdTag").appendChild(tr1);

    var SrNo = document.createElement("td");
    SrNo.innerHTML = No;
    tr1.appendChild(SrNo);

    var ProductName = document.createElement("td");
    tr1.appendChild(ProductName);

    var ProductPrice = document.createElement("td");
    tr1.appendChild(ProductPrice);

    var ProductQnt = document.createElement("td");
    tr1.appendChild(ProductQnt);

    var TotalPrice = document.createElement("td");
    TotalPrice.innerHTML = "0";
    tr1.appendChild(TotalPrice);

    var Remove = document.createElement("td");
    tr1.appendChild(Remove);


    var ProName = document.createElement("input");
    ProName.type = "text";
    ProName.id = "txt1";
    ProName.name = "txt1";
    ProductName.appendChild(ProName);

    var ProPrice = document.createElement("input");
    ProPrice.type = "text";
    ProPrice.id = "txt2";
    ProPrice.name = "txt2";
    ProductPrice.appendChild(ProPrice);

    var ProQnt = document.createElement("input");
    ProQnt.type = "text";
    ProQnt.id = "txt3";
    ProQnt.name = "txt3";
    ProductQnt.appendChild(ProQnt);
    ProductQnt.onkeyup = function () {
        TotalPrice.innerHTML = parseInt(ProPrice.value) * parseInt(ProQnt.value);
        grandtotal();

    }

    // var Total = document.createElement("label");
    // // Total.id = "lbl2";
    // Total.innerHTML = "0";
    // TotalPrice.appendChild(Total);

    var Removebtn = document.createElement("input");
    Removebtn.type = "button";
    Removebtn.value = "Remove";
    Remove.appendChild(Removebtn);
    Removebtn.onclick = function () {
        document.getElementById("tbdTag").removeChild(tr1);
        var TotalOfNoCol = document.querySelectorAll("#tbdTag>tr>td:nth-child(1)");
        count = 1;
        for (let index = 0; index < TotalOfNoCol.length; index++) {
            var FirstTdCol = TotalOfNoCol[index];
            FirstTdCol.innerHTML = index + 1;
            count++;
        }
        grandtotal();
    }
    function grandtotal() {
        var GrandTotalVar = 0;
        var discount = 0;
        var nettotal = 0;
        //   debugger;

        var TotalOfNoCol1 = document.querySelectorAll("#tbdTag>tr>td:nth-child(5)");
        for (let index = 0; index < TotalOfNoCol1.length; index++) {
            var FirstTdCol1 = TotalOfNoCol1[index];
            GrandTotalVar = GrandTotalVar + parseInt(FirstTdCol1.innerHTML);

        }
        //console.log(GrandTotalVar);
        lblGrandTotal.innerHTML = GrandTotalVar;
        if (GrandTotalVar >= 15000) {
            discount = GrandTotalVar * 15 / 100;
        }
        else if (GrandTotalVar <= 15000 || GrandTotalVar >= 10000) {
            discount = GrandTotalVar * 10 / 100;
        }
        else if (GrandTotalVar <= 10000 || GrandTotalVar >= 5000) {
            discount = GrandTotalVar * 5 / 100;
        }
        else if (GrandTotalVar <= 5000) {
            discount = GrandTotalVar * 2 / 100;
        }
        lblDiscount.innerHTML = discount
        lblNetAmount.innerHTML = GrandTotalVar - discount;



    }




}