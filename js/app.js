var number_of_conditions = 4;

function show_answer(option,question){
 
	var answer;

	// write conditions here
	if(option == 1){
		answer = "Google it";
	}
	else if(option == 2){
		answer = "your mom";

	}
	else if(option == 3){
		answer = "SPAGHETTI";
	
	}
	else if(option == 4){
			answer = "Only the captain knows";

	}

	if(question == "knock knock"){
		answer = "who\'s there?";
	}





	display_answer(answer);
}




