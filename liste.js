






$(document).ready(function () {

    $.ajax({
        url: "http://127.0.0.1:3001/liste",
        success: function (data) {
            if (data) {
                for (var i = 0; i <= data.length; i++) {
                    //tab.push('<li class="list-group-item">' + data[id].competences + '</li>'); 
                    $("#l").append('<li>' + data[i].competence + " " +  data[i].niveau + '</li>');
                }
               
            }
        }
    
    });
});