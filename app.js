function populate() {
	if(quiz.isended()){
		showscores();
	}
	else{
		//show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
		
		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for(var i=0; i< choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices [i]);
		}

	ShowProgress();	
	
	}
};

function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
};

function ShowProgress(){
	var currentquestionnumber = quiz.questionindex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentquestionnumber + " of " + quiz.questions.length;
}



function showscores(){
	var gameoverhtml = "<h1>Result</h1>";
	gameoverhtml += "<h2 id='score'> Your Score: " + quiz.score + "</h2>";
	var_element = document.getElementById("quiz");
	element.innerHTML = gameoverhtml;
}

var questions = [
	new Question("Who wrote this application?", ["Nick", "Hilary", "Parker", "Respy"],"Nick"),
	new Question("What is Nick's dog's name?", ["Buddy", "Respy", "Dog", "Girl"],"Respy"),
	new Question("How are these questions populated?", ["Statically", "Dynamically", "Magically", "I Don't Know"],"Statically"),
	];
	
var quiz = new Quiz(questions);

populate();