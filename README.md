# WorldWise App

Welcome to the **WorldWise App**, an innovative application designed to help users register and track all the cities they have traveled to around the world. This app offers a real-world, practical experience by integrating advanced features like geolocation, dynamic city data fetching, and a robust navigation system using React Router. The project is built using **Vite**, a modern build tool that provides a faster and leaner development experience compared to traditional tools like Create React App.

This project was completed by me as part of the course "The Ultimate React Course 2024: React, Redux & More" created by [Jonas Schmedtmann](https://twitter.com/jonasschmedtman) on the Udemy educational platform.

## Features

## Features

- **Multi-Page Navigation**: WorldWise uses React Router to handle navigation across multiple pages, each corresponding to different URLs. Users can navigate between the homepage, product page, pricing page, and more, with the URL reflecting the current page.
- **User Authentication**: The app includes a simple, fake login system where users can log in to access the core features of the application. This showcases basic authentication and protected routes in a React app.
- **City and Country Management**: Users can add cities they’ve visited to a list, with the application automatically associating the correct country. Cities and countries can be viewed in separate sections, with the ability to delete, edit entries, and add detailed notes about their travels.
- **Interactive Map**: The app integrates a dynamic map using the geolocation API, allowing users to zoom into their current location or any city they have added to their travel list. This feature provides a visual representation of the cities visited.
- **External Data Fetching**: City details such as name, country, and relevant information are fetched from external APIs, ensuring accurate and up-to-date data.
- **Direct Wikipedia Access**: Users can access Wikipedia articles directly from the app for each city they add, providing additional context and information about their destinations.
- **Responsive Design**: The app is fully responsive, ensuring a seamless user experience across various devices, from desktops to mobile phones.
- **Loading Indicators**: The app uses spinners and loading indicators while fetching data from APIs or performing other asynchronous operations, improving user experience by providing feedback during data processing.
- **State Management with Context API**: WorldWise uses React's Context API to manage global state for cities and authentication, demonstrating an efficient way to handle state across the app without prop drilling.

### Deployment

This project has been deployed on Vercel and is accessible at the following URL:
**[WorldWise App on Vercel](https://worldwise-react-app-ten.vercel.app/)**

## System Requirements:

To run this application locally, ensure you have the following software installed on your system:

- Node.js(version 20.3.0 LTS or higher) **(https://nodejs.org/)**
- Node Package Manager(npm) **(https://www.npmjs.com/)**

### Getting Started:

Follow these steps to set up the project locally:

- Clone the repository:

Open the terminal or command prompt, navigate to your desired directory, and clone the repository from GitHub using the provided link:

**git clone https://github.com/karinatimm/worldwise-react-app.git**

- Navigate to the project directory:

**cd worldwise-app**

- Install project dependencies using npm:

**npm ci**

- Execute the following command to start working with this project locally by opening the localhost reference in the browser:

  **npm run dev**

### Quality Assurance

Linter Status: The project follows best practices and is linted using ESLint. Ensure your code adheres to the project's linting rules before pushing any changes.

### Linter status:

[![ESLint Status](https://img.shields.io/badge/ESLint-Passing-brightgreen.svg)](https://github.com/karinatimm/worldwise-react-app.git)
