'use strict';

 

const request = require('request');

const fs = require("fs");

 

const requestVoiceFile = fs.readFileSync('./fixed.wav');

 

 

const subscriptionKey = '79b1065493444db498eabd2b0ba95b3d';

const identificationProfileId = '4664103e-fdf5-4bc3-ad08-09723004c72e';

// const fileName='smina.wav';

// const requestVoiceFile = readFile("./" + fileName)

 

//const uriBase = 'https://caliberspeaker.cognitiveservices.azure.com/spid/v1.0/identify';

const uriBase = 'https://caliberspeaker.cognitiveservices.azure.com/spid/v1.0/identify?identificationProfileIds=' + identificationProfileId;

 

const options = {

    uri: uriBase,

    body: requestVoiceFile,

    headers: {

        //'Content-Type': 'application/json',

        // "Content-Type": "application/octet-stream",

        'Content-Type': 'audio/wav',

       'Ocp-Apim-Subscription-Key': subscriptionKey

    }

};

 

request.post(options, (error, response, body) => {

    if (error) {

        console.log('Error: ', error);

        return;

    }

    //let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
	console.log('',response);
    console.log('JSON Response\n');

    //console.log(jsonResponse);

});