This is a Todo List Frontend Application built using React (with TypeScript) and CSS for styling. The application allows users to:
a) Add tasks by clicking a "+" button.
b) Mark tasks as completed using checkboxes.
c) Track the number of completed tasks.
d) Delete or edit tasks.
e) View a clean and attractive UI.

Features:

a) Add Tasks:
Click the "+" button to add a new task.
Enter the task name in the input field and click "Save".

b) Mark Tasks as Completed:
Click the checkbox next to a task to mark it as completed.
The completed task count updates dynamically.

c) Delete Tasks:
Click the trash icon to delete a task.

d) Edit Tasks:
Click the edit icon to update the task name.


Technologies Used :
React: JavaScript library for building the user interface.
TypeScript: Adds static typing to JavaScript for better code quality.
CSS: Used for styling the application.
Font Awesome: Icons for delete, edit, and checkmark.

Steps to Build the Project:

1. Set Up the Project
Use create-react-app with the TypeScript template:
npx create-react-app todo-list --template typescript
cd todo-list

Install Font Awesome for icons:
npm install --save @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons

2. Directory Structure :
todo-list/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TodoList.tsx
│   │   ├── Task.tsx
│   ├── styles/
│   │   ├── App.css
│   ├── App.tsx
│   ├── index.tsx
│   └── react-app-env.d.ts
├── package.json
├── tsconfig.json
└── README.md


3. Code Files:
TodoList.tsx: Main component for managing tasks and state.
Task.tsx: Component for individual tasks (checkbox, edit, delete).
App.css: Styles for the Todo List.


4. Run the Application:
Start the development server: npm start
Open the app in your browser at http://localhost:3000.




UNIT TESTING USING JEST : 

Technologies Used :
Jest: JavaScript testing framework.
React Testing Library: Library for testing React components.
TypeScript: Adds static typing to JavaScript for better code quality.

Steps to Set Up Unit Testing :
1. Install Required Dependencies
Jest and React Testing Library are typically included with Create React App. If not, install them:
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest

2. Update package.json for Jest Configuration
Ensure your package.json has the following Jest configuration:
"jest": {
  "testEnvironment": "jsdom",
  "setupFilesAfterEnv": ["<rootDir>/src/setupTests.ts"]
}

3. Create a setupTests.ts File
Create a setupTests.ts file in the src directory to import @testing-library/jest-dom:

typescript
// src/setupTests.ts
import '@testing-library/jest-dom';

4. Directory Structure for Tests
Organize your tests in a __tests__ folder inside the components directory:

todo-list/
├── src/
│   ├── components/
│   │   ├── __tests__/
│   │   │   ├── TodoList.test.tsx
│   │   │   └── Task.test.tsx
│   │   ├── TodoList.tsx
│   │   ├── Task.tsx
│   │   └── Navbar.tsx
│   ├── styles/
│   ├── App.tsx
│   ├── index.tsx
│   ├── setupTests.ts
│   └── react-app-env.d.ts
├── package.json
├── tsconfig.json
└── README.md

Run the tests using the following command: npm test

Key Test Cases : 

For Task Component :
Renders Task Text: Verify the task text is displayed.
Toggles Completion: Verify the checkbox toggles task completion.
Enters Edit Mode: Verify the task enters edit mode on edit icon click.
Deletes Task: Verify the task is deleted on delete icon click.

For TodoList Component :
Renders Initial State: Verify no tasks are displayed initially.
Adds a New Task: Verify a new task is added.
Marks Task as Completed: Verify the task is marked as completed.
Deletes a Task: Verify the task is deleted.






END-TO-END TESTING USING Playwright :  Playwright is a powerful tool for testing web applications in real browsers, ensuring your app works as expected across different environments.

Steps to Set Up and Run E2E Tests :
1) Install Playwright as a development dependency in your project:
npm install --save-dev @playwright/test
2) After installation, initialize Playwright to set up the required browsers and configuration:
npx playwright install
3. Create a Playwright Configuration File
Playwright automatically generates a configuration file (playwright.config.ts) in the root of your project.
4) Create an e2e-tests directory in the root of your project. This is where all your E2E tests will reside.

todo-list/
├── e2e-tests/
│   ├── todo-list.spec.ts
├── src/
├── package.json
├── playwright.config.ts
└── README.md
5. Write E2E Tests
Create a test file (todo-list.spec.ts) in the e2e-tests directory.
6) Before running the tests, start your Todo List application using npm start
Ensure your app is running on http://localhost:3000.
7) Execute the Playwright tests using the following command: npx playwright test
This will run all the tests in the e2e-tests directory.
8) After running the tests, you can view the results in the terminal. Playwright also generates an HTML report. To view the report, run:  npx playwright show-report
This will open a detailed HTML report in your browser.


Key Test Cases :
1) Add a Task:
Verify that a new task is added to the list.

2) Mark a Task as Completed:
Verify that the task is marked as completed and the completed task count updates.

3) Delete a Task:
Verify that the task is deleted from the list.

4) Edit a Task:
Verify that the task content is updated.











