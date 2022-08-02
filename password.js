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
	
	/*function createCookie(name, value, days) {
	    var expires;
	    if (days) {
	        var date = new Date();
	        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	        expires = "; expires=" + date.toGMTString();
	    }
	    else {
	        expires = "";
	    }
	    document.cookie = name + "=" + value + expires + "; path=/";
	}
	
	function getCookie(c_name) {
	    if (document.cookie.length > 0) {
	        c_start = document.cookie.indexOf(c_name + "=");
	        if (c_start != -1) {
	            c_start = c_start + c_name.length + 1;
	            c_end = document.cookie.indexOf(";", c_start);
	            if (c_end == -1) {
	                c_end = document.cookie.length;
	            }
	            return unescape(document.cookie.substring(c_start, c_end));
	        }
	    }
	    return "";
	}*/