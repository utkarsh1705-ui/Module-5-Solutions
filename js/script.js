var $dc = {};

document.addEventListener("DOMContentLoaded", function () {
    var categories = ["Lunch", "Dinner", "Sushi", "Beverages", "Desserts"];
    var randomCategory = categories[Math.floor(Math.random() * categories.length)];

    document.querySelector('.tiles a:nth-child(2)').setAttribute("onclick", `$dc.loadMenuItems('${randomCategory}');`);
});

$dc.loadMenuItems = function (category) {
    document.getElementById("content").innerHTML = `<h2>Showing ${category} Menu</h2>`;
};
