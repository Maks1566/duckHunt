let score = document.querySelector(".score");
let sc = 0;
score.innerHTML = sc;

let random = function(arg){
    let rand = Math.round(Math.random()*arg);
    return rand;
}

let topS = 1100;
let leftS = [];

for(let i=0; i<15; i++){
	let sphere = document.createElement("div");
	document.body.appendChild(sphere);
	sphere.classList.add("sphere");
	leftS[i] = random(1600);
	sphere.style.left = leftS[i] + "px";

	sphere.onclick = function(){
		sphere.style.display = "none";
		topS = 1100;
		sc = sc + 1;
		score.innerHTML = sc;
	}
}

let sphere = document.querySelectorAll(".sphere");
let sphereInd = 0;

let fly = function(){
	topS = topS - 150;
	leftS[sphereInd] = leftS[sphereInd] + 100;
	sphere[sphereInd].style.top = topS + "px";
	sphere[sphereInd].style.left = leftS[sphereInd] + "px";
	if(topS <= 0){
		topS = 1100;
		sphereInd = sphereInd + 1;
		if(sphereInd == 15){
			stop();
		}
	}
}

let IntFly = setInterval(fly, 200);

let stop = function(){
	clearInterval(IntFly);
}