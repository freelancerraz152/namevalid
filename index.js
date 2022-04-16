// fullname
let fullName = prompt('write your Full Name',"md raz");
let words = fullName.split(' ');
words = words.map(function (value) {
	return value.charAt(0).toUpperCase() + value.slice(1);
});
console.log(words);

fullName = words.join(' ');

document.getElementById('demo').innerHTML = fullName;
document.getElementById('demo').style.color = '#9acd32';
