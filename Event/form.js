        // Get references to the input fields and the submit button
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const genderInputs = document.getElementsByName("gender");
        const countrySelect = document.getElementById("country");
        const interestInputs = document.getElementsByName("interest");
        const submitButton = document.getElementById("submitButton");

        // Event handling for the "onchange" event
        nameInput.onchange = function() {
            console.log("Name changed to: ", nameInput.value);
        };

        emailInput.onchange = function() {
            console.log("Email changed to: ", emailInput.value);
        };

        // Event handling for the "onfocus" event
        passwordInput.onfocus = function() {
            console.log("Password input is focused.");
        };

        // Event handling for the "onchange" event for gender
        genderInputs.forEach(function(input) {
            input.onchange = function() {
                console.log("Gender changed to: ", input.value);
            };
        });

        // Event handling for the "onchange" event for country
        countrySelect.onchange = function() {
            console.log("Country changed to: ", countrySelect.value);
        };

        // Event handling for the "onclick" event for interests
        interestInputs.forEach(function(input) {
            input.onclick = function() {
                console.log(input.value, " checkbox ", input.checked ? "checked" : "unchecked");
            };
        });

        // Event handling for the "onclick" event for the submit button
        submitButton.onclick = function() {
            console.log("Form submitted!");
            console.log("Name: ", nameInput.value);
            console.log("Email: ", emailInput.value);
            console.log("Password: ", passwordInput.value);
            console.log("Gender: ", document.querySelector('input[name="gender"]:checked').value);
            console.log("Country: ", countrySelect.value);

            const selectedInterests = Array.from(document.querySelectorAll('input[name="interest"]:checked'))
                .map(input => input.value);
            console.log("Interests: ", selectedInterests);
            // You can perform further actions here, like form validation and submission.
        };