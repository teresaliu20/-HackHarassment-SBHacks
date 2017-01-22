var comments;
var racism = ["nigg", "chink", "redneck", "gypsy", "redskin"];
var profanity = ["fuck", "ass", "shit", "bastard", "cunt", "dick", "crap", "bitch", "whore", "slut"];
var homophobia = ["fag", "dyke", "transvestite", "tranny", "sodomite", "homo"];
var sexism = ["feminazi", "femenazi", "bitch", "slut", "cunt", "whore"];

setTimeout(function(){
	comments = document.getElementsByClassName("comment-renderer-text-content");
	for(var i = 0; i < comments.length; i++) {
		if(racismBool = 1) {
			for(var j = 0; j < racism.length; j++) {
			if(comments[i].innerHTML.indexOf(racism[j]) != -1) {
				comments[i].innerHTML = "This comment was suspended because it demonstrates characteristics of online harassment.";
				comments[i].style = "color: #CE0D00; font-weight: bold";
			}
		}
		}
	}
}, 5000);