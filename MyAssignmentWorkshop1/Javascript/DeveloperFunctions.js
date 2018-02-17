window.onload = function () {
    // loadTableWithTasks()
    // loadTablesWithCreates();
    // getDevs();
    // stefanTable();
};

var url = "http://dm.sof60.dk:84/api/Developer";


function addDeveloperToDatabase1() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-type", "application/json");
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         var json = JSON.parse(xhr.responseText);
    //         // console.log(json.email + ", " + json.password);
    //     }
    // };
    var data = JSON.stringify({
        "Name": "Teste2r",
        "Email": "tester@test2er.dk",
        "Tasks": []
    });
    xhr.send(data);
}

function addDeveloperToDatabase2() {
    var data = {};
    data.name = document.getElementById("inputName").value + document.getElementById("inputLastName").value;;
    data.lastname = document.getElementById("inputEmail4").value;
    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "201") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhr.send(json);
}

// function addDeveloperToDatabase() {
//     var firstName1 = document.getElementById("inputName").value;
//     var lastName1 = document.getElementById("inputLastName").value;
//     var email1 = document.getElementById("inputEmail4").value;
//     // var devObject = {
//     //     Name = firstName1,
//     //     Email = email1,
//     //     Tasks = null
//     // };
//     return devObject;
//     console.log(firstName1 + " " + lastName1 + " " + email1);
// }

function loadTablesWithCreates() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", loadTableWithDevelopers);
    oReq.open("GET", url);
    oReq.send();
}

function loadTableWithDevelopers() {
    var listOfDevelopers = JSON.parse(this.responseText);
    const table = document.getElementById('table-of-developers');
    for (let i = 0; i < listOfDevelopers.length; i++) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        td1.appendChild(document.createTextNode(listOfDevelopers[i].Id));
        td2.appendChild(document.createTextNode(listOfDevelopers[i].Name));
        td3.appendChild(document.createTextNode(listOfDevelopers[i].Email));
        td4.appendChild(document.createTextNode(listOfDevelopers[i].Tasks));
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        table.appendChild(tr);
    }
}


// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

/** CENTISOFT **/

function getDevs() {
    var bReq = new XMLHttpRequest();
    bReq.addEventListener("load", centiLoad);
    bReq.open("GET", "http://dm.sof60.dk:84/api/Developer");
    bReq.send();
    // bReq.onreadystatechange = function () {
    //     if (this.readyState == this.DONE) {
    //         console.log(bReq.status)
    //     }
    // }
}

function centiLoad() {
    var dataFromGet = JSON.parse(this.responseText);
    var table2 = document.getElementById("table-of-developers1");
    for (let i = 0; i < dataFromGet.length; i++) {

        var row = table2.insertRow(table2.rows.length);
        var cellId = row.insertCell(0); //ID
        var cellName = row.insertCell(1); //NAME
        var cellEmail = row.insertCell(2); //EMAIL

        cellId.innerHTML = dataFromGet[i].Id;
        cellName.innerHTML = dataFromGet[i].Name;
        cellEmail.innerHTML = dataFromGet[i].Email;

    }

    //delete the first row
    // table.deleteRow(1);

}

//Dynamisk tilføj tables headers og data med insert.
function jsonToUi() {
    var developerList = JSON.parse(this.responseText);
    for (let i = 0; i < developerList.length; i++) {
        console.log(developerList[i].Name);
    }

    //Extract values for HTML header
    var col = [];
    for (let i = 0; i < developerList.length; i++) {
        for (var key in developerList[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    //Create dynamic table
    var table1 = document.createElement("table")

    //Create HTML table header row using the extracted headers above
    var tr = table1.insertRow(-1); //Table row 

    for (let i = 0; i < col.length; i++) {
        var th = document.createElement("th"); //Table header
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    //Add JSON data to the table as rows
    for (let i = 0; i < developerList.length; i++) {
        tr = table1.insertRow(-1);

        for (let j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = developerList[i][col[j]];
        }
    }

    //Add the newly created table with JSON data to a container
    table1.setAttribute('class', 'table table-striped');
    var divContainer = document.getElementById("tableDiv");
    divContainer.innerHTML = "";
    divContainer.appendChild(table1);
}

function stefanTable() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", jsonToUi);
    oReq.open("GET", "http://dm.sof60.dk:84/api/Developer");
    oReq.send();
}


