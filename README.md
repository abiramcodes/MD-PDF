# Markdown to PDF Converter

This project is a full-stack application that converts Markdown text into a PDF document. It features a live-updating editor and uses Puppeteer on the backend for high-quality PDF generation.

This is a solution for the "Markdown to PDF" coding challenge by John Crickett from [codingchallenges.fyi](https://codingchallenges.fyi/challenges/challenge-md-to-pdf/).

## Features

- **Live Markdown Preview**: See your rendered HTML as you type.
- **PDF Generation**: Convert your markdown into a previewable PDF in a new tab.
- **Syntax Highlighting**: Code blocks are styled using Prism.js, matching the frontend preview in the final PDF.

## Tech Stack

- **Frontend**: Angular, Angular Material
- **Backend**: NestJS, Puppeteer, marked.js, Prism.js

## Project Structure

```
.
├── MD-PDF-BE/         # NestJS Backend
├── MD-PDF-FE/         # Angular Frontend
```

## Getting Started

1.  **Start the Backend**:
    Open a new terminal, navigate to the `MD-PDF-BE` directory, and run:

    ```bash
    cd MD-PDF-BE
    npm install
    npm run start:dev
    ```

    The backend will be running on `http://localhost:3000`.

2.  **Start the Frontend:**
    Open a new terminal, navigate to the `MD-PDF-FE` directory, and run:
    ```bash
    cd MD-PDF-FE
    npm install
    ng serve
    ```
    The frontend will be running on `http://localhost:4200`.
