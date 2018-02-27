const myToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYXNwZXIiLCJqdGkiOiIyZmU2ZWY0MS04YTYwLTRjNzctODU2Yy1kYzEzMTZhYjcxNTAiLCJuYmYiOjE1MTkzNDE2MjEsImV4cCI6MTUyNDUyNTYyMSwiaXNzIjoiU1dLRyIsImF1ZCI6IkRFVlMifQ.QUzogX4tnjXe5iyORsRV3uhen8Ylm7CC8-w3OzOkGxs";

window.onload = function () {
};

let sebUrl = "http://centisoft.gotomain.net/api/v1/developer";
var listOfDevelopers;

function loadListOfDevelopers() {
    $(document).ready(function () {
        $.ajax({
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            // dataType: 'application/json',
            url: 'http://centisoft.gotomain.net/api/v1/developer',
            headers: { 'Authorization': 'bearer ' + myToken },
            success: function (res) {
                listOfDevelopers = JSON.parse(res);
                loadTableWithDevelopers(listOfDevelopers);
                devDropdownLoad(listOfDevelopers);
            }
        });
    });
}


//gammel api fra lærer
// function loadListOfDevelopers() {
//     $(document).ready(function () {
//         $.get(url, function (data) {
//             listOfDevelopers = data;
//         });
//     });
// }
let url = "http://dm.sof60.dk:84/api/Developer";

function developerAddBtn() {
    $(document).ready(function () {
        $("#addDevBtn").click(function () {
            var name = $("#inputName").val(); //+ " " + $("#inputLastName").val();
            var email = $("#inputEmail4").val();
            $.post(url, { Name: name, Email: email });
        });
    });
}

function developerUpdateBtn() {
    $(document).ready(function () {
        $("#updateDevBtn").click(function () {
            var newName = $("#showSelectedDevName").val();
            var newEmail = $("#showSelectedDevEmail").val();
            $.ajax({
                url: sebUrl + "/" + $("#showSelectedDevId").val(),
                type: 'PUT',
                data: JSON.stringify({ 'Name': newName, 'Email': newEmail }),
                contentType: 'application/json; charset=utf-8',
                headers: { 'Authorization': 'bearer ' + myToken },
                success: function (response) {
                    console.log(response);
                    loadListOfDevelopers();
                },
                error: function (response) {
                    console.log(response);
                }
            });
        });
    });
}



function showSelectedDeveloper() {
    $('#developerDropdown').change(function () {
        var e = document.getElementById("developerDropdown");
        var strUser = e.options[e.selectedIndex].value;
        for (let i = 0; i < listOfDevelopers.length; i++) {
            if (listOfDevelopers[i].Name !== null && listOfDevelopers[i].Id == strUser) {
                $("#showSelectedDevId").val(listOfDevelopers[i].Id);
                $("#showSelectedDevName").val(listOfDevelopers[i].Name);
                $("#showSelectedDevEmail").val(listOfDevelopers[i].Email);
            }
        }
    });
}


function loadTablesWithCreatesJQuery() {
    $(document).ready(function () {
        $('#tableCreateElements').click(function () {
            loadTableWithDevelopers();
        });
    });
}



function devDropdownLoad(data) {
    const devDropDown = document.getElementById('developerDropdown');
    // $('#developerDropdown').empty();
    $(document).ready(function () {
        for (let i = 0; i < data.length; i++) {
            var option = document.createElement("option");
            option.value = data[i].Id;
            option.text = data[i].Name;
            devDropDown.add(option);
        }
    });
}

function loadTableWithDevelopers(data) {
    const table = document.getElementById('table-of-developers');
    data.forEach(element => {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        td1.appendChild(document.createTextNode(element.Id));
        td2.appendChild(document.createTextNode(element.Name));
        td3.appendChild(document.createTextNode(element.Email));
        td4.appendChild(document.createTextNode(element.Tasks));
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        table.appendChild(tr);
    });
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

function testCookie() {
    document.cookie = "username=Casper Andersen; expires=Thu, 20 dec 2018 12:00:00 UTC";
    // var myCookie = document.cookie;
    alert(document.cookie);
    console.log(document.cookie);
}




