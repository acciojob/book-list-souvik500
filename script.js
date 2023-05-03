//your JS code here. If required.
//your JS code here. If required.
$(document).ready(function() {
    $("#submit").click(function() {
        var title = $("#title").val();
        var author = $("#author").val();
        var isbn = $("#isbn").val();

        $("#book-list").append("<tr><td>" + title + "</td><td>" + author + "</td><td>" + isbn + "</td><td><button type='button' class='btn btn-danger delete'>X</button></td></tr>");

        $("#title").val("");
        $("#author").val("");
        $("#isbn").val("");

        return false;
    });

    // JavaScript code to remove book from table on click of delete button
    $("#book-list").on("click", ".delete", function() {
        $(this).parents("tr").remove();
    });
});
