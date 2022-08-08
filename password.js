function enterPassword() {
	var password;
	var pass1="taco19";
	var pass2="MathRules!"
	password=prompt('These math formulas have helped millions of kids ace their math tests. These are so special that Educational Links requires a password to access them. Hint: Look around this page and you may find it!','');
	if (password==pass1) {
			alert('Wrong Password! Please try again')
			document.getElementById('bottomLinks').style.display = 'block'; 
			document.getElementById('topLinks').style.display = 'none'; 
	}
	else if (password==pass2) {
			alert('Correct password! Click OK to continue')
			window.location.replace('https://docs.google.com/document/d/1Krv4xOngTEgDte9wdn0JskV1-2jHACOyD0jReradKxI/view/');
	}
	else {
		alert('Wrong Password! Please try again')
	}
};

function openHome() {
		document.getElementById('home').style.display = 'block'; 
		document.getElementById('games').style.display = 'none';
		document.getElementById('settings').style.display = 'none';
};

function openGames() {
		document.getElementById('home').style.display = 'none'; 
		document.getElementById('games').style.display = 'block';
		document.getElementById('settings').style.display = 'none';
};

function openSettings() {
		document.getElementById('home').style.display = 'none'; 
		document.getElementById('games').style.display = 'none';
		document.getElementById('settings').style.display = 'settings';
};
