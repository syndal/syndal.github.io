function initMap() {
    var syndal = { lat: -37.8761812, lng: 145.1496024 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: syndal
    });

    var marker = new google.maps.Marker({
        position: syndal,
        map: map
    });
}

jQuery(function($) {
    var $navBar = $("#navbar");
    $navBar.sticky({ topSpacing: 0 });

    $navBar.on("click",
        ".nav-link",
        function() {
            $(".navbar-toggler", $navBar).click();
        });
});