function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Both fields must be filled out");
        return false;
    }
	
	
	
	// Hardcoded users (for demonstration purposes)
            var hardcodedUsers = [
                { username: "avinashadapa2000@gmail.com", password: "Avinash" },
                { username: "jane@gmail.com", password: "Jane" },
                { username: "jack@gmail.com", password: "Jack" },
				{ username: "jill@gmail.com", password: "Jill" }
            ];

            // Check if the entered credentials match any hardcoded user
            var user = hardcodedUsers.find(user => user.username === username && user.password === password);

            if (user) {
                alert("Login successful!");
                return true;
            } else {
                alert("Invalid username or password.");
                return false;
            }
}
