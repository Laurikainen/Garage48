$(document).ready(function () {
    $('.container').fadeIn(750);
    $(document).click(function (event) {
        event.preventDefault();
        newLocation = $(event.target).closest('a').attr('href');
        if (newLocation != undefined) {
            if ($(event.target).closest('a').attr('target') == '_blank') {
                window.open(newLocation);
            }
			else if (newLocation.startsWith('mailto:')) {
				newpage();
            }
            else if (newLocation.startsWith('#')) {
			}
			else {
                $('.container').fadeOut(250, newpage);
            }
        }
    });

    function newpage() {
        window.location = newLocation;
    }
});