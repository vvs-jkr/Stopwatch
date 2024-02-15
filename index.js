const stopWatch = document.querySelector(".stopwatch");
const handles = document.querySelectorAll(".clock .handle .pointer");

const resetButton = document.querySelector(".button-left");
resetButton.addEventListener("click", () => resetTimer());

const startstopButton = document.querySelector(".button-right");
startstopButton.addEventListener("click", () => startstopTimer());

let active = false;

startstopTimer();

function startstopTimer() {
	if (!active) {
		active = true;
		stopWatch.classList.add("running");
	} else {
		active = false;
		stopWatch.classList.remove("running");
	}
}

function resetTimer() {
	active = false;
	stopWatch.classList.remove("running");
	handles.forEach((handle) => {
		handle.style.animation = "none";
		handle.offsetHeight;
		handle.style.animation = null;
	});
}
