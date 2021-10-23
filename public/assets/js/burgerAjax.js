$(function() {
    $(".change-state").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the PUT request.
        $.ajax({
            url: `/api/burgers/${id}`,
            type: "PUT"
        }).then(function() {
            console.log(`Burger ${id} was eaten!`);
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });

    $(".createBurger").on("submit", function(e){
        event.preventDefault();
        var newBurger = {
            name: $("#newBurger").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("created new Burger")
            $("#newBurger").val('')
            location.reload();
        });
    });
});