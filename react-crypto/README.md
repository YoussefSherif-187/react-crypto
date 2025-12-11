Crypto Business Intelligence Dashboard
# Project Overview

This project is a Business Information Systems (BIS) dashboard built with React. It provides real-time cryptocurrency market data, analytics visualizations, customizable dashboard views, and an integrated AI chatbot assistant. The dashboard is designed to assist users in understanding market movements and making business-oriented decisions using live financial information.

## Core Features
### Live Cryptocurrency Data

The application uses the CoinGecko API to retrieve live market information for major cryptocurrencies. The data includes price, market capitalization, 24-hour percentage change, and trading volume. The dashboard automatically refreshes every 10 seconds and displays a last updated timestamp.

### Dashboard Display Modes

The dashboard supports three different display modes:

Cards only

Table only

Cards and table combined

These modes can be selected from the Settings page and are saved using localStorage.

### Crypto Cards

The dashboard displays interactive cards for each cryptocurrency. Each card contains a coin logo, name, symbol, and live price. Bitcoin uses a provided image, and other coins may use placeholders if images are not supplied.

### Search and Filtering

Users can search for cryptocurrencies by name or symbol. Additional filters include setting minimum and maximum price values. Filtering updates results instantly.

### Real-Time Data Table

A table view is available showing cryptocurrency name, symbol, and price. The table updates automatically alongside the card view.

### Analytics and Charts

The Analytics page contains two charts built with Recharts:

A bar chart displaying live cryptocurrency prices

A donut chart showing distribution of values among different coins

Both charts refresh automatically based on live API data.

### AI Chatbot Integration

The project includes an embedded Botpress AI chatbot that answers crypto business questions. It uses:

A custom action to fetch live CoinGecko data

An AI task for natural language responses

A knowledge base for general business and crypto concepts

The chatbot is available on every page through a floating widget.

### Architecture

The project uses a modular structure:

services/api.js manages API communication

hooks/useBusinessData.js manages data fetching, auto-refresh, and filters

pages include Dashboard, Analytics, and Settings

components include charts, cards, chatbot widget, navbar, and sidebar

### Getting Started with Create React App

This project was bootstrapped with Create React App.

Available Scripts

In the project directory, you can run:

### npm start

Runs the app in the development mode.
Open http://localhost:3000
 to view it in your browser.
The page will reload when you make changes.
You may also see any lint errors in the console.

### npm test

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

### npm run build

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed.

See the section about deployment for more information.

### npm run eject

Note: this is a one-way operation. Once you eject, you can't go back.
If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies right into your project so you have full control over them.
All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them.

You do not need to use eject for normal use of this project.

### Learn More

You can learn more in the Create React App documentation.
To learn React, check the React documentation.

### Code Splitting

This section describes how the application can be optimized by splitting code into smaller bundles.

### Analyzing the Bundle Size

This section provides tools for viewing what is included in the final bundle.

### Making a Progressive Web App

This section describes how to convert your app into a PWA.

### Advanced Configuration

This section explains more advanced React configuration options.

### Deployment

This section explains how to deploy the application.

### npm run build fails to minify

This section describes how to fix minification issues during production builds.