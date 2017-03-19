// Our amazing database

var samples = ["https://swaghack.scapp.io/data/sample_a.mp3", "https://swaghack.scapp.io/data/sample_b.mp3"];


module.change_code = 1;
'use strict';

var alexa = require('alexa-app');
var app = new alexa.app('love-vibes');


app.launch(function(request, response) {
    response.say('You again! I just found this story, what do you think? <audio src="' + samples[0] + '" />  Did you like it?').shouldEndSession(false);
});


app.error = function(exception, request, response) {
    console.log(exception)
    console.log(request);
    console.log(response);
    response.say('Sorry an error occured ' + error.message);
};

app.intent('NoIntent', {
        "slots": {},
        "utterances": [
            "no",
            "nope",
            "nah",
            "never"
        ]
    },
    function(request, response) {
        response.say('Ok. I\'ll try something different, maybe you\'ll like this: <audio src="' + samples[1] + '" />   How did you like this?').shouldEndSession(false);
    }
);

app.intent('YesIntent', {
        "slots": {},
        "utterances": [
            "yes",
            "yeah",
            "good",
            "great"
        ]
    },
    function(request, response) {
        response.say('Cool. <break time="1s" /> Hey you\'ve got a match! Now it\'s your turn to record a little answer to start up a nice and lovely conversation! Prepare.... Ready. Steady. Go!  <break time="10s"/> ').shouldEndSession(true);

    }
);







module.exports = app;
