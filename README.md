# CarDealerApp

CarDealerApp is a front-end application developed as part of a technical test for a Front-End Engineer position. The project is built with Next.js and Tailwind CSS, showcasing the ability to develop efficient and scalable web applications.

## Live Demo

You can view the live demo of the application on Vercel:

[CarDealerAppDemo](https://car-dealer-app-blue.vercel.app/)

### Run Locally

If you prefer, you can run the project locally on your machine. Follow these steps to get started:

### Prerequisites

Make sure you have the following installed:

- Node.js: You can download it from [nodejs.org](https://nodejs.org/).
- npm (Node Package Manager): It comes with Node.js, so once you have Node.js installed, you'll have npm as well.
Steps to Run the Project Locally

1. Clone the Repository: Start by cloning the repository to your local machine. Open your terminal and run:

```bash
git clone https://github.com/EngelsAS/car-dealer-app
```

2. Navigate to the Project Folder: After cloning the repository, navigate to the project folder:

```bash
cd car-dealer-app
```

3. Install Dependencies: Install all the necessary dependencies using npm (or yarn if you prefer):

```bash
npm install
```

<blockquote>Or, if you're using yarn:</blockquote> 

```bash
yarn install
```

4. Run the Development Server: Once the dependencies are installed, you can start the development server:

```bash
npm run dev
```

<blockquote>Or, if you're using yarn:</blockquote> 

```bash
yarn dev
```

5. Open the Application: After the server is running, open your browser and go to:

```bash
http://localhost:3000
```

#### You should see the application running locally!

## Technical Test Requirements

1. **Implement generateStaticParams on the Results Page:** The generateStaticParams function was successfully implemented in the results page. This function allows for static generation of dynamic routes based on parameters.
   
2. **Implement Suspense Component:** The implementation of the Suspense component was done successfully; however, I’d like to highlight that I didn’t find it necessary to explicitly use React’s Suspense component. This is because Next.js already handles this functionality when using the App Router. Next.js internally uses route handlers that implement the Suspense API under the hood, such as the loading route handler. This handler displays a fallback component while an asynchronous component is loading, providing the same behavior that React's Suspense component would. This built-in behavior was sufficient to meet the project’s objectives.

3. **Implement UI with Tailwind CSS:** The user interface (UI) was implemented using Tailwind CSS, which provided a flexible and efficient way to build responsive designs.

4. **Add Configuration and Documentation: ** I added configuration for ESLint and Prettier to maintain code quality and consistency across the project. The .eslintrc.config.mjs and .prettierrc.json files were configured according to the project’s standards.

5. **Extra: Deploy with GitHub Actions:** The project was successfully deployed using GitHub Actions. The CI/CD pipeline was configured to automate the deployment process, ensuring that every push to the repository triggers the deployment to the desired environment.

6. **Extra: Implemented a Simple MVVM Architecture** I implemented a simple and streamlined MVVM (Model-View-ViewModel) architecture to separate the business logic from the view of the app. This approach enhances the maintainability of the application by clearly distinguishing between the user interface and the core logic. Additionally, this architecture facilitates the development of unit tests, should they be required in the future, by making it easier to mock the view and test the business logic independently from the UI. This structure ensures that the application is more modular, scalable, and testable.
