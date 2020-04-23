var location = 'https://caliberspeaker.cognitiveservices.azure.com/spid/v1.0/operations/b9b2bff8-4430-401a-ab52-845ac90c7eab';

var enrolledInterval;

// hit the endpoint every few seconds
enrolledInterval = setInterval(function() {
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var request =  new XMLHttpRequest();
  request.open("GET", location, true);
  request.setRequestHeader('Content-Type','multipart/form-data');

  // your cognitive services key goes in here
  request.setRequestHeader('Ocp-Apim-Subscription-Key', '79b1065493444db498eabd2b0ba95b3d');
  
  request.onload =  function()
  {
    var json = JSON.parse(request.responseText);
	console.log(json)
    if (json.status ==  'succeeded')
     //&& json.processingResult.enrollmentStatus ==  'Enrolled')
    {
      // Woohoo! The audio was enrolled successfully!
      // stop polling
      clearInterval(enrolledInterval);
      console.log('enrollment complete!');
    }
  };
request.send();
}, 4000); // repeat every 4 seconds