//Register Client - Vanilla JS

// let xhr = new XMLHttpRequest();
// xhr.open('POST', 'http://centisoft.gotomain.net/api/v1/client/register', true);
// xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');


// xhr.onreadystatechange = function() {
//     if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {        
//         const res = JSON.parse(xhr.response);
//         setCookie("auth_token", res.client.Token, 2);
//     }
// }
// const data = JSON.stringify({name: 'HalloWeldts', username: 'wuts', password: 'secureaf'});
// xhr.send(data);

(function ($) {
    $("#loginBtn").click(function () {
        $.ajax({
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            url: 'http://centisoft.gotomain.net/api/v1/client/login',
            data: JSON.stringify({ Username: $('#loginUsername').val(), Password: $('#loginPassword').val() }),
            success: function (data) {
                setCookie("auth_token", data.token, 2);
                console.log(data.token);
            },
            error: function (data) {
                console.log(data.token);
            }

        });
    })
})(jQuery);

//Register Client - jQuery
(function getNewToken($) {
    $("#registerBtn").click(function () {
        $.ajax({
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            url: 'http://centisoft.gotomain.net/api/v1/client/register',
            data: JSON.stringify({ Username: $('#loginUsername').val(), Password: $('#loginPassword').val() }),
            success: function (res) {
                setCookie("auth_token", res.client.Token, 2);
            }
        });
    });
})(jQuery);

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}



// function getCookie(cname) {
//     var name = cname + "=";
//     var decodedCookie = decodeURIComponent(document.cookie);
//     var ca = decodedCookie.split(';');
//     for (var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }