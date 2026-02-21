# Vortext

A modern, real-time messaging application built with Vue.js for seamless text communication and future financial integration.

## 🎯 Overview

Vortext is a learning project designed to build a great chat application from the ground up. Currently featuring real-time text messaging with Firebase, it's evolving into a comprehensive communication and financial platform with planned integrations for media sharing, voice/video calling, and cryptocurrency wallet functionality.

**Live Demo**: [vortextapp.com](https://vortextapp.com)

## ✨ Current Features

- **Real-Time Text Messaging**: Instant text message delivery and synchronization
- **Firebase Realtime Database**: Leveraging Google's Firebase for reliable, scalable real-time communication
- **User Authentication**: Secure user login and session management
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **Clean UI**: Intuitive and user-friendly interface built with Vue.js

## 🚀 Planned Features (Roadmap)

We're actively working on expanding Vortext's capabilities:

- 📁 **File & Media Sharing** - Share documents, images, and other media files
- 🎙️ **Voice Sharing** - Send audio messages and voice notes
- 📞 **Voice & Video Calling** - Real-time audio and video communication
- 💰 **Crypto Wallet Integration** - Built-in cryptocurrency wallet for seamless financial transactions within the app

## 📦 Tech Stack

- **Frontend Framework**: Vue.js (95.5%)
- **Backend**: Firebase Realtime Database
- **Languages**: JavaScript (2.4%)
- **Styling**: CSS (1.7%) & HTML (0.4%)
- **Real-Time Communication**: Firebase WebSockets

## 🛠️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account (for database configuration)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hakimov-vs/vortext.git
cd vortext
```

2. Install dependencies:
```bash
npm install
```

3. Configure Firebase:
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com)
   - Add your Firebase configuration to the project (typically in `src/firebase.js` or `.env`)

4. Start the development server:
```bash
npm run serve
```

The application will be available at `http://localhost:8080`

## 📁 Project Structure

```
vortext/
├── src/
│   ├── components/          # Vue components
│   ├── views/               # Page views
│   ├── services/            # Firebase and API services
│   ├── App.vue              # Root component
│   ├── main.js              # Application entry point
│   └── firebase.js          # Firebase configuration
├── public/
├── package.json
└── README.md
```

## 🔧 Available Scripts

- `npm run serve` - Start development server with hot reloading
- `npm run build` - Create optimized production build
- `npm run lint` - Run code linting (if configured)

## 📖 Usage

1. **Sign Up/Login**: Create an account or log in with existing credentials
2. **Send Messages**: Start a conversation and send real-time text messages
3. **Real-Time Updates**: Messages appear instantly for all participants

## 🎓 Learning Goals

This project serves as a comprehensive learning experience for:
- Building real-time applications with Vue.js
- Implementing Firebase Realtime Database
- Creating responsive web applications
- Architecting scalable chat systems
- Integrating advanced features like media sharing, voice/video, and crypto wallets

## 📋 Development Status

**Status**: Active Development (Learning Project)

Currently in v1.0 with core messaging functionality. Regular updates and feature additions are in progress.

## 🔐 Security & Privacy

- User authentication through Firebase Authentication
- Real-time data encryption in transit via Firebase
- Secure WebSocket connections

## 📞 Contact & Support

For questions, suggestions, or feedback about Vortext, please feel free to:
- Open an issue on GitHub
- Visit the live demo: [vortextapp.com](https://vortextapp.com)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Vue.js](https://vuejs.org/)
- Powered by [Firebase](https://firebase.google.com/)
- Inspired by modern messaging platforms

---

**Ready to chat? Visit [vortextapp.com](https://vortextapp.com) today!** 💬🚀