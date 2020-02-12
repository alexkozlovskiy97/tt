document.getElementById("button0").addEventListener('click', () => {


    var user = {
        city: document.getElementById("input0").value,
        state: document.getElementById("input1").value,
        latitude: document.getElementById("input2").value,
        longtitude: document.getElementById("input3").value


    };
    if (user.city == '' && user.state == '' && user.latitude == '' && user.longtitude == '') {
        alert("Pass at least one parameter");
    } else {
        let row = function (user) {
            return "<tr data-rowid='" + 1 + "'><td>" + user.city + "</td>" +
                "<td>" + user.state + "</td> <td>" + user.latitude + "</td>" +
                "<td>" + user.longtitude + "</td></td></tr>";
        }
        $("table tbody").append(row(user));

    }
});

function onAdd() {
    console.log("from fm");
}

document.getElementById("button1").addEventListener('click', (e) => {
    e.preventDefault();
    let user = {
        city: document.getElementById("input0").value,
        state: document.getElementById("input1").value,
        latitude: document.getElementById("input2").value,
        longtitude: document.getElementById("input3").value


    };

    let dataKey = Math.floor(Math.random() * 100000);

    localStorage.setItem(dataKey, JSON.stringify(user));
    alert("City added with key " + dataKey);
    for (let key in localStorage) {
        document.write(localStorage[key]);
        console.log(localStorage[key]);
    }
});

