# Project Title - Travel Planner
This project is a responsive web application built with React^18 and Next Js^14 written in TypeScript. Using which a user can create and account after which he will be able to login to the application, which redirects to a screen where user's can select the destination country and the date range to see the proposed destination list and airport suggestions in the selected country.

## Public URL
https://yellow-tree-01351181e.5.azurestaticapps.net

## Technologies Used
**React**: React Js 18.

**Next Js**: Next.js 14.

**TypeScript**: A strict syntactical superset of JavaScript, adding optional static typing.

**Jest**: Jest is a JavaScript testing framework designed for unit testing.

**NextAuth.js**: NextAuth.js is a complete open-source authentication solution for Next.js applications.

**Tailwindcss**: Tailwind CSS is an open-source CSS framework.

**Backend**: Next Js

**Database**: PostgreSQL, database deployed in supabase

**Frontend**: React Js, Next Js

**API**: RAPID API's

**ORM**: Prisma

**Cloud**: Deployed using Azure Static Web App, automated using GitHub Actions.

## Open source APIs Used
1. **Country List**: travel-info-api.p.rapidapi.com
2. **Destination List**: vacations-details-your-ultimate-guide.p.rapidapi.com
3. **Flights**: hotels-com-provider.p.rapidapi.com

## Project Structure
This project is designed with a user-friendly interface and consists of several key components

1. **Sign Up Page**: Self registation page for the user.
2. **Login Page**: Is the entry point of the application. Login using Username and Password.
3. **Home Page**: Screen where user can select the country from the dropdown and select the date range to see the suggested places to   
    travel along with airports available in the selected country.

## Key Features
1. **NextAuth.js**: Login and authenticate using Next Auth.
2. **Reusable Components, Hooks**: The project is structured to promote reusability, with common functionality extracted into reusable  
    components and hooks.
3. **Password Encyption**: User password encrypted and saved in DB using 'bcrypt' library.
4. **CI/CD**: Implemented using Azure Static Web Apps and GitHub Actions.
5. **Responsive design**: Using Tailwindcss.
6. **Microservices Architecture**: Using Country List API, Destination List API and Flights API.
7. **Unit test**: Used Jest for implementing unit tests on CI/CD.

## Testing
Unit testing is configure using **Jest** which is a JavaScript unit testing framework.

## Running the Project Locally
To run the project locally:

1. Application is publicly accesssible at https://yellow-tree-01351181e.5.azurestaticapps.net
2. Clone the repository to your local machine.
3. Navigate to the project directory in the terminal.
4. Run **npm install** to install the project dependencies.
5. Run **npm run dev** to start the frontend development server. 
6. Open 'http://localhost:3000/' and click 'Sign Up' button.
7. In Sign Up screen, provide username, email id and password and click Sign up to register the email id.
8. Once registration is successfull will be redirected to 'http://localhost:3000/sign-in' URL where user can login with the email and 
    password. Once login is successfull user will be redirected to 'http://localhost:3000/trip-planner' screen.
9. Run unit tests using **npm run test** from the root of the project.