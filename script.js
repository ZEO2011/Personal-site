// skills section width increasing on scroll

let skillsSect = document.querySelector("#our-skills");
let skillsSpans = document.querySelectorAll(".the-progress span");

window.onscroll = function () {
	if (window.scrollY >= skillsSect.offsetTop - 250) {
		skillsSpans.forEach(function (span) {
			span.style.width = ++span.style.width;
		});
	}
};

// stats section number increasing on scroll

let statSect = document.querySelector(".stats");
let stats = document.querySelectorAll(".stats .box span[data-goal]");

window.onscroll = function () {
	if (window.scrollY >= statSect.offsetTop - 250) {
		let increasing = setInterval(() => {
			for (let i = 0; i <= stats.length; i++) {
				if (
					Number(stats[i].innerHTML) >=
					Number(stats[i].getAttribute("data-goal"))
				) {
				} else {
					++stats[i].innerHTML;
				}
			}
		}, 35);
	}
};
