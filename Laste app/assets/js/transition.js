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

    $('#feel a').click(function() {
        $('#feel').hide(300);
        $('#witness').show(300);
    })
    $('#witness a').click(function() {
        $('#witness').hide(300);
        $('#havebeen').show(300);
    })
    $('#havebeen a').click(function() {
        $('#havebeen').hide(300);
        $('#confirmation').show(300);
    })
    $('#confirmation #yesPlease').click(function() {
        $('#confirmation').hide(300);
        $('#form').show(300);
    })
    $('#confirmation #noThanks').click(function() {
        $('#confirmation').hide(300);
        $('#done').show(300);
    })
    $('#form #sendReport').click(function() {
        $('#form').hide(300);
        $('#done').show(300);
    })
});