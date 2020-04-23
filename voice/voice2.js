    var AudioRecorder = require('node-audiorecorder');
    var fs = require('fs');
    

    /******************************************************************************
    * Configuring the Recording
    *******************************************************************************/
    // Options is an optional parameter for the constructor call.
    // If an option is not given the default value, as seen below, will be used.
    const options = {
        program: 'sox',     // Which program to use, either `arecord`, `rec`, or `sox`.
        //device: null,       // Recording device to use.

        bits: 16,           // Sample size. (only for `rec` and `sox`)
        channels: 1,        // Channel count.
        encoding: 'signed-integer',  // Encoding type. (only for `rec` and `sox`)
        rate: 16000,        // Sample rate.
        type: 'wav',        // Format type.

        // Following options only available when using `rec` or `sox`.
        silence: 5,         // Duration of silence in seconds before it stops recording.
        keepSilence: true   // Keep the silence in the recording.
      };

    const logger = console;

    /******************************************************************************
    * Create Streams
    *******************************************************************************/
	//delete the old recording
		fs.stat('./test.wav', function (err, stats) {
			console.log(stats);//here we got all information of file in stats variable

		   if (err) {
			   return console.error(err);
		   }

		   fs.unlink('./test.wav',function(err){
				if(err) return console.log(err);
				console.log('file deleted successfully');
		   });  
		});
		fs.stat('./fixed.wav', function (err, stats) {
			console.log(stats);//here we got all information of file in stats variable

		   if (err) {
			   return console.error(err);
		   }

		   fs.unlink('./fixed.wav',function(err){
				if(err) return console.log(err);
				console.log('file deleted successfully');
		   });  
		});
	
    // Create an instance.
	setTimeout(function() {
		console.log('a');
    let audioRecorder = new AudioRecorder(options, logger);
	console.log('b');
    // This line is for saving the file locally as well (Strongly encouraged for testing)
    const fileStream = fs.createWriteStream("test.wav", { encoding: 'binary' });
	console.log('c');
	audioRecorder.start().stream().pipe(fileStream);
	console.log('d');
	//create timeout (so after 10 seconds it stops feel free to remove this)
    setTimeout(function() {
		console.log('e');
        audioRecorder.stop();
	}, 60000);
	setTimeout(function() {const { exec } = require("child_process");
	exec("sox --ignore-length test.wav fixed.wav", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
	});},60500)
	console.log('f');
	}, 5500);
	