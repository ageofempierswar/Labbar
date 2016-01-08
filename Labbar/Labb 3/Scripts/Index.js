$(function () {
    loadJson();
    $("#search_input").keyup(function () { loadJson(); });
    $(".checkboxes").change(function () { loadJson(); });
});