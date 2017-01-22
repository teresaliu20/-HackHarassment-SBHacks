var comments;
var buzzword = "is";

setTimeout(function(){
	comments = document.getElementsByClassName("comment-renderer-text-content");
	for(var i = 0; i < comments.length; i++) {
		if(comments[i].innerHTML.indexOf(buzzword) != -1) {
			comments[i].innerHTML = "This comment was suspended because it demonstrates characteristics of online harassment.";
			comments[i].style = "color: #CE0D00; font-weight: bold";
		}
	}
}, 10000);