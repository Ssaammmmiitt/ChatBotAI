
# ChatBot using Gemini API from Google

This is a ChatBot made using the Gemini API from Google.

## Setup Instructions

1. **Create a `.env` file:**
   - The `.env` file should consist of 1 line:
     ```
     GOOGLE_GEN_AI_KEY=xxxxxxxxxxxxxxxxxx
     ```
   - Replace `xxxxxxxxxxxxxxxxxx` with your Gemini API key, which can be obtained from [aistudio.google.com](https://aistudio.google.com) after creating a project.

2. **Install the required packages:**
   - Run the following command to install the necessary packages:
     ```
     npm install dotenv express cors @google/generative-ai vite nodemon
     ```

3. **Run the program:**
   - Open two terminal windows and execute the following commands in each:

     Terminal 1:
     ```
     npm run dev
     ```

     Terminal 2:
     ```
     nodemon server.cjs
     ```

## Additional Notes

- Ensure you have Node.js installed on your system.
- If you encounter any issues, verify that your API key is correctly set up in the `.env` file.
