var comments, rBool, pBool, hBool, sBool, vBool;
var racism = ["nigg", "chink", "redneck", "gypsy", "redskin"];
var profanity = ["fuck", "ass", "shit", "bastard", "cunt", "dick", "crap", "bitch", "whore", "slut", "hoe", "retard", "inbred"];
var homophobia = ["fag", "dyke", "transvestite", "tranny", "sodomite", "homo"];
var sexism = ["feminazi", "femenazi", "bitch", "slut", "cunt", "whore", "hoe"];
var violence = ["kill", "death", "blood", "flesh", "gore"];

rBool = 1;
pBool = 1;
hBool = 1;
sBool = 1;
vBool = 1;

setInterval(function(){
	comments = document.getElementsByClassName("comment-renderer-text-content");
	var numCensored = 0;
	for(var i = 0; i < comments.length; i++) {
		var censoredYet = 0;
		if(rBool == 1) {
			for(var j = 0; j < racism.length; j++) {
				if(comments[i].innerHTML.toLowerCase().indexOf(racism[j]) != -1) {
					censoredYet = 1;
					comments[i].innerHTML = "This comment was suspended because it was deemed racist. Found a variation of: \"" + racism[j] + "\"";
					comments[i].style = "color: #CE0D00; font-weight: bold";
				}
			}
		}
		if(pBool == 1) {
			for(var j = 0; j < profanity.length; j++) {
				if(comments[i].innerHTML.toLowerCase().indexOf(profanity[j]) != -1) {
					censoredYet = 1;
					comments[i].innerHTML = "This comment was suspended because it was deemed profane. Found a variation of: \"" + profanity[j] + "\"";
					comments[i].style = "color: #CE0D00; font-weight: bold";
				}
			}
		}
		if(hBool == 1) {
			for(var j = 0; j < homophobia.length; j++) {
				if(comments[i].innerHTML.toLowerCase().indexOf(homophobia[j]) != -1) {
					censoredYet = 1;
					comments[i].innerHTML = "This comment was suspended because it was deemed homophobic. Found a variation of: \"" + homophobia[j] + "\"";
					comments[i].style = "color: #CE0D00; font-weight: bold";
				}
			}
		}
		if(sBool == 1) {
			for(var j = 0; j < sexism.length; j++) {
				if(comments[i].innerHTML.toLowerCase().indexOf(sexism[j]) != -1) {
					censoredYet = 1;
					comments[i].innerHTML = "This comment was suspended because it was deemed sexist. Found a variation of: \"" + sexism[j] + "\"";
					comments[i].style = "color: #CE0D00; font-weight: bold";
				}
			}
		}
		if(vBool == 1) {
			for(var j = 0; j < violence.length; j++) {
				if(comments[i].innerHTML.toLowerCase().indexOf(violence[j]) != -1) {
					censoredYet = 1;
					comments[i].innerHTML = "This comment was suspended because it was deemed violent. Found a variation of: \"" + violence[j] + "\"";
					comments[i].style = "color: #CE0D00; font-weight: bold";
				}
			}
		}
		if(censoredYet == 1) {
			numCensored++;
		}
	}
	if(numCensored != 0) {
		document.title = "CENSORED: " + numCensored;
	}
}, 2000);