
# MOGANO App
---
**The MOGANO App** is a web application built using React.js and Bootstrap. This application includes features such as user authentication, a navigation bar which includes a Home page, Contact Us section, and a custom 404 error page. The application makes use of ErrorBoundary, moreover it also uses Local Storage and React hook form to validate in the sign-in page. 

## Table of Contents
1.Getting Started
2. Features
3. Usage
4. Dependencies
5. File Structure

## Getting Started
To get the project up and running on your local machine, follow these steps:

1 Clone the repository.
2. Navigate to the project directory.
3. $yarn install run 
4. #yarn run start

## Features: 

User Authentication
* The Signin component enables users to authenticate themselves using a username, email, and password. Local storage is utilised to store user authentication data.

Home Page
* The Home component displays user information after successful authentication. It retrieves user data from local storage and dynamically populates the user's username and email. The home page includes a navigation bar.

Contact Us Section
* The Contact component provides users with contact information to reach out to the application administrators. It includes details such as the address, phone number, and email address.

Custom 404 Error Page
* The FourOFour component displays a custom 404 error page for any invalid routes within the application.  

Error Boundary
* The ErrorBoundary component is implemented to handle any errors that may occur within the application. It provides a fallback UI to enhance the user experience in case of errors.

Usage
* After launching the application, users can navigate through the various sections using the provided navigation bar. The navigation bar includes links to the Home, Sign-in, and Contact Us pages. Users can log out using the "LOGOUT" button available in the navigation bar.

## Dependencies
**The MOGANO App** utilises the following dependencies:

1. React
2. React Router DOM
3. Bootstrap
4. FontAwesome
5. React Hook Form
Make sure these dependencies are installed in your environment before running the application.

## File Structure
The project file structure is organised as follows:

1. App.js: Root component that defines the application's routes.
2. Signin.js: Component handling user authentication.
3. Home.js: Component displaying user information after authentication.
4. Contact.js: Component displaying contact information.
5. 404.js: Component rendering the custom 404 error page.
6. ErrorBoundary.js: Component providing error boundary functionality.
index.js: Entry point of the application.
7. NavbarComponent.js: Component defining the navigation bar.
8. Various CSS files: Styling files for different components.

