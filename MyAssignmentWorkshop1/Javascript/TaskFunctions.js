var task1 = {
    taskName: "Task one",
    description: "This is the first.",
    difficulty: 10
}

var task2 = {
    taskName: "Task Two",
    description: "This is the second.",
    difficulty: 20
}

var task3 = {
    taskName: "Task Three",
    description: "This is the third.",
    difficulty: 30
}

var listOfTasks = [
    task1,
    task2,
    task3
];

// window.onload = function () {
//     const ul = document.getElementById("list-of-tasks");
//     for (let i = 0; i < listOfTasks.length; i++) {
//         const li = document.createElement("li");
//         li.appendChild(document.createTextNode(listOfTasks[i].taskName));
//         li.setAttribute("class", "list-group-item");
//         ul.appendChild(li);
//     }
// };

// window.onload = function () {
//     const ul = document.getElementById("table-of-tasks");
//     for (let i = 0; i < listOfTasks.length; i++) {
//         const li = document.createElement("li");
//         li.appendChild(document.createTextNode(listOfTasks[i].taskName));
//         li.setAttribute("class", "list-group-item");
//         ul.appendChild(li);
//     }
// };

window.onload = function () {
    loadTableWithTasks()
};

function loadTableWithTasks() {
    const table = document.getElementById('table-of-tasks');
    for (let i = 0; i < listOfTasks.length; i++) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        td1.appendChild(document.createTextNode(listOfTasks[i].taskName));
        td2.appendChild(document.createTextNode(listOfTasks[i].description));
        td3.appendChild(document.createTextNode(listOfTasks[i].difficulty));
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        table.appendChild(tr);
    }
}




