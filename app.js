
window.onload = (function() {

var office = ["Michael Scott", "Dwight Schrute", "Jim Halpert", "Creed Bratton", "Stanley Hudson" ];
// $("#buttons").append(office);
var authKey =  "YsohIxnEqrKiWeq8gEndUXsWFjWLN0m1&limit=5"

$('#buttons-view').on("click", ".character", function() {
		console.log("click");
	var character = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=YsohIxnEqrKiWeq8gEndUXsWFjWLN0m1&limit=5"

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		var results = response.data;
		console.log(results);
		for (var i = 0; i< results.length; i++) {
			// $("#gifs-appear-here").empty(); trying to get a new set of 5 images each time you click but not working
			var gifDiv = $("<div class = 'item'>")
			var personImage = $("<img class='gif'>");
			personImage.attr("src", results[i].images.fixed_height.url);
			personImage.attr("data-still", results[i].images.fixed_height_still.url);
			gifDiv.prepend(personImage);
			$("#gifs-appear-here").prepend(gifDiv);
		}
		
//another way to do it 
// response.data.map(result=>$('#gifs-appear-here').prepend(`
// 	<div class= "item">
// 		<img src="${result.images.fixed_height.url}"/>
// 		<p>Rating: ${result.rating}</p>
// 	</div>
// 	`)
});


})
function renderButton() {

	$("#buttons-view").empty();

	for (var i =0; i < office.length; i++) {
		var a = $("<button>");
		a.addClass("character");
		a.attr("data-name", office[i]);
		a.text(office[i]);
		$("#buttons-view").append(a);
	}

}

$("#add-character").on("click", function(event) {
	console.log("click");
	event.preventDefault();
	var character = $("#character-input").val().trim();
	office.push(character);
	renderButton();
});

$("#gifs-appear-here").on("click", ".gif", function(event) {
	console.log("click");
 var still = $(this).attr("data-still");
 $(this).attr("src", still);
})
renderButton();
})