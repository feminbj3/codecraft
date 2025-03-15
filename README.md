# CodeCraft - Online Code Editor

![codecraft](https://github.com/user-attachments/assets/53bb856b-0816-402e-9dfb-077b56159c94)

## Overview

CodeCraft is a lightweight, browser-based code editor that allows developers to write, test, and visualize HTML, CSS, and JavaScript code in real-time. With its intuitive interface and live preview capabilities, CodeCraft is perfect for web development prototyping, learning, and quick code experimentation.

## Features

### Core Features
- **Live Preview**: Instantly see the results of your code updates
- **Multiple Language Support**: HTML, CSS, and JavaScript editors with syntax highlighting
- **Responsive Design**: Works on desktop and mobile devices
- **Auto-Save**: Never lose your work with automatic saving
- **Beautiful UI**: Dark theme with modern design aesthetics

### Editor Features
- **Syntax Highlighting**: Color-coded syntax for easier code reading
- **Line Numbers**: Keep track of your code position
- **Tab Support**: Easily switch between HTML, CSS, and JavaScript
- **Code Formatting**: Clean and readable code structure

### Project Management
- **Save Projects**: Store your work for later use
- **Load Projects**: Retrieve previously saved projects
- **Clear Editor**: Start fresh with a clean slate

### Interface
- **Split View**: Code editor and preview side by side
- **Resizable Panels**: Adjust the size of editor and preview panes
- **Status Bar**: Information about your current session
- **Notifications**: System alerts for important actions

## Technical Details

### Technologies Used
- **HTML5**: Structure and content
- **CSS3**: Styling and animations
- **JavaScript**: Functionality and interactivity
- **Local Storage API**: Saving and loading projects
- **Font Awesome**: Icons for enhanced UI

### File Structure
```
/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── fonts/              # Custom fonts
└── assets/             # Images and other assets
```

### Color Scheme
- Primary: `#2a2d3e`
- Secondary: `#1e2130`
- Accent: `#7c4dff`
- Text: `#e4e4e4`
- Border: `#3f4155`
- Success: `#4caf50`
- Warning: `#ff9800`
- Error: `#f44336`

## Usage

### Getting Started
1. Open the CodeCraft editor in your browser
2. Start writing your HTML, CSS, and JavaScript code
3. See the live preview on the right side
4. Use the buttons at the top to save, load, or clear your project

### Example Project

Here's a simple example to get you started:

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Awesome Page</title>
</head>
<body>
    <div class="container">
        <h1>Welcome to CodeCraft!</h1>
        <p>This is your live code editor. Edit HTML, CSS, and JavaScript to see instant results.</p>
        <button id="demo-btn">Click Me!</button>
    </div>
</body>
</html>
```

**CSS:**
```css
body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 80%;
}
```

**JavaScript:**
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('demo-btn');
    
    button.addEventListener('click', () => {
        alert('Hello from CodeCraft!');
    });
});
```

### Keyboard Shortcuts
- `Ctrl + S` / `Cmd + S`: Save project
- `Ctrl + O` / `Cmd + O`: Open project
- `Ctrl + N` / `Cmd + N`: New project
- `Ctrl + R` / `Cmd + R`: Run code
- `Ctrl + Tab`: Switch between editor tabs

## Browser Compatibility

CodeCraft is compatible with all modern browsers:
- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Opera (Latest)

## Installation

### Local Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/codecraft.git
   ```
2. Navigate to the project directory:
   ```
   cd codecraft
   ```
3. Open `index.html` in your preferred browser

### Web Version
Visit [codecraft.example.com](https://codecraft.example.com) to use the online version without installation.

## Future Enhancements

- **Additional Language Support**: Add support for more languages like SCSS, TypeScript, etc.
- **Collaboration Features**: Real-time collaboration with other developers
- **Export Options**: Export your projects as files or deployable packages
- **Templates**: Pre-built templates for common web components
- **Plugin System**: Extend functionality with custom plugins
- **Version Control**: Track changes and revert to previous versions
- **Custom Themes**: Personalize the editor's appearance

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Font Awesome for the beautiful icons
- Google Fonts for the Fira Code font
- All the open-source projects that inspired this editor

## Contact

Project Link: [https://[github.com/yourusername/codecraft](https://github.com/yourusername/codecraft)](https://github.com/feminbj3/codecraft)

---

Created with ❤️ by Femin - feminbj3@gmail.com
