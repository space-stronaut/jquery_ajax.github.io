
$.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    success: function (response) {
        $.each(response, function (i, data) { 
            $('#user').append('<h1>' + data.name + '</h1>');  
        });        
    }
});