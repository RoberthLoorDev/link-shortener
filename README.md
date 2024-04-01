## Clipp.io

Clipp.io is a link shortening project developed with Express.js, Vue.js, and Mongoose. It allows users to input a long URL and obtain a shortened version of it. The shortened links are stored in the browser's local storage, eliminating the need for a user account.

## Features

-   **Link Shortening:** Users can input a long URL and obtain a shortened version of it.
-   **Local Storage:** Shortened links are stored in the browser's local storage, allowing access to them without a user account.
-   **Links Table:** A table displays saved shortened links, along with a click counter indicating how many times each link has been accessed.
-   **Redirection:** When a user accesses a shortened link, they are redirected to the original link.

## Technologies Used

-   **Front-end:** Vue.js
-   **Back-end:** Express.js
-   **Database:** MongoDB Atlas with MongoDB

## Installation and Usage

1. Clone this repository: `git clone https://github.com/RoberthLoorDev/link-shortener`
2. Install frontend dependencies: `cd frontend && npm install`
3. Install client dependencies: `cd backend && npm install`
4. Set up necessary environment variables (such as MongoDB connection string).
5. Start the server: `npm run dev` (from the `frontend` folder).
6. Start the client: `npm run serve` (from the `backend` folder).
7. Open http://localhost:8080 in your browser to access the application.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or suggestions, feel free to contact me at [dayvidlife@gmail.com](mailto:dayvidlife@gmail.com).
