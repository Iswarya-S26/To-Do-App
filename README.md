# Todo List Project

A simple Todo List web application where users can add, delete, and toggle completion status of their tasks. This project demonstrates the use of HTML, CSS, Bootstrap, and JavaScript.

## Features

- Add new todos with proper validation.
- Mark todos as completed or incomplete.
- Delete todos with confirmation.
- Todos list dynamically updates on every action.

## Technologies Used

- **HTML**: For structuring the content.
- **CSS**: For styling the application.
- **Bootstrap**: For responsive design and predefined components.
- **JavaScript**: For dynamic functionalities and user interactions.

## Setup and Installation

1. Clone the repository or download the files:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory.
3. Open the `index.html` file in a browser.
4. Alternatively, open the project using **Live Server** in VS Code for a better experience.

## File Structure

```
project-folder/
├── index.html       # Main HTML file
├── style.css        # Styles for the application
├── script.js        # JavaScript functionality
└── README.md        # Project documentation
```

## How to Use

1. Open the application in your browser.
2. Enter a todo in the input field and click the **Add** button to add it to the list.
3. Mark a todo as completed by clicking the checkbox next to it.
4. Delete a todo by clicking the delete button.

## Validation Logic

1. **Empty Input Validation**:
   - If the input field is empty, an error message is displayed.
2. **Duplicate Todo Validation**:
   - Users cannot add a todo with the same text (case-insensitive).

## Customization

### Change the Background
You can update the gradient background by modifying the `background` property in the `style.css` file:
```css
body {
  background: linear-gradient(90deg, rgba(121, 227, 215, 1) 0%, rgba(51, 99, 227, 1) 100%);
}
```

### Add More Features
You can enhance the project by adding features like:
- Local storage to save todos.
- A filter to view completed or pending todos.


