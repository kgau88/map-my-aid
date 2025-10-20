Stanford Project: Generative AI for Learning

Overview: 
Map My Aid is an AI-powered web application designed to help users discover location-specific financial aid and educational resources. The platform also includes a dedicated mode for Stanford students and affiliates, enabling tailored queries that return institution-specific opportunities and support programs.

Originally built using Google Gemini AI model, the app employs natural language processing (NLP) to interpret user queries and recommend the most relevant aid categories in a clear, intuitive interface.

Update: The project, initially developed for a Stanford IntroSem course, has been expanded to integrate Google Maps AI and Groq LLaMA, enabling geospatially aware outputs that connect users to resources based on their real-world locations.

Accessibility + Resources:
- Interactive Q&A Prompter: Guides users through questions to refine their needs (e.g., scholarships, emergency funds, housing).
- Frontend: Clean, responsive layout built with HTML, CSS, and JavaScript.
- Autocomplete + History Support: Users can revisit previous questions easily.

⚙️ Installation & Setup
1. Clone the Repository
git clone https://github.com/yourusername/map-my-aid.git
cd map-my-aid
2. Install Dependencies: npm install
3. Create a .env File
GOOGLE_API_KEY=your_api_key_here
4. Run the App: node server.js
