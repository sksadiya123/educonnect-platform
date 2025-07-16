import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, Heart, Calendar, Search, Filter, Plus } from 'lucide-react';

const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const discussions = [
    {
      id: 1,
      title: "How to stay motivated while learning online?",
      author: "Sarah Johnson",
      replies: 12,
      likes: 24,
      timestamp: "2 hours ago",
      category: "Study Tips",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 2,
      title: "Mathematics study group - Join us!",
      author: "Michael Chen",
      replies: 8,
      likes: 16,
      timestamp: "4 hours ago",
      category: "Study Groups",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 3,
      title: "Free programming resources compilation",
      author: "Emily Rodriguez",
      replies: 25,
      likes: 45,
      timestamp: "1 day ago",
      category: "Resources",
      avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 4,
      title: "Looking for English conversation partner",
      author: "David Kim",
      replies: 5,
      likes: 12,
      timestamp: "2 days ago",
      category: "Language Exchange",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Virtual Career Fair",
      date: "March 15, 2024",
      time: "2:00 PM - 6:00 PM",
      attendees: 150,
      type: "Virtual",
      description: "Connect with employers and explore career opportunities."
    },
    {
      id: 2,
      title: "Mathematics Workshop",
      date: "March 20, 2024",
      time: "10:00 AM - 12:00 PM",
      attendees: 45,
      type: "In-Person",
      description: "Advanced algebra techniques and problem-solving strategies."
    },
    {
      id: 3,
      title: "Community Volunteer Day",
      date: "March 25, 2024",
      time: "9:00 AM - 4:00 PM",
      attendees: 200,
      type: "In-Person",
      description: "Join us for a day of giving back to the community."
    }
  ];

  const studyGroups = [
    {
      id: 1,
      name: "Python Programming Beginners",
      members: 25,
      subject: "Programming",
      nextMeeting: "Today, 7:00 PM",
      description: "Learn Python programming from scratch with fellow beginners."
    },
    {
      id: 2,
      name: "English Literature Circle",
      members: 18,
      subject: "Literature",
      nextMeeting: "Tomorrow, 6:00 PM",
      description: "Discuss classic and contemporary literature in a supportive environment."
    },
    {
      id: 3,
      name: "Mathematics Problem Solvers",
      members: 32,
      subject: "Mathematics",
      nextMeeting: "Friday, 5:00 PM",
      description: "Collaborate on challenging math problems and share solving techniques."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Community</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with fellow learners, share knowledge, and grow together in our supportive community.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <nav className="flex space-x-8 justify-center">
            {['discussions', 'events', 'study-groups'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 rounded-lg font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {tab === 'discussions' && 'Discussions'}
                {tab === 'events' && 'Events'}
                {tab === 'study-groups' && 'Study Groups'}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'discussions' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search discussions..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </button>
              </div>
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4" />
                <span>New Discussion</span>
              </button>
            </div>

            <div className="space-y-4">
              {discussions.map((discussion, index) => (
                <motion.div
                  key={discussion.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <img 
                      src={discussion.avatar} 
                      alt={discussion.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {discussion.category}
                        </span>
                        <span className="text-sm text-gray-500">{discussion.timestamp}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                        {discussion.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">by {discussion.author}</p>
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{discussion.replies} replies</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span>{discussion.likes} likes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Upcoming Events</h2>
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4" />
                <span>Create Event</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        event.type === 'Virtual' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {event.type}
                      </span>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                      <span>•</span>
                      <span>{event.time}</span>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Join Event
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'study-groups' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Study Groups</h2>
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="h-4 w-4" />
                <span>Create Group</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studyGroups.map((group, index) => (
                <motion.div
                  key={group.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-medium">
                        {group.subject}
                      </span>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Users className="h-4 w-4" />
                        <span>{group.members} members</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{group.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{group.description}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>Next meeting: {group.nextMeeting}</span>
                    </div>
                    <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                      Join Group
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;