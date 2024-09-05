# Video Calling App

This project is a **Video Calling App** built with **React**, **TypeScript**, and **Vite**. The app provides real-time video communication using **WebRTC**, ensuring fast and responsive interactions.

## Features

- Real-time video and audio communication using **WebRTC**.
- **React** and **TypeScript** for type-safe, modern UI development.
- **Vite** for fast build times and hot module replacement (HMR).
- **ESLint** for code linting with React-specific rules for better code quality.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 12 or above)
- **npm** or **yarn** (for package management)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Nishant040305/VideoCalling.git
   cd VideoCalling

2. **Start the Application**:

  ```bash
  npm install
  npm start

3. **Create .env File**:

- Add SPORT choose a port
- Add PORT choose a port
- Add FRONTWEB (for production add http://localhost:5173)
- ADD client/src/.env (for production add BACKWEB=http://localhost:PORT and SOCKET=http://localhost:SPORT)