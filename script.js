      const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const submitBtn = document.getElementById("submitBtn");

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");

        function validateName() {
            if (nameInput.value.trim() === "") {
                nameError.textContent = "Name cannot be empty";
                return false;
            } else {
                nameError.textContent = "";
                return true;
            }
        }

        function validateEmail() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value)) {
                emailError.textContent = "Enter a valid email address";
                return false;
            } else {
                emailError.textContent = "";
                return true;
            }
        }

        function validatePassword() {
            if (passwordInput.value.length < 6) {
                passwordError.textContent = "Password must be at least 6 characters";
                return false;
            } else {
                passwordError.textContent = "";
                return true;
            }
        }

        function validateForm() {
            const isValid =
                validateName() &&
                validateEmail() &&
                validatePassword();

            submitBtn.disabled = !isValid;
            submitBtn.classList.toggle("enabled", isValid);
        }

        nameInput.addEventListener("input", validateForm);
        emailInput.addEventListener("input", validateForm);
        passwordInput.addEventListener("input", validateForm);

        document.getElementById("registrationForm").addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Registration Successful!");
        });
