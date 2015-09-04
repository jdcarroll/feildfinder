$('#search').click(function() {
  //<img src="http://api.wunderground.com/api/ae9eea20a89e3294/radar/q/KS/32789.gif?width=280&height=280&newmaps=1">
  var query = $('#query').val();
  console.log(query);
  $.ajax({
  url : "http://api.wunderground.com/api/ae9eea20a89e3294/geolookup/conditions/q/IA/"+ query +".json",
  dataType : "jsonp",
  success : function(parsed_json) {
	  console.log(parsed_json);
	  var location = parsed_json['location']['city'];
	  var state = parsed_json['location']['state'];
	  var temp_f = parsed_json['current_observation']['temp_f'];
	  
	  $("#content").html("Current temperature in " + location + " " + state + " is: " + temp_f + " <img src='http://api.wunderground.com/api/ae9eea20a89e3294/radar/q/KS/"+ query +".gif?width=280&height=280&newmaps=1'>");
	  }
  });
});