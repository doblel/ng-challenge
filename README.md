# Web Coding Challenge
The goal of this coding challenge is to showcase your knowledge and show us how you work on a real-life situation.

## Description
You need to implement a single page application (SPA) with a sign-up form.

#### Business requirements
- Form should allow users to enter first name, last name, email and password.
- All fields are required.
- Email should be validated in the way you consider it more appropriate
- Password validation:
    + Should be a minimun of eight characters.
    + Should contain lower and uper case characters.
    + Should not contain user's first or last name.
- The form should send a POST request to https://demo-api.now.sh/users. The request body example:
    ```javascript
    {
        firstName: "Thomas",
        lastName: "Shelby",
        email: "thomas@shelby.co.uk"
    } 
    ```

#### Technical requirements
- Use the latest version of Angular with Typescript.
- Make solution available on GitHub, GitLab or Bitbucket.


## Running the application
Since it is builded over the latest Angular version to run the application you are gonna need Node/NPM installed and the latest version of the angular CLI.

Once you have the repo cloned, navigate to the project's root folder and install all it's dependencies with the command ```npm i```. When it finish start the application in development mode with ```ng serve``` or in production mode with ```ng build && npm run serve:production```.

## Screenshots

### Home page
![image](https://user-images.githubusercontent.com/12605000/164114061-7a37f95f-3e8a-4afa-a7a3-6ad57ae5187b.png)
### Register page
![image](https://user-images.githubusercontent.com/12605000/164114114-4a5dbe97-d477-4e5e-a099-e878c39c3506.png)
#### Field validations
![image](https://user-images.githubusercontent.com/12605000/164114312-8837439e-25ae-4444-b3f2-d6a8928f61a2.png)

### Mobile Home page
![image](https://user-images.githubusercontent.com/12605000/164570779-c2f9dcf9-f593-4c13-b3c4-d9c051b53bc2.png)
### Mobile Register page
![image](https://user-images.githubusercontent.com/12605000/164570805-b9fa7ea8-055a-4d1a-a666-b68829fbfdfd.png)

### Mobile field validations
![image](https://user-images.githubusercontent.com/12605000/164570746-2a7ffe39-1321-46d7-852f-a5e13fd8eb84.png)

## Code coverage with UT
![image](https://user-images.githubusercontent.com/12605000/164622422-943e81fb-c6b2-414d-a9c0-ba73cbb26778.png)



## To do
- [x] ~~Add code coverage with unit testing.~~
- [x] ~~Improve code coverage.~~
- [x] ~~Create FormFieldComponent to reduce form boilerplate.~~
- [ ] Improve user feedback with pretty toastr notifications.
- [x] ~~Loading spinner and disable fields when request in progress.~~
- [ ] Add error handling.
