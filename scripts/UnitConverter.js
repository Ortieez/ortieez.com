var ang_pattern = /^[1-9]([0-9]{1,2})?([- d][0-9]{1,2}([- '][0-9]{1,2})?)?[" ]?$/;
var num_pattern = /^([1-9][0-9]*|0)([\.,][0-9]*)?$/;

function upd(result) {
    $.each(result, function(i, field) { 
		if (i.match(/^btn/)) {		// update button text
			$('.' + i.substr(3)).attr('value', field);
		} else if (i.match(/^plh/)) {	// update placeholder text
			$('.' + i.substr(3)).attr('placeholder', field)
		} else {					// update other html text
			$('#' + i).html(field);
		}
    }); 
}

$(document).ready(function () {
	// get local messages
	var lang = navigator.language.substr(0,2);
	if (! lang.match(/^en/))
		$.getJSON(lang + '.json', upd); 

	$(".dist").focus(function(e){
		$(".dist").css('background-color', '');
		var w = '#' + e.target.id;
		var v = $(w).val();
		$(".dist").val("");
		$(w).val(v);
	});
	
	$(".dist").keypress(function(e) {
		if (e.which == 13) {
			dist_convert();
		}
	});
	// convert value if convert button clicked
	$("#convertdist").click(dist_convert);
});

// distance conversion
function dist_convert() {
	var m, v;
	$(".dist").css('background-color', '');
	// convert input field to meter
	if ($("#orbit").val().length) {
		v = $("#orbit").val().replace(',', '.');
		if (! num_pattern.test(v)) {
			$("#orbit").css('background-color', 'red');
			return;
		}
		m = v * 1.0;
	} else if ($("#meter").val().length) {
		v = $("#meter").val().replace(',', '.');
		if (! num_pattern.test(v)) {
			$("#meter").css('background-color', 'red');
			return;
		}
		m = v / 2.07;
	}
	if (! m) return;
	$("#orbit").val(m.toFixed(3));
	// change meter to all others
	$("#meter").val((m * 2.07).toFixed(4));
}
