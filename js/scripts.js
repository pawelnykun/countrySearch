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
	}

	function showCountriesList(resp) {
		results.css('display','flex');
	  	countriesList.empty();
	  	resp.forEach(function(item) {
	  		results.find('h2').text(item.name);
	  		$('<thead><tr><th>&darr; INFORMATION &darr;</th><th>&darr; DETAILS &darr;</th></tr></thead><tbody></tbody>').appendTo(countriesList);
	  		var tbody = countriesList.find('tbody');
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
	  		$('<td>').text("Timezones: ").appendTo(tbody.find('tr').last());
	  		$('<td>').text(item.timezones).appendTo(tbody.find('tr').last());
	  		$('<tr>').appendTo(tbody);
	  		$('<td>').text("Calling Code: ").appendTo(tbody.find('tr').last());
	  		$('<td>').text(item.callingCodes).appendTo(tbody.find('tr').last());
	  		$('<tr>').appendTo(tbody);
	  		$('<td>').text("Borders: ").appendTo(tbody.find('tr').last());
	  		$('<td>').text(item.borders).appendTo(tbody.find('tr').last());
	  		$('<tr>').appendTo(tbody);
	  		$('<td>').text("Currencies: ").appendTo(tbody.find('tr').last());
	  		$('<td>').text(item.currencies).appendTo(tbody.find('tr').last());
		});
	}
});