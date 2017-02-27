$(function() {
	var url = 'https://restcountries.eu/rest/v1/name/';
	var countriesList = $('#countries');
	var results = $('.results');
	$('#search').click(searchCountries);

	function searchCountries() {
  		var countryName = $('#country-name').val();
  		if(!countryName.length) countryName = 'Poland';
  		$.ajax({
	  		url: url + countryName,
	  		method: 'GET',
	  		success: showCountriesList
	  	});
	  	results.css("display", "flex");
	}

	function showCountriesList(resp) {
	  	countriesList.empty();
	  	var tbody = countriesList.find('<tbody>');
	  	resp.forEach(function(item){
	  		$('<tr>').appendTo(tbody);
	  		$('<td>').text("Name: ").appendTo(tbody);
		   	/*$('<li>').text("Country: " + item.name).appendTo(countriesList);
		   	$('<li>').text("Native Name: " + item.nativeName).appendTo(countriesList);
		   	$('<li>').text("Code: " + item.alpha2Code + " or " + item.alpha3Code).appendTo(countriesList);
		   	$('<li>').text("Population: " + item.population).appendTo(countriesList);
		   	$('<li>').text("Capital: " + item.capital).appendTo(countriesList);
		   	$('<li>').text("Language: " + item.languages).appendTo(countriesList);
		   	$('<li>').text("Region: " + item.region).appendTo(countriesList);
		   	$('<li>').text("Subregion: " + item.subregion).appendTo(countriesList);
		   	$('<li>').text("Timezones: ").appendTo(countriesList);
		   	for( var i = 0; i < item.timezones.length; i++ ) {
		   		countriesList.find('li:last-of-type').append(" " + item.timezones[i]);
		   	}
		   	$('<li>').text("Calling Code: " + item.callingCodes).appendTo(countriesList);
		   	$('<li>').text("Borders: " + item.borders).appendTo(countriesList);
		   	$('<li>').text("Currencies: " + item.currencies).appendTo(countriesList);*/
		});
	}
});