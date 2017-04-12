$(function() {
	var url = 'https://restcountries.eu/rest/v1/name/';
	var countriesList = $('#countries');
	var results = $('.results');
	$('#search').click(searchCountries);
	$('#country-name').keypress(function(e){
		switch (e.keyCode) {
        	case 13:
            	searchCountries();
            	break;
        }
	});

	function searchCountries() {
  		var countryName = $('#country-name').val();
  		if(!countryName.length) countryName = 'Poland';
  		$.ajax({
	  		url: url + countryName,
	  		method: 'GET',
	  		success: showCountriesList
	  	});
	}

	function showCountriesList(resp) {
		results.css('display','flex');
	  	countriesList.empty();
	  	resp.forEach(function(item) {

	  		var container = $('<div>');
	  		$(container).addClass('container-result');

	  		var flagImg = 'http://www.geognos.com/api/en/countries/flag/' + item.alpha2Code + '.png';
	  		$('<h2>').text(item.name).append($('<img class="flag img-responsive img-rounded" alt="flag" src=' + flagImg + '>')).appendTo(container);

	  		$('<table>').addClass('table table-bordered table-hover')
	  		.append($('<thead><tr><th>&darr; INFORMATION &darr;</th><th>&darr; DETAILS &darr;</th></tr></thead><tbody></tbody>')).appendTo(container);
	  		var tbody = container.find('tbody').last();
	  		$('<tr>').appendTo(tbody);
	  		$('<td>').text("Name: ").appendTo(tbody.find('tr'));
	  		$('<td>').text(item.name).appendTo(tbody.find('tr'));
	  		$('<tr>').appendTo(tbody);
	  		$('<td>').text("Native Name: ").appendTo(tbody.find('tr').last());
	  		$('<td>').text(item.nativeName).appendTo(tbody.find('tr').last());
	  		$('<tr>').appendTo(tbody);
	  		$('<td>').text("Code: ").appendTo(tbody.find('tr').last());
	  		$('<td>').text(item.alpha2Code + " or " + item.alpha3Code).appendTo(tbody.find('tr').last());
	  		$('<tr>').appendTo(tbody);
	  		$('<td>').text("Population: ").appendTo(tbody.find('tr').last());
	  		$('<td>').text(item.population).appendTo(tbody.find('tr').last());
	  		$('<tr>').appendTo(tbody);
	  		$('<td>').text("Capital: ").appendTo(tbody.find('tr').last());
	  		$('<td>').text(item.capital).appendTo(tbody.find('tr').last());
	  		$('<tr>').appendTo(tbody);
	  		$('<td>').text("Language: ").appendTo(tbody.find('tr').last());
	  		$('<td>').text(item.languages).appendTo(tbody.find('tr').last());
	  		$('<tr>').appendTo(tbody);
	  		$('<td>').text("Region: ").appendTo(tbody.find('tr').last());
	  		$('<td>').text(item.region).appendTo(tbody.find('tr').last());
	  		$('<tr>').appendTo(tbody);
	  		$('<td>').text("Subregion: ").appendTo(tbody.find('tr').last());
	  		$('<td>').text(item.subregion).appendTo(tbody.find('tr').last());
	  		$('<tr>').appendTo(tbody);
	  		$('<td>').text("Calling Code: ").appendTo(tbody.find('tr').last());
	  		$('<td>').text(item.callingCodes).appendTo(tbody.find('tr').last());
	  		$('<tr>').appendTo(tbody);
	  		$('<td>').text("Borders: ").appendTo(tbody.find('tr').last());
	  		$('<td>').text(item.borders).appendTo(tbody.find('tr').last());
	  		$('<tr>').appendTo(tbody);
	  		$('<td>').text("Currencies: ").appendTo(tbody.find('tr').last());
	  		$('<td>').text(item.currencies).appendTo(tbody.find('tr').last());

	  		$(container).appendTo(countriesList).find('table').last().hide();
	  		$(container).find('h2').last().click(function() {
				$(container).find('table').slideToggle();
			});
		});
	}
});