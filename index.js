function getResult(mark) {
	if (mark > 100) return `your mark not a valid`;
	else if (mark >= 80) return `your mark is ${mark} & Grade is A+`;
	else if (mark >= 70) return `your mark is ${mark} & Grade is A`;
	else if (mark >= 60) return `your mark is ${mark} & Grade is A-`;
	else if (mark >= 50) return `your mark is ${mark} & Grade is B`;
	else if (mark >= 40) return `your mark is ${mark} & Grade is C`;
	else if (mark >= 33) return `your mark is ${mark} & Grade is D`;
	else if (mark < 33) return `your mark is ${mark} & Grade is F`;
	else return `your mark not a valid`;
}
let getMark = prompt('Enter your mark', 90);

document.getElementById('demo').innerHTML = getResult(getMark);
document.getElementById('demo').style.color = 'tomato';
document.getElementById('demo').style.fontSize = '20px';
