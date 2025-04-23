# Student Grades Application

This application allows users to enter and store student grades for classes 5 to 13, adhering to the requirements of comprehensive schools in North Rhine-Westphalia (NRW). It is designed to be modern and user-friendly.

## Features

- **Grade Entry Form**: A form for entering student grades with validation.
- **Grade List**: Displays a list of entered grades in a user-friendly format.
- **Responsive Design**: The application is styled to be modern and accessible on various devices.
- **TypeScript Support**: Built with TypeScript for type safety and better development experience.

## Project Structure

```
student-grades-app
├── public
│   ├── index.html          # Main HTML entry point
│   ├── styles              # Contains CSS styles
│   │   └── main.css
│   └── scripts             # Contains JavaScript code
│       └── main.js
├── src
│   ├── components          # React components
│   │   ├── GradeEntryForm.tsx
│   │   ├── GradeList.tsx
│   │   └── Header.tsx
│   ├── pages               # Application pages
│   │   ├── HomePage.tsx
│   │   └── NotFoundPage.tsx
│   ├── utils               # Utility functions
│   │   └── validation.ts
│   └── types               # TypeScript types and interfaces
│       └── index.ts
├── package.json            # npm configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── README.md               # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd student-grades-app
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm run dev
```
This will start the development server and open the application in your default web browser.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.