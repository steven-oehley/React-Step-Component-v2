# React Stepper Component v2 🚶‍♂️⚛︎

## Overview

This project is an extension of the original React Stepper Component, designed to create a more flexible and reusable stepper interface. In this version (v2), we have incorporated reusable buttons using props.children for button content, making the component more versatile and customizable.

## Features

- Dynamic Step Management: The stepper dynamically manages the current step state.
- Conditional Rendering: The content is conditionally rendered based on the isOpen state.
- Reusable Button Component: Buttons are created as reusable components, with customizable styles and content using props.children.
- Smooth State Transitions: State transitions for step changes are handled smoothly using callback functions to ensure the current state is accurately retrieved.

## Code Structure

#### App Component

- The App component manages the overall state and rendering of the stepper.

#### Button Component

- The Button component is a reusable button with customizable styles and content.

```
function Button({ color, bcolor, onClick, children }) {
  return (
    <button style={{ backgroundColor: bcolor, color: color }} onClick={onClick}>
      {children}
    </button>
  );
}
```

## How to Use

- Clone the Repository: Clone this repository to your local machine.
- Install Dependencies: Run npm install to install the necessary dependencies.
- Run the App: Use npm start to run the application locally.
- Customize: You can customize the button styles and content by modifying the Button component's props.

## Purpose

The primary goal of this version is to create reusable buttons and utilize props.children for button content. This approach ensures that the button content can be easily modified without changing the button component itself, promoting reusability and maintainability.

## Comparison with React Stepper Component v1

- Reusable Components: Version 2 introduces reusable buttons, enhancing the flexibility and modularity of the code.
- Props.Children Usage: The use of props.children allows for more dynamic and customizable button content.
- State Management: Improved state management with conditional rendering based on the isOpen state.

By implementing these improvements, React Stepper Component v2 aims to provide a more efficient and customizable stepper interface for React applications.
