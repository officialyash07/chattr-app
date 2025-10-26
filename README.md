# ChattR - Modern WhatsApp-like Chat Application

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, responsive Chattr chat application built with React and Vite. Features real-time messaging interface, theme switching, and responsive design optimized for both desktop and mobile devices.

## 🚀 Features

### Core Functionality

-   **Real-time Chat Interface**: Interactive messaging system with message bubbles
-   **Contact Management**: User list with status indicators (online, away, offline)
-   **Responsive Design**: Seamlessly adapts between desktop and mobile layouts
-   **Theme Switching**: Dark and light theme support with smooth transitions
-   **Message Status**: Visual indicators for message delivery and read status

### User Experience

-   **Intuitive Navigation**: Easy switching between contacts and conversations
-   **Mobile-First Design**: Optimized mobile experience with proper touch interactions
-   **Contact Status**: Real-time status indicators and last active timestamps
-   **Message Input**: Enhanced input field with send button and keyboard shortcuts
-   **Animated Transitions**: Smooth animations and micro-interactions

## 🛠️ Tech Stack

### Frontend Framework

-   **React 19.1.1** - Latest React with concurrent features and optimizations
-   **Vite 7.1.7** - Lightning-fast build tool and development server
-   **React Compiler** - Experimental React compiler for enhanced performance

### Development Tools

-   **ESLint** - Code linting and formatting
-   **Babel** - JavaScript transpilation with React compiler plugin
-   **CSS3** - Custom CSS with CSS variables and modern features

## 📁 Project Structure

```
chattr-app-frontend/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, backgrounds
│   │   ├── icons/         # SVG icons for UI elements
│   │   └── background/    # Background images
│   ├── components/        # React components
│   │   ├── ChatWindow.jsx # Main chat interface
│   │   ├── ContactCard.jsx # Individual contact item
│   │   ├── MessageBubble.jsx # Message display component
│   │   └── SideBar.jsx    # Contact list sidebar
│   ├── context/           # React Context providers
│   │   ├── ChatContext.jsx # Chat state management
│   │   └── ThemeContext.jsx # Theme state management
│   ├── hooks/             # Custom React hooks
│   │   ├── useChat.js     # Chat functionality hook
│   │   └── useTheme.js    # Theme management hook
│   ├── styles/            # CSS stylesheets
│   │   ├── animation.css  # Animation definitions
│   │   ├── custom.css     # Custom component styles
│   │   ├── root.css       # Global styles and variables
│   │   └── theme.css      # Theme-specific styles
│   ├── ui/                # Reusable UI components
│   │   ├── Button.jsx     # Button component
│   │   └── ThemeButton.jsx # Theme toggle button
│   ├── App.jsx            # Main application component
│   ├── index.css          # Global CSS imports
│   └── main.jsx           # Application entry point
├── data.js                # Mock user data
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── eslint.config.js       # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

-   **Node.js** (version 16 or higher)
-   **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/officialyash07/chattr-app.git
    cd chattr-app-frontend
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Start the development server**

    ```bash
    npm run dev
    ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

| Script            | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Create production build                  |
| `npm run preview` | Preview production build locally         |
| `npm run lint`    | Run ESLint for code quality checks       |

## 💡 Usage

### Basic Navigation

1. **Select a Contact**: Click on any contact in the sidebar to open a chat
2. **Send Messages**: Type in the input field and press Enter or click the send button
3. **Switch Themes**: Use the theme toggle button to switch between light and dark modes
4. **Mobile Navigation**: On mobile devices, use the back arrow to return to the contact list

### Features Overview

-   **Contact Status**: See real-time status (online/away/offline) and last active time
-   **Message Types**: Support for text messages with timestamp display
-   **Responsive Layout**: Automatic layout adjustment for different screen sizes
-   **Theme Persistence**: Your theme preference is saved across sessions

## 🎨 Customization

### Adding New Themes

1. Define new CSS variables in `src/styles/root.css`
2. Add theme logic in `src/context/ThemeContext.jsx`
3. Update theme toggle in `src/ui/ThemeButton.jsx`

### Styling Components

-   **Global Styles**: Modify `src/styles/root.css` for global variables
-   **Component Styles**: Edit individual CSS files in `src/styles/`
-   **Animations**: Customize animations in `src/styles/animation.css`

### Adding New Features

-   **New Components**: Add to `src/components/` directory
-   **Custom Hooks**: Create in `src/hooks/` for reusable logic
-   **Context Providers**: Add to `src/context/` for global state

## 🔧 Architecture

### State Management

-   **React Context**: Used for global state (theme, chat data)
-   **Custom Hooks**: Encapsulate complex logic and state management
-   **Local State**: Component-specific state with React useState

### Component Design

-   **Functional Components**: All components use React hooks
-   **Props Pattern**: Clear prop interfaces for component communication
-   **Composition**: Reusable UI components in `src/ui/` directory

### Performance Optimizations

-   **React Compiler**: Experimental compiler for automatic optimizations
-   **Vite**: Fast build tool with optimized development experience
-   **Code Splitting**: Automatic code splitting with Vite

## 📱 Responsive Design

The application is designed with a mobile-first approach:

-   **Desktop (≥768px)**: Sidebar and chat window displayed side by side
-   **Mobile (<768px)**: Single-view navigation with animated transitions
-   **Touch Optimization**: Proper touch targets and gesture support
-   **Flexible Layout**: CSS Grid and Flexbox for responsive layouts

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
    ```bash
    git checkout -b feature/amazing-feature
    ```
3. **Commit your changes**
    ```bash
    git commit -m 'Add some amazing feature'
    ```
4. **Push to the branch**
    ```bash
    git push origin feature/amazing-feature
    ```
5. **Open a Pull Request**

### Development Guidelines

-   Follow the existing code style and structure
-   Add appropriate comments for complex logic
-   Ensure responsive design compatibility
-   Test on both desktop and mobile devices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Yash Pathik**

-   GitHub: [@officialyash07](https://github.com/officialyash07)
-   Project: [ChattR App](https://github.com/officialyash07/chattr-app)

## 🙏 Acknowledgments

-   React team for the amazing framework
-   Vite team for the blazing-fast build tool
-   Contributors and the open-source community

---

**Built with ❤️ using React and Vite**
