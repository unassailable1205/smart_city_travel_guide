🌆 Smart City Travel Guide
Smart City Travel Guide is a modern web app that helps users explore smart cities intelligently. With features like AI-assisted travel planning, personalized itineraries, and saved travel notes, the app is designed to be your all-in-one travel companion.

This project is built using Supabase for backend services and OpenAI for AI-driven features.

✨ Features
🔐 User Authentication – Sign up, log in, and manage profiles

📚 Saved Itineraries – Bookmark places and plan trips

🧠 AI Travel Assistant – Get travel advice powered by OpenAI

📝 Personal Notes – Store private travel thoughts and tips

💾 Real-time Database – Powered by Supabase (PostgreSQL)

🚀 Edge Functions – Custom serverless logic and AI integration

⚙️ Tech Stack
Frontend: React + Tailwind CSS

Backend: Supabase (PostgreSQL, Auth, Edge Functions)

AI Integration: OpenAI API via Supabase Edge Functions

🛠️ Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/smart-city-travel-guide.git
cd smart-city-travel-guide
2. Set Up Supabase
Go to https://supabase.com and create a new project.

In the Authentication tab, enable email/password sign-in.

In the SQL Editor, create tables for:

Users (auto-managed by Supabase Auth)

Itineraries

Notes

Go to Project Settings → API and copy:

SUPABASE_URL

SUPABASE_ANON_KEY

3. Configure Environment Variables
Create a .env file in the root directory:

env
Copy
Edit
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_OPENAI_API_KEY=your_openai_api_key
4. Install Dependencies
bash
Copy
Edit
npm install
5. Run the App
bash
Copy
Edit
npm run dev
Visit: http://localhost:8080/

📁 Folder Structure
bash
Copy
Edit
smart-city-travel-guide/
│
├── public/                # Static files
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # App pages (Home, Login, Explore, etc.)
│   ├── lib/               # Supabase client & API utilities
│   └── App.jsx
├── .env
├── index.html
└── README.md
🚧 Roadmap
 Add map integration (Google Maps or Mapbox)

 Enable itinerary sharing

 Real-time weather and alerts

 Multi-language support

 Mobile-first optimization

📄 License
MIT License. Contributions are welcome!

