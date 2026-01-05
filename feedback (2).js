<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback Form</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            padding: 20px;
        }

        .form-container {
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            width: 100%;
            max-width: 500px;
        }

        .form-title {
            text-align: center;
            margin-bottom: 10px;
            color: #333;
            font-weight: 600;
            font-size: 28px;
        }

        .form-subtitle {
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-bottom: 30px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-label {
            font-weight: 500;
            color: #555;
            margin-bottom: 8px;
            font-size: 14px;
        }

        .required {
            color: #dc3545;
        }

        .form-control {
            border: 2px solid #ddd;
            padding: 10px 15px;
            border-radius: 5px;
            font-size: 14px;
            transition: all 0.3s ease;
        }

        .form-control:focus {
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
            outline: none;
        }

        .form-select {
            border: 2px solid #ddd;
            padding: 10px 15px;
            border-radius: 5px;
            font-size: 14px;
            transition: all 0.3s ease;
        }

        .form-select:focus {
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
            outline: none;
        }

        /* Red border for error */
        .form-control.is-invalid,
        .form-select.is-invalid {
            border-color: #dc3545;
        }

        /* Green border for valid */
        .form-control.is-valid,
        .form-select.is-valid {
            border-color: #28a745;
        }

        .error-message {
            color: #dc3545;
            font-size: 12px;
            margin-top: 5px;
            display: none;
        }

        .error-message.show {
            display: block;
        }

        .success-message {
            color: #28a745;
            font-size: 12px;
            margin-top: 5px;
            display: none;
        }

        .success-message.show {
            display: block;
        }

        .rating-stars {
            display: flex;
            gap: 10px;
            margin-top: 10px;
        }

        .star {
            font-size: 28px;
            cursor: pointer;
            color: #ddd;
            transition: all 0.2s ease;
        }

        .star:hover,
        .star.active {
            color: #ffc107;
            transform: scale(1.2);
        }

        .btn-submit {
            width: 100%;
            padding: 12px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 20px;
        }

        .btn-submit:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        .btn-submit:active:not(:disabled) {
            transform: translateY(0);
        }

        .btn-submit:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .btn-reset {
            width: 100%;
            padding: 10px;
            background: #6c757d;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 14px;
            cursor: pointer;
            margin-top: 10px;
            transition: all 0.3s ease;
        }

        .btn-reset:hover {
            background: #5a6268;
        }

        .result-message {
            margin-top: 20px;
            padding: 15px;
            border-radius: 5px;
            display: none;
            text-align: center;
            font-weight: 500;
        }

        .result-message.success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
            display: block;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h1 class="form-title">Feedback Form</h1>
        <p class="form-subtitle">We value your feedback! It only takes 2 minutes.</p>
        
        <form id="feedbackForm">
            <!-- Name Field -->
            <div class="form-group">
                <label for="name" class="form-label">Full Name <span class="required">*</span></label>
                <input type="text" class="form-control" id="name" placeholder="Enter your full name">
                <div class="error-message" id="nameError">Name must be at least 3 characters</div>
                <div class="success-message" id="nameSuccess">✓ Valid name</div>
            </div>

            <!-- Email Field -->
            <div class="form-group">
                <label for="email" class="form-label">Email Address <span class="required">*</span></label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email">
                <div class="error-message" id="emailError">Please enter a valid email address</div>
                <div class="success-message" id="emailSuccess">✓ Valid email</div>
            </div>

            <!-- Service/Product Dropdown -->
            <div class="form-group">
                <label for="service" class="form-label">What is your feedback about? <span class="required">*</span></label>
                <select class="form-select" id="service">
                    <option value="">-- Select an option --</option>
                    <option value="product">Product Quality</option>
                    <option value="service">Customer Service</option>
                    <option value="website">Website Experience</option>
                    <option value="delivery">Delivery Speed</option>
                    <option value="pricing">Pricing</option>
                    <option value="other">Other</option>
                </select>
                <div class="error-message" id="serviceError">Please select a category</div>
                <div class="success-message" id="serviceSuccess">✓ Category selected</div>
            </div>

            <!-- Rating Stars -->
            <div class="form-group">
                <label class="form-label">Your Rating <span class="required">*</span></label>
                <div class="rating-stars" id="ratingStars">
                    <span class="star" data-value="1">★</span>
                    <span class="star" data-value="2">★</span>
                    <span class="star" data-value="3">★</span>
                    <span class="star" data-value="4">★</span>
                    <span class="star" data-value="5">★</span>
                </div>
                <div class="error-message" id="ratingError">Please select a rating</div>
                <div class="success-message" id="ratingSuccess">✓ Rating selected</div>
                <input type="hidden" id="rating" value="">
            </div>

            <!-- Feedback Message -->
            <div class="form-group">
                <label for="message" class="form-label">Your Feedback <span class="required">*</span></label>
                <textarea class="form-control" id="message" placeholder="Share your detailed feedback (minimum 10 characters)" rows="4"></textarea>
                <div class="error-message" id="messageError">Feedback must be at least 10 characters</div>
                <div class="success-message" id="messageSuccess">✓ Valid feedback</div>
            </div>

            <!-- Suggestions (Optional) -->
            <div class="form-group">
                <label for="suggestions" class="form-label">Suggestions for Improvement <span style="color: #999; font-size: 12px;">(Optional)</span></label>
                <textarea class="form-control" id="suggestions" placeholder="Tell us how we can improve" rows="3"></textarea>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="btn-submit" id="submitBtn" disabled>Submit Feedback</button>
            <button type="reset" class="btn-reset">Clear Form</button>
        </form>

        <!-- Result Message -->
        <div class="result-message" id="resultMessage">
            ✓ Thank you! Your feedback has been submitted successfully.
        </div>
    </div>

    <script>
        // Get form elements
        const form = document.getElementById('feedbackForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const serviceInput = document.getElementById('service');
        const ratingInput = document.getElementById('rating');
        const messageInput = document.getElementById('message');
        const submitBtn = document.getElementById('submitBtn');
        const resultMessage = document.getElementById('resultMessage');
        const ratingStars = document.querySelectorAll('.star');

        // Validation functions
        function validateName() {
            const name = nameInput.value.trim();
            const isValid = name.length >= 3;
            showValidation('name', isValid);
            checkFormValidity();
            return isValid;
        }

        function validateEmail() {
            const email = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isValid = emailRegex.test(email);
            showValidation('email', isValid);
            checkFormValidity();
            return isValid;
        }

        function validateService() {
            const service = serviceInput.value;
            const isValid = service !== '';
            showValidation('service', isValid);
            checkFormValidity();
            return isValid;
        }

        function validateRating() {
            const rating = ratingInput.value;
            const isValid = rating !== '';
            showValidation('rating', isValid);
            checkFormValidity();
            return isValid;
        }

        function validateMessage() {
            const message = messageInput.value.trim();
            const isValid = message.length >= 10;
            showValidation('message', isValid);
            checkFormValidity();
            return isValid;
        }

        // Show validation feedback
        function showValidation(fieldName, isValid) {
            const input = document.getElementById(fieldName);
            const errorMsg = document.getElementById(fieldName + 'Error');
            const successMsg = document.getElementById(fieldName + 'Success');

            if (isValid) {
                input.classList.add('is-valid');
                input.classList.remove('is-invalid');
                successMsg.classList.add('show');
                errorMsg.classList.remove('show');
            } else {
                input.classList.add('is-invalid');
                input.classList.remove('is-valid');
                errorMsg.classList.add('show');
                successMsg.classList.remove('show');
            }
        }

        // Check if all required fields are valid
        function checkFormValidity() {
            const isNameValid = nameInput.value.trim().length >= 3;
            const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
            const isServiceValid = serviceInput.value !== '';
            const isRatingValid = ratingInput.value !== '';
            const isMessageValid = messageInput.value.trim().length >= 10;

            const allValid = isNameValid && isEmailValid && isServiceValid && isRatingValid && isMessageValid;
            submitBtn.disabled = !allValid;
        }

        // Real-time validation on input
        nameInput.addEventListener('input', validateName);
        emailInput.addEventListener('input', validateEmail);
        serviceInput.addEventListener('change', validateService);
        messageInput.addEventListener('input', validateMessage);

        // Star rating functionality
        ratingStars.forEach(star => {
            star.addEventListener('click', function() {
                const value = this.getAttribute('data-value');
                ratingInput.value = value;

                // Update star styling
                ratingStars.forEach(s => {
                    if (s.getAttribute('data-value') <= value) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });

                validateRating();
            });

            // Hover effect
            star.addEventListener('mouseover', function() {
                const value = this.getAttribute('data-value');
                ratingStars.forEach(s => {
                    if (s.getAttribute('data-value') <= value) {
                        s.style.color = '#ffc107';
                    } else {
                        s.style.color = '#ddd';
                    }
                });
            });
        });

        // Reset star hover
        document.getElementById('ratingStars').addEventListener('mouseout', function() {
            ratingStars.forEach(star => {
                if (star.classList.contains('active')) {
                    star.style.color = '#ffc107';
                } else {
                    star.style.color = '#ddd';
                }
            });
        });

        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isServiceValid = validateService();
            const isRatingValid = validateRating();
            const isMessageValid = validateMessage();

            if (isNameValid && isEmailValid && isServiceValid && isRatingValid && isMessageValid) {
                resultMessage.classList.add('success');
                form.reset();
                ratingInput.value = '';
                
                // Reset all field validations
                document.querySelectorAll('.form-control, .form-select').forEach(field => {
                    field.classList.remove('is-valid', 'is-invalid');
                });
                document.querySelectorAll('.success-message').forEach(msg => msg.classList.remove('show'));
                ratingStars.forEach(star => star.classList.remove('active'));
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    resultMessage.classList.remove('success');
                }, 3000);
            }
        });

        // Reset button functionality
        const resetBtn = document.querySelector('.btn-reset');
        resetBtn.addEventListener('click', function() {
            ratingInput.value = '';
            ratingStars.forEach(star => star.classList.remove('active'));
            document.querySelectorAll('.form-control, .form-select').forEach(field => {
                field.classList.remove('is-valid', 'is-invalid');
            });
            document.querySelectorAll('.error-message, .success-message').forEach(msg => msg.classList.remove('show'));
            submitBtn.disabled = true;
        });
    </script>
</body>
</html>
