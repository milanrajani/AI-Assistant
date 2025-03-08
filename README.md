## Al Assistant

Al Assistant is a Nodejs-based chatbot application that integrates with OpenAl's GPT-40 API to provide
intelligent responses. This project allows users to interact with Al-powered assistance using a simple and
efficient interface.

## Getting Started

Follow these steps to set up and run the project on your local system.

Prerequisites

Ensure you have the following installed on your system and an Account on Github:

• Nodejs (v16 or later)

• Git

## Steps to Run the Project

1. Clone the Repository
   
Clone this repository to your local machine using the following command

```bash
git clone https://github.com/milanrajani/chatbot.git
```
2. Navigate to the Project Directory

```bash
cd chatbot
```
Then, Instal the required dependiences

```bash
npm install
```

3. Head over to this repo:
   
```bash
https://github.com/marketplace/models/azure-openai/gpt-4o/playground
```
4. Generate an API Key
   
You will need an API key to access OpenAl's GPT-40. Follow these steps to generate one:

1. Head over to the Azure OpenAl GPT-40 Playground.
   
2. In the top-right corner, click on the "Use this model" button.
   
3. Click on the "Get Developer Key" button then click on Generate New Token dropdown then click the second option "Generate new token(classic)".
   
5. Copy the generated API key.

6. After coping the API key head over to server.js file and paste your API key on line number 23.

![image](https://github.com/user-attachments/assets/5a2091e9-6524-4dd5-bd54-8bdfb698bf1f)

7. If you are using the mac and face such error

```bash
(node:18069) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use node --trace-warnings ... to show where the warning was created)
/Users/siam/Desktop/untitled folder/chatbot/server/server.js:1
import express from "express";
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1178:20)
    at Module._compile (node:internal/modules/cjs/loader:1220:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47


```  
then replace the package.json file with the below code:

```bash
{
  "type": "module",
  "dependencies": {
    "@tailwindcss/cli": "^4.0.9",
    "axios": "^1.7.9",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "mongoose": "^8.10.1",
    "nodemon": "^3.1.9",
    "openai": "^4.85.3",
    "tailwindcss": "^4.0.9"
  },
  "scripts": {
    "start": "node server/server.js"
  }
}
```



Once you have the dependencies installed and the API key set up, you can start the application by running the following command:

```bash
npm run start
```
Open your browser and navigate to [http://localhost:4000](http://localhost:4000) to interact with the chatbot.























