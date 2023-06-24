# Authentication Page

This project implements an authentication page where users can sign up, sign in, or reset their passwords using a refresh token. The authentication process is implemented using the [Firebase](https://firebase.google.com/) platform.

## Features

- User Sign Up: New users can create an account by providing their email address and password.
- User Sign In: Existing users can sign in to access the authenticated features.
- Password Reset: Users can request a password reset email to reset their passwords.
- Token-based Authentication: Refresh tokens are used for secure authentication and to maintain user sessions.

## Technologies Used

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Firebase](https://firebase.google.com/) - Platform for authentication, database, and hosting.

## Home Page

The home page can only be accessed by authenticated users. If an unauthenticated user tries to access it, they will be redirected to the authentication page.

## Lazy Loading with API

The project implements lazy loading functionality using a given API to fetch a large dataset. The dataset is loaded in chunks as the user scrolls or interacts with the page.

- API for lazy loading: [https://api.instantwebtools.net/v1/passenger?page=0&size=10](https://api.instantwebtools.net/v1/passenger?page=0&size=10)

## Project Hosting and Repository

The project is hosted on [GitHub Pages](https://pages.github.com/) and the repository can be found at:

- Repository: [https://github.com/your-username/your-repository](https://github.com/your-username/your-repository)
- Hosted Application: [https://your-username.github.io/your-application](https://your-username.github.io/your-application)

Feel free to explore the code and the live application!
