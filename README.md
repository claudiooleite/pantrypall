Pantry Pal 🍽️
Welcome to Pantry Pal! This is a frontend project that helps users discover and explore various recipes based on their preferences. Built with Next.js, this project integrates with the Edamam API to fetch and display a variety of recipes, allowing users to view detailed nutritional information and step-by-step instructions.

🚀 Features
Random Recipe Suggestions: Get random recipe recommendations based on the user's preferences.
Detailed Recipe View: Users can view detailed nutritional information including calories, protein, fat, and carbs.
External Instructions: Users are redirected to the source website for detailed cooking instructions.
Responsive Design: Optimized for various screen sizes, including mobile, tablet, and desktop views.
🛠️ Technologies Used
Next.js: A powerful React framework for server-side rendering and static site generation.
React: A JavaScript library for building user interfaces.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
Edamam API: Used to fetch recipe data including ingredients, nutritional information, and cooking instructions.
Axios: A promise-based HTTP client for making API requests.
Netlify: For hosting and continuous deployment of the project.
📚 What I Learned
Working on this project helped me solidify my understanding of the following concepts and technologies:

Next.js and SSR: Implementing server-side rendering to improve SEO and load times.
API Integration: Fetching and handling external data from the Edamam API using Axios.
Responsive Design: Creating responsive layouts with Tailwind CSS to ensure a seamless experience across devices.
State Management: Managing application state using React's useState and useEffect hooks.
Deployment: Deploying a Next.js project on Netlify, including setting up environment variables and handling continuous deployment.
🔧 Installation and Setup
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/pantry-pal.git
cd pantry-pal
Install Dependencies:

bash
Copy code
npm install

# or

yarn install
Environment Variables:

Create a .env.local file in the root of the project and add your API credentials:

plaintext
Copy code
NEXT_PUBLIC_API_KEY=your_edamam_api_key
NEXT_PUBLIC_APP_ID=your_edamam_app_id
Run the Development Server:

bash
Copy code
npm run dev

# or

yarn dev
Open http://localhost:3000 to view the application in your browser.

Build for Production:

bash
Copy code
npm run build

# or

yarn build
Deploy:

The project can be easily deployed on Netlify or any other static hosting service.

🌟 Usage
On the homepage, browse through the recommended recipes.
Click on a recipe card to view detailed information.
Use the "View Full Instructions" button to navigate to the original recipe source.
📄 License
This project is open-source and available under the MIT License.

🛠️ Future Improvements
User Authentication: Allow users to save their favorite recipes.
Search Functionality: Enable searching for specific recipes.
User Customization: Provide personalized recommendations based on user preferences.
🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.
