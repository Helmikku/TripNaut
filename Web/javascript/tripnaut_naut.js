// ------------------------------------------------- //
// ------------------- FONCTIONS ------------------- //
// ------------------------------------------------- //


	function login(email,password) {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				//document.getElementById('loader').style.display = 'none';
				var response = JSON.parse(xhr.responseText);
				if (response.connected) {
					var welcome = document.createElement('p')
						welcome.appendChild(document.createTextNode('Ahoy ' + response.login + '!'));
					var user = document.getElementById('user');
						user.innerHTML = '';
						user.appendChild(welcome);
				} else {
					alert(response.error);
				}
			} else if (xhr.readyState < 4) {
				//document.getElementById('loader').style.display = 'inline';
			}
		};
		xhr.open('POST', '/api/login', true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send('email='+email+'&password='+password);
	}



// ------------------------------------------------- //
// ---------------------- NAUT --------------------- //
// ------------------------------------------------- //


	// --- INSTANCE ---
	function Naut (id,login,role,panel) {
		this.id = id;
		this.login = login;
		this.role = role;
		this.panel = panel;
	}