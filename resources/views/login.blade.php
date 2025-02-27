<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TaskFlow | Login</title>
    <link rel="icon" type="image/png" href="{{ asset('/favicon.png') }}">
    @vite(['resources/css/app.css', 'resources/js/app.js', 'https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css'])
</head>

<body>
    <section class="login">
        <div class="container">
            <div class="login-form">
                <form method="POST" action="{{ route('index') }}">
                    <h1>Task<span>Flow</span></h1>

                    <input type="text" name="email" placeholder="Email Address" value="{{ old('email') }}" required autofocus autocomplete="username">
                    
                    <div class="password-field">
                        <input type="password" id="fakePassword" name="password" placeholder="Password" required autocomplete="current-password">
                        <span id="toggler-container"><i id="toggler" class="fi fi-rr-eye-crossed"></i></span>
                    </div>

                    <a class="forgot-password" href="{{ route('password.request') }}">{{ __('Forgot your password?') }}</a>

                    <div class="buttons">
                        <button type="submit" class="login-btn">{{ __('Login Now') }}</button>
                        <a class="signup-btn" href="{{ route('signup') }}">Sign Up</a>
                    </div>
                </form>
            </div>

            <img class="" src="images/login-bg.jpg" alt="">
        </div>
    </section>

    <script src="https://kit.fontawesome.com/a7da3104e3.js" crossorigin="anonymous"></script>
</body>

</html>