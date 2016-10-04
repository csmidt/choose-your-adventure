

var planner = prompt ("Please tell us your name");
/*var triplength  = function(nights) {
	if(nights == 2) {
		alert("you have earned 200 points");
	} else if (nights == 3) {

		alert("you have earned 300 points");

	} else { "you have earned 500 points"}
}

*/

if (planner !== null) {
	alert("Thank You," + " " + planner + "!" + " " + "click OK to proceed. ");
} else {
	alert("You can start planning as a guest, click OK to proceed.");
}


var beginplan = prompt ("Are you ready to start plannig your vacation yes or no?");
if (beginplan == 'yes') {
	alert("Great! Let's get started!");
	var locale = prompt ("Do you want to go Snowboarding, Scuba Diving, or River Rafting?");
		if (locale == 'Snowboarding') {
			var whichmountain = prompt ("Jackson Hole, Breckenridge, Taos");
			alert("That place is awesome!");
			var triplength = prompt ("How many nights do you want to stay 2, 3, or 5?");
				if (triplength === 2) {
					confirm("you have earned 200 points!");
				} else if (triplength === "3") {
					confrim("you have earned 300 points!");
				} else {
					confrim("you have earned 500 points!");
				} 
		

		}else if (locale == 'Scuba Diving') {
			var whichbeach = prompt ("Aruba, Costa Rica, Puerto Rico");
				alert("That place is awesome!");
			var triplength = prompt ("How many nights do you want to stay?");
				if (triplength == 2) {
					confirm("you want to stay 2 nights?");
				} else if (triplength == 3) {
					confrim("you want to stay 3 nights?");
				} else if (triplength == 5) {
					confrim("you want to stay 5 nights?");
				} else {
					alert("that's crazy, how about 5 nights?");
				}
		}else if (locale == "River Rafting") {
			var whichriver = prompt ("Oregon, Colorado, West Virginia");
				alert("That place is awesome!");
			var triplength = prompt ("How many nights do you want to stay?");
				if (triplength == 2) {
					confirm("you want to stay 2 nights?");
				} else if (triplength == 3) {
					confrim("you want to stay 3 nights?");
				} else if (triplength == 5) {
					confrim("you want to stay 5 nights?");
				} else {
					alert("that's crazy, how about 5 nights?");
				}
		}else {
				alert("please choose from a vacation on the list - we aren't one of those fancy go where you want places.");
		 }
		
} else {
			var getemail = prompt ("Subscribe to our newsletter to get information about last minute deals and discounts");
		 		if (getemail !== '') {
					alert("Thank you for subscribing," + " " + planner + " " +" we will let you know what's up!");
			} else { 
		 			alert("You are going to miss out..."); 
		 	}
		}








        