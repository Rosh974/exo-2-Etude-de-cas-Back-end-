



$(document).ready(function () {

    $.ajax({
        url: "http://127.0.0.1:3001/liste",
        success: function (data) {
            var tab = [];
            for (var id in data) {
                tab.push('<li class="list-group-item">' + data[id].competences + '</li>');
            }
            $("#l").append(tab[id].competences);
        }

    });

});