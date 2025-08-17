import React, { useState, useEffect } from 'react';
import { UsersIcon, CalendarIcon, ClockIcon, VideoIcon, PhoneIcon, MessageCircleIcon, StarIcon, AwardIcon, BrainIcon, CheckCircleIcon, XIcon, PlusIcon } from 'lucide-react';

interface CoachingSession {
  id: string;
  date: string;
  time: string;
  advisor: string;
  advisorId: string;
  topic: string;
  status: 'available' | 'booked' | 'completed';
  prepNotes: string;
  duration: number;
  price: number;
  advisorAvatar: string;
  advisorSpecialty: string;
  advisorRating: number;
  advisorExperience: string;
}

interface Advisor {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  sessionsCompleted: number;
  avatar: string;
  bio: string;
  certifications: string[];
  languages: string[];
}

export const CoachingPortal: React.FC = () => {
  const [sessions, setSessions] = useState<CoachingSession[]>([]);
  const [advisors, setAdvisors] = useState<Advisor[]>([]);
  const [selectedAdvisor, setSelectedAdvisor] = useState<Advisor | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    // Mock advisors data
    const mockAdvisors: Advisor[] = [
      {
        id: '1',
        name: 'Sarah Chen',
        specialty: 'Portfolio Optimization & Risk Management',
        experience: '15+ years in institutional investing',
        rating: 4.9,
        sessionsCompleted: 1247,
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        bio: 'Former portfolio manager at Goldman Sachs with expertise in modern portfolio theory and risk-adjusted returns.',
        certifications: ['CFA', 'FRM', 'MBA Finance'],
        languages: ['English', 'Mandarin']
      },
      {
        id: '2',
        name: 'Michael Rodriguez',
        specialty: 'Tax Optimization & Estate Planning',
        experience: '12+ years in wealth management',
        rating: 4.8,
        sessionsCompleted: 892,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        bio: 'Certified financial planner specializing in tax-efficient investment strategies and multi-generational wealth transfer.',
        certifications: ['CFP', 'EA', 'JD Tax Law'],
        languages: ['English', 'Spanish']
      },
      {
        id: '3',
        name: 'Dr. Emily Watson',
        specialty: 'Behavioral Finance & Psychology',
        experience: 'PhD in Behavioral Economics',
        rating: 4.9,
        sessionsCompleted: 567,
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        bio: 'Behavioral finance expert helping investors overcome cognitive biases and emotional decision-making.',
        certifications: ['PhD Behavioral Economics', 'CFA'],
        languages: ['English']
      },
      {
        id: '4',
        name: 'David Kim',
        specialty: 'Alternative Investments & Crypto',
        experience: '8+ years in fintech and crypto',
        rating: 4.7,
        sessionsCompleted: 423,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        bio: 'Early crypto adopter and DeFi expert, helping investors navigate the world of alternative investments.',
        certifications: ['Series 7', 'Blockchain Developer'],
        languages: ['English', 'Korean']
      }
    ];

    setAdvisors(mockAdvisors);

    // Mock sessions data
    const mockSessions: CoachingSession[] = [
      {
        id: '1',
        date: '2024-01-15',
        time: '14:00',
        advisor: 'Sarah Chen',
        advisorId: '1',
        topic: 'Portfolio Rebalancing Strategy',
        status: 'available',
        prepNotes: 'User has 18% cash drag, missed 2 rebalances, underweighted bonds. Portfolio shows 23% tech concentration vs 15% benchmark.',
        duration: 60,
        price: 150,
        advisorAvatar: mockAdvisors[0].avatar,
        advisorSpecialty: mockAdvisors[0].specialty,
        advisorRating: mockAdvisors[0].rating,
        advisorExperience: mockAdvisors[0].experience
      },
      {
        id: '2',
        date: '2024-01-22',
        time: '10:00',
        advisor: 'Michael Rodriguez',
        advisorId: '2',
        topic: 'Tax Optimization Strategy',
        status: 'available',
        prepNotes: 'High capital gains exposure, consider tax-loss harvesting opportunities. User in 32% tax bracket with significant unrealized gains.',
        duration: 45,
        price: 120,
        advisorAvatar: mockAdvisors[1].avatar,
        advisorSpecialty: mockAdvisors[1].specialty,
        advisorRating: mockAdvisors[1].rating,
        advisorExperience: mockAdvisors[1].experience
      },
      {
        id: '3',
        date: '2024-01-08',
        time: '16:00',
        advisor: 'Dr. Emily Watson',
        advisorId: '3',
        topic: 'Investment Psychology & Decision Making',
        status: 'completed',
        prepNotes: 'User shows signs of loss aversion and confirmation bias. Recent panic selling during market volatility.',
        duration: 60,
        price: 180,
        advisorAvatar: mockAdvisors[2].avatar,
        advisorSpecialty: mockAdvisors[2].specialty,
        advisorRating: mockAdvisors[2].rating,
        advisorExperience: mockAdvisors[2].experience
      }
    ];

    setSessions(mockSessions);
  }, []);

  const handleBookSession = (session: CoachingSession) => {
    setSelectedAdvisor(advisors.find(a => a.id === session.advisorId) || null);
    setSelectedDate(session.date);
    setSelectedTime(session.time);
    setShowBookingModal(true);
  };

  const confirmBooking = () => {
    // Update session status to booked
    setSessions(prev => prev.map(s => 
      s.id === sessions.find(s => s.date === selectedDate && s.time === selectedTime)?.id 
        ? { ...s, status: 'booked' as const }
        : s
    ));
    setShowBookingModal(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'text-green-500 bg-green-500/10';
      case 'booked': return 'text-yellow-500 bg-yellow-500/10';
      case 'completed': return 'text-blue-500 bg-blue-500/10';
      default: return 'text-gray-500 bg-gray-500/10';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available': return <CalendarIcon className="h-4 w-4" />;
      case 'booked': return <ClockIcon className="h-4 w-4" />;
      case 'completed': return <CheckCircleIcon className="h-4 w-4" />;
      default: return <CalendarIcon className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-[#151822]/90 to-[#1A1F2E]/90 p-6 rounded-xl border border-gray-800/30 shadow-lg">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <UsersIcon className="h-5 w-5 text-green-500" />
          Coaching Portal
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Available Sessions */}
          <div>
            <h3 className="text-lg font-medium mb-4">Available Sessions</h3>
            <div className="space-y-3">
              {sessions.filter(s => s.status === 'available').map((session) => (
                <div key={session.id} className="bg-[#23263A] p-4 rounded-lg border border-gray-800/40">
                  <div className="flex items-start gap-3 mb-3">
                    <img 
                      src={session.advisorAvatar} 
                      alt={session.advisor}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{session.advisor}</span>
                        <div className="flex items-center gap-1">
                          <StarIcon className="h-3 w-3 text-yellow-500 fill-current" />
                          <span className="text-sm text-gray-400">{session.advisorRating}</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-400 mb-1">{session.advisorSpecialty}</div>
                      <div className="text-xs text-gray-500">{session.advisorExperience}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">€{session.price}</div>
                      <div className="text-xs text-gray-400">{session.duration}min</div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="text-sm font-medium mb-1">{session.topic}</div>
                    <div className="text-xs text-gray-400">
                      {new Date(session.date).toLocaleDateString()} at {session.time}
                    </div>
                  </div>

                  <div className="bg-[#1E2230] p-3 rounded-lg mb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <BrainIcon className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm font-medium">AI Prep Notes</span>
                    </div>
                    <p className="text-xs text-gray-300">{session.prepNotes}</p>
                  </div>

                  <button
                    onClick={() => handleBookSession(session)}
                    className="w-full bg-gradient-to-r from-green-500 to-green-400 text-white font-medium py-2 px-4 rounded-lg hover:from-green-400 hover:to-green-300 transition-all"
                  >
                    Book Session
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Session History */}
          <div>
            <h3 className="text-lg font-medium mb-4">Your Coaching History</h3>
            <div className="space-y-3">
              {sessions.filter(s => s.status === 'completed').map((session) => (
                <div key={session.id} className="bg-[#23263A] p-4 rounded-lg border border-gray-800/40">
                  <div className="flex items-start gap-3 mb-3">
                    <img 
                      src={session.advisorAvatar} 
                      alt={session.advisor}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{session.advisor}</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(session.status)}`}>
                          {getStatusIcon(session.status)}
                        </span>
                      </div>
                      <div className="text-sm text-gray-400">{session.topic}</div>
                      <div className="text-xs text-gray-500">
                        {new Date(session.date).toLocaleDateString()} at {session.time}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">€{session.price}</div>
                      <div className="text-xs text-gray-400">Completed</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Advisor Directory */}
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">Meet Our Advisors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {advisors.map((advisor) => (
              <div key={advisor.id} className="bg-[#23263A] p-4 rounded-lg border border-gray-800/40">
                <div className="flex items-start gap-3 mb-3">
                  <img 
                    src={advisor.avatar} 
                    alt={advisor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{advisor.name}</span>
                      <div className="flex items-center gap-1">
                        <StarIcon className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-400">{advisor.rating}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400 mb-1">{advisor.specialty}</div>
                    <div className="text-xs text-gray-500">{advisor.experience}</div>
                  </div>
                </div>

                <p className="text-sm text-gray-300 mb-3">{advisor.bio}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {advisor.certifications.map((cert, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                      {cert}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-400">
                    {advisor.sessionsCompleted} sessions completed
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-[#1E2230] text-gray-400 rounded text-sm hover:bg-[#262B3D] transition-colors">
                      View Profile
                    </button>
                    <button className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black rounded text-sm hover:from-yellow-400 hover:to-yellow-300 transition-all">
                      Book Session
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedAdvisor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-[#151822] rounded-2xl shadow-2xl border border-[#23263A] p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Confirm Booking</h3>
              <button 
                onClick={() => setShowBookingModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img 
                  src={selectedAdvisor.avatar} 
                  alt={selectedAdvisor.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium">{selectedAdvisor.name}</div>
                  <div className="text-sm text-gray-400">{selectedAdvisor.specialty}</div>
                </div>
              </div>

              <div className="bg-[#23263A] p-3 rounded-lg">
                <div className="text-sm text-gray-400 mb-1">Session Details</div>
                <div className="text-sm">
                  <div>Date: {new Date(selectedDate).toLocaleDateString()}</div>
                  <div>Time: {selectedTime}</div>
                  <div>Duration: 60 minutes</div>
                  <div>Price: €150</div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="flex-1 px-4 py-2 bg-[#23263A] text-gray-400 rounded-lg hover:bg-[#1E2230] transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmBooking}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-green-400 text-white rounded-lg hover:from-green-400 hover:to-green-300 transition-all"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 