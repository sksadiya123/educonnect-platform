# EduConnect - Community-Driven Education Platform

A comprehensive web application that connects learners with volunteers and organizations to make quality education accessible to everyone.

## Features

### For Students
- **Course Enrollment**: Access to a wide variety of free courses across different subjects
- **Volunteer Matching**: Get paired with qualified volunteers for personalized tutoring
- **Progress Tracking**: Monitor your learning journey with detailed analytics
- **Community Forums**: Connect with fellow learners and participate in discussions
- **AI Assistant**: Get instant help with questions through our integrated chatbot

### For Volunteers
- **Student Management**: View and manage assigned students with progress tracking
- **Flexible Scheduling**: Set your availability and schedule tutoring sessions
- **Impact Metrics**: See the difference you're making with detailed analytics
- **Resource Library**: Access teaching materials and resources
- **Community Recognition**: Get recognized for your contributions

### For Organizations
- **Program Management**: Create and manage educational programs
- **Volunteer Coordination**: Recruit and manage volunteer teams
- **Impact Analytics**: Comprehensive reporting on program effectiveness
- **Partnership Tools**: Collaborate with other organizations
- **Budget Tracking**: Monitor resource allocation and program costs

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **API Integration**: Axios
- **Notifications**: React Hot Toast
- **AI Integration**: OpenRouter API

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/educonnect.git
   cd educonnect
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Add your OpenRouter API key to the `.env` file:
   ```
   VITE_OPENROUTER_API_KEY=your_openrouter_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## API Integration

### OpenRouter AI Chatbot
The platform includes an intelligent chatbot powered by OpenRouter API that can help with:
- Course information and enrollment
- Volunteer opportunities
- Technical support
- Study tips and learning strategies
- Community features

To enable the chatbot:
1. Sign up at [OpenRouter](https://openrouter.ai/)
2. Get your API key
3. Add it to your `.env` file as `VITE_OPENROUTER_API_KEY`

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── chatbot/
│       └── Chatbot.tsx
├── features/
│   └── dashboards/
│       ├── StudentDashboard.tsx
│       ├── VolunteerDashboard.tsx
│       └── OrganizationDashboard.tsx
├── pages/
│   ├── Home.tsx
│   ├── Courses.tsx
│   ├── Community.tsx
│   ├── About.tsx
│   └── Contact.tsx
└── App.tsx
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email info@educonnect.org or use the integrated chatbot for instant assistance.

## Mission

EduConnect is committed to making quality education accessible to everyone, regardless of their background or circumstances. We believe in the power of community-driven learning and the impact that dedicated volunteers can have on students' lives.