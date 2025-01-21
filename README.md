# Investment Calculator

![ViteVue-GoogleChrome2024-08-2519-32-59-ezgif com-crop](https://github.com/user-attachments/assets/0234a2e7-7a41-4311-bca5-e0b687c20ba1)

## How to run

1. **Installing Dependencies**:
   - Run the command `$ npm install` to install all necessary dependencies.

2. **Development Mode**:
   - Use `$ npm run dev` to start the application in development mode.

3. **Running Tests**:
   - To run the tests, use `$ npm run test`.

## Project Structure

```plaintext
src/
│
├── assets/
├── components/
├── helpers/
├── tests/
├── utils/
└── views/
```
**`assets/`**

Directory intended to store static resources, such as images and logos, used in the application. This directory serves as a centralized point for these files, making access and maintenance easier.

**`components/`**

Directory containing all Vue components of the application. The approach used here is a 'flat' directory, meaning there are no subfolders for components, making navigation and organization easier.

**Component Naming Rules:**

* **PascalCase:** Component names must follow the `PascalCase` format (e.g., `CalculatorResult`).
* **Reusable components:** Must start with `App` (e.g., `AppBanner`), indicating that they are reusable across different parts of the project.
* **Compound names:** Always use compound names to avoid conflicts with native HTML elements or future ones..
* **Child components:** Must be prefixed with the parent component’s name, followed by its specific name (e.g., `CalculatorResultCard`).
* **Naming structure:** Start the name with the most general words and end with the most specific ones.

**`helpers/`**

Contains utility functions that can be reused in various parts of the project. Currently, all functions are in a single `index.js` file. As the project grows, it is recommended to split these functions into different files for better organization.

**`tests/`**

Directory where all application tests are located. The structure is segmented to improve clarity:

* **Functional tests:** Located at the root of the folder and named after the feature being tested, such as `Calculator.test.js`.
* **Component tests:** Stored in the components subfolder, with names matching the tested component (e.g., `CalculatorSimulation.test.js`).
* **Helper tests:** Stored in the helpers subfolder, and the file name matches the tested helper (e.g., `index.test.js`).
* **Snapshot tests:** Stored in the interface subfolder, also with names matching the component (e.g., `CalculatorSimulation.test.js`).

All test files follow the `.test.js` extension pattern.

**`utils/`**

Directory that stores utility elements, such as constants or helper functions. For example, the `yieldRates.js` file stores yield rates used in various parts of the project.

**`views/`**

Contains the application pages. Each page is a Vue component (.vue) and must end with the `View` suffix to differentiate it from other components (e.g., `CalculatorView.vue`).
