function openGame(gameURL) {
	var win = window.open();
	win.document.body.style.margin = "0";
	win.document.body.style.height = "100vh";
	var iframe = win.document.createElement("iframe");
	iframe.style.width = "100%";
	iframe.style.height = "100%";
	iframe.style.border = "none";
	iframe.src = gameURL;
	iframe.style.margin = "0";
	win.document.body.appendChild(iframe);
};
