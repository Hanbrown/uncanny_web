# Three.JS Local Development Environment

This repository has  necessary files and code to run Three.JS locally on your machine, without an internet connection. It uses Webpack to bundle code and resources, and it uses http-server to deploy the code using your computer like a web server.

Setup:
1. Clone this repository
2. Open a terminal and run `npm install`
3. Run `npm run build`

Usage:
- Development: Run `npm run dev`
- Production: Run `npm run build` and then `npm start`

You are now ready to edit and add files of your own.
To use a file, import it into a JavaScript file like so: `import RESOURCE from "./file.png";`

Notes:
- index.js must remain where it is, and its name cannot change.
- Webpack can only handle files with extensions listed in the config file. To add an extension, go to line 18 in webpack.config.js and add a file extension to the regex.