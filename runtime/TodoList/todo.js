function btn1() {
    var WorkBox = document.createElement("div");
    WorkBox.className = "work";
    document.getElementById("WorkBoxContainer").appendChild(WorkBox);


    var PTag = document.createElement("p");
    PTag.innerHTML = txt1.value;
    WorkBox.appendChild(PTag);

    var Edit = document.createElement("button");
    Edit.type = "button";
    Edit.innerHTML = "Edit";
    WorkBox.appendChild(Edit);
    Edit.onclick = function () {
        var EditTxt = document.createElement("input");
        EditTxt.type = "text";
        EditTxt.value = PTag.innerHTML;
        EditTxt.style.marginTop = "15px";
        WorkBox.appendChild(EditTxt);

        Edit.style.display = "none";
        Done.style.display = "none";
        PTag.style.display = "none";

        var UpdateBtn = document.createElement("button");
        UpdateBtn.type = "button";
        UpdateBtn.innerHTML = "Update";
        UpdateBtn.style.marginTop = "5px";
        WorkBox.appendChild(UpdateBtn);
        UpdateBtn.onclick = function () {
            PTag.innerHTML = EditTxt.value;
            Edit.style.display = "inline-block";
            Done.style.display = "inline-block";
            PTag.style.display = "block";
            UpdateBtn.style.display = "none";
            EditTxt.style.display = "none";
          
        }

    }


    var Done = document.createElement("button");
    Done.type = "button";
    Done.style.marginLeft = "10px";
    Done.innerHTML = "Done";
    WorkBox.appendChild(Done);
    Done.onclick = function () {
        var CompleteBox = document.createElement("div");
        CompleteBox.className = "Hello";
        document.getElementById("Complete").appendChild(CompleteBox);
        CompleteBox.appendChild(WorkBox);
        Edit.style.display = "none";
        Done.style.display = "none";

        var GoBack = document.createElement("button");
        GoBack.type = "button";
        GoBack.innerHTML = "GoBack";
        GoBack.style.marginRight = "5px";
        WorkBox.appendChild(GoBack);
        GoBack.onclick = function (){
            
        }

        var GoToTrash = document.createElement("button");
        GoToTrash.type = "button";
        GoToTrash.innerHTML = "GoToTrash";
        GoToTrash.style.marginTop = "5px";
        WorkBox.appendChild(GoToTrash);
        GoToTrash.onclick = function () {
          
            var Trash = document.createElement("div");
            Trash.className = "TrashBox1";
            document.getElementById("Trash").appendChild(Trash);
            Trash.appendChild(CompleteBox);
            GoToTrash.style.display = "none";
            GoBack.style.display = "none";

        }

        

    }
}