// var radios = document.getElementsByTagName('input');
// var buo = document.getElementsByTagName('span');

// function css(mn) {
// 	var nz=Number(qno.innerHTML)+6;
// if ((radios[0].checked || radios[1].checked || radios[2].checked || radios[3].checked)===true) {
// 	alert("answered the question.");
// 	console.log(mn,"mkmk");
// 	buo[nz].classList.remove("b4");
// 	buo[nz].classList.remove("b2");
// 	buo[nz].classList.remove("b3");

// 	buo[nz].classList.add("b1");
// }
// else if ((radios[0].checked && radios[1].checked && radios[2].checked && radios[3].checked)===false) {
// 	alert("not answered the question.");
// 	buo[nz].classList.remove("b4");
// 	buo[nz].classList.add("b2");
// }
// }

// function rew() {
// 	var nx=Number(qno.innerHTML)+6;
// 	if (radios[0].checked || radios[1].checked || radios[2].checked || radios[3].checked) {
// 		alert(nx,"answered the question, but marked it for review.");
// 	buo[nx].classList.remove("b4");
// 	buo[nx].classList.add("b6");
// 	disqes(clicks++);

// 	}
// else{ alert("NOT ans the ques,but marked the ques for review.");
//     buo[nx].classList.remove("b4");
// 	buo[nx].classList.add("b3");

// }
// }
	var radios = document.getElementsByTagName('input');
var buo = document.getElementsByTagName('span');

function css(mn) {
	var nz=Number(qno.innerHTML)+6;
if ((radios[0].checked || radios[1].checked || radios[2].checked || radios[3].checked)===true) {
	alert("answered the question.");

	buo[nz].classList.remove("b4");
	buo[nz].classList.remove("b2");
	buo[nz].classList.remove("b3");
	
	buo[nz].classList.add("b1");
}
else if ((radios[0].checked && radios[1].checked && radios[2].checked && radios[3].checked)===false) {
	alert("not answered the question.");
	buo[nz].classList.remove("b4");
	buo[nz].classList.add("b2");
}
}

function rew() {
	var nx=Number(qno.innerHTML)+6;
	if (radios[0].checked || radios[1].checked || radios[2].checked || radios[3].checked) {
		alert(nx,"answered the question, but marked it for review.");
	buo[nx].classList.remove("b4");
	var ml="no" + (clicks-1);
	if (inda.hasOwnProperty(ml)===false) {buo[nx].classList.add("b6");alert("add b6");}
	else {buo[nx].classList.remove("b6");alert("removebbb b6");}
	
	disqes(clicks++);

	}
else{ alert("NOT ans the ques,but marked the ques for review.");
    buo[nx].classList.remove("b4");
	buo[nx].classList.add("b3");

}
}



	 // if (qz="pln" && inda.hasOwnProperty(ml)) {
		 	
		//  }
		 