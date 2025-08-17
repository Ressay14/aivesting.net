import React, { useEffect, useState } from 'react';
import { RefreshCwIcon, TrendingUpIcon, TrendingDownIcon, BarChart3Icon, BellIcon, BellOffIcon, FilterIcon, DownloadIcon, PlusIcon, SearchIcon, InfoIcon, CheckIcon, ChevronDownIcon, ChevronRightIcon, ArrowRightIcon, AlertTriangleIcon, CheckCircleIcon, XCircleIcon, ZapIcon, TrashIcon, EditIcon, MailIcon, SmartphoneIcon, GlobeIcon, ClockIcon, CalendarIcon, SettingsIcon, DollarSignIcon, XIcon, ToggleLeftIcon, ToggleRightIcon, SlackIcon } from 'lucide-react';
export const AutomatedAlerts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('active');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const [selectedAlert, setSelectedAlert] = useState<any | null>(null);
  const [selectedAlertType, setSelectedAlertType] = useState('price');
  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  // Alert data
  const alertsData = {
    active: [{
      id: 1,
      type: 'price',
      name: 'AAPL Price Alert',
      description: 'Alert when Apple stock price crosses $190',
      conditions: [{
        type: 'price',
        asset: 'AAPL',
        operator: 'above',
        value: 190
      }],
      frequency: 'once',
      channels: ['email', 'push'],
      createdAt: '2023-06-10',
      lastTriggered: null,
      priority: 'medium'
    }, {
      id: 2,
      type: 'technical',
      name: 'NVDA RSI Overbought',
      description: 'Alert when NVIDIA RSI(14) goes above 70',
      conditions: [{
        type: 'technical',
        asset: 'NVDA',
        indicator: 'RSI',
        params: '14',
        operator: 'above',
        value: 70
      }],
      frequency: 'every time',
      channels: ['push', 'sms'],
      createdAt: '2023-06-08',
      lastTriggered: '2023-06-15',
      priority: 'high'
    }, {
      id: 3,
      type: 'portfolio',
      name: 'Portfolio Drawdown',
      description: 'Alert when portfolio drawdown exceeds 5%',
      conditions: [{
        type: 'portfolio',
        metric: 'drawdown',
        operator: 'above',
        value: 5
      }],
      frequency: 'every time',
      channels: ['email', 'push', 'sms'],
      createdAt: '2023-05-20',
      lastTriggered: '2023-06-05',
      priority: 'high'
    }, {
      id: 4,
      type: 'news',
      name: 'Tesla News Alert',
      description: 'Alert on major Tesla news with sentiment analysis',
      conditions: [{
        type: 'news',
        asset: 'TSLA',
        sentiment: 'any',
        importance: 'high'
      }],
      frequency: 'every time',
      channels: ['email', 'push'],
      createdAt: '2023-06-01',
      lastTriggered: '2023-06-12',
      priority: 'medium'
    }, {
      id: 5,
      type: 'macro',
      name: 'Fed Rate Decision',
      description: 'Alert when Federal Reserve announces interest rate decision',
      conditions: [{
        type: 'macro',
        event: 'Fed Rate Decision',
        importance: 'high'
      }],
      frequency: 'every time',
      channels: ['email', 'push', 'sms'],
      createdAt: '2023-04-15',
      lastTriggered: '2023-06-14',
      priority: 'high'
    }],
    paused: [{
      id: 6,
      type: 'price',
      name: 'BTC Price Alert',
      description: 'Alert when Bitcoin price drops below $25,000',
      conditions: [{
        type: 'price',
        asset: 'BTC-USD',
        operator: 'below',
        value: 25000
      }],
      frequency: 'once',
      channels: ['email'],
      createdAt: '2023-05-05',
      lastTriggered: null,
      priority: 'medium',
      pausedAt: '2023-06-08'
    }, {
      id: 7,
      type: 'technical',
      name: 'SPY Golden Cross',
      description: 'Alert when SPY 50-day MA crosses above 200-day MA',
      conditions: [{
        type: 'technical',
        asset: 'SPY',
        indicator: 'MA Cross',
        params: '50,200',
        operator: 'above',
        value: 0
      }],
      frequency: 'once',
      channels: ['push'],
      createdAt: '2023-04-20',
      lastTriggered: null,
      priority: 'low',
      pausedAt: '2023-06-10'
    }],
    triggered: [{
      id: 8,
      type: 'price',
      name: 'MSFT Take Profit',
      description: 'Alert when Microsoft stock price reaches $350',
      conditions: [{
        type: 'price',
        asset: 'MSFT',
        operator: 'above',
        value: 350
      }],
      frequency: 'once',
      channels: ['email', 'push'],
      createdAt: '2023-05-15',
      triggeredAt: '2023-06-15',
      priority: 'medium'
    }, {
      id: 9,
      type: 'portfolio',
      name: 'Portfolio Value Milestone',
      description: 'Alert when portfolio value exceeds $25,000',
      conditions: [{
        type: 'portfolio',
        metric: 'value',
        operator: 'above',
        value: 25000
      }],
      frequency: 'once',
      channels: ['email', 'push', 'sms'],
      createdAt: '2023-01-10',
      triggeredAt: '2023-06-12',
      priority: 'medium'
    }, {
      id: 10,
      type: 'technical',
      name: 'QQQ Oversold',
      description: 'Alert when QQQ RSI(14) drops below 30',
      conditions: [{
        type: 'technical',
        asset: 'QQQ',
        indicator: 'RSI',
        params: '14',
        operator: 'below',
        value: 30
      }],
      frequency: 'every time',
      channels: ['push'],
      createdAt: '2023-04-05',
      triggeredAt: '2023-06-02',
      priority: 'high'
    }]
  };
  const templates = [{
    id: 'template1',
    name: 'Price Target Alert',
    description: 'Get notified when a stock reaches your target price',
    type: 'price',
    popularity: 4.8,
    usageCount: 1245
  }, {
    id: 'template2',
    name: 'Technical Indicator Alert',
    description: 'Alert based on technical indicators like RSI, MACD, or moving averages',
    type: 'technical',
    popularity: 4.5,
    usageCount: 876
  }, {
    id: 'template3',
    name: 'Portfolio Performance Alert',
    description: "Monitor your portfolio's performance metrics like drawdown or returns",
    type: 'portfolio',
    popularity: 4.3,
    usageCount: 654
  }, {
    id: 'template4',
    name: 'News Sentiment Alert',
    description: 'Get alerted on important news with AI sentiment analysis',
    type: 'news',
    popularity: 4.6,
    usageCount: 932
  }, {
    id: 'template5',
    name: 'Economic Events Alert',
    description: 'Stay informed about important economic events and announcements',
    type: 'macro',
    popularity: 4.4,
    usageCount: 789
  }];
  const handleOpenModal = (type: string) => {
    setModalType(type);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setModalType(null);
  };
  const handleAlertSelect = (alert: any) => {
    setSelectedAlert(alert);
    handleOpenModal('view');
  };
  const getAlertTypeIcon = (type: string) => {
    switch (type) {
      case 'price':
        return <DollarSignIcon className="h-4 w-4" />;
      case 'technical':
        return <BarChart3Icon className="h-4 w-4" />;
      case 'portfolio':
        return <TrendingUpIcon className="h-4 w-4" />;
      case 'news':
        return <GlobeIcon className="h-4 w-4" />;
      case 'macro':
        return <CalendarIcon className="h-4 w-4" />;
      default:
        return <BellIcon className="h-4 w-4" />;
    }
  };
  const getAlertTypeColor = (type: string) => {
    switch (type) {
      case 'price':
        return 'text-green-500 bg-green-500/10';
      case 'technical':
        return 'text-blue-500 bg-blue-500/10';
      case 'portfolio':
        return 'text-purple-500 bg-purple-500/10';
      case 'news':
        return 'text-yellow-500 bg-yellow-500/10';
      case 'macro':
        return 'text-orange-500 bg-orange-500/10';
      default:
        return 'text-gray-500 bg-gray-500/10';
    }
  };
  const getAlertPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-500 bg-red-500/10';
      case 'medium':
        return 'text-yellow-500 bg-yellow-500/10';
      case 'low':
        return 'text-blue-500 bg-blue-500/10';
      default:
        return 'text-gray-500 bg-gray-500/10';
    }
  };
  const getAlertPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return <AlertTriangleIcon className="h-3 w-3" />;
      case 'medium':
        return <BellIcon className="h-3 w-3" />;
      case 'low':
        return <InfoIcon className="h-3 w-3" />;
      default:
        return <BellIcon className="h-3 w-3" />;
    }
  };
  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case 'email':
        return <MailIcon className="h-3 w-3" />;
      case 'push':
        return <SmartphoneIcon className="h-3 w-3" />;
      case 'sms':
        return <MessageSquareIcon className="h-3 w-3" />;
      case 'slack':
        return <SlackIcon className="h-3 w-3" />;
      default:
        return <BellIcon className="h-3 w-3" />;
    }
  };
  const getChannelColor = (channel: string) => {
    switch (channel) {
      case 'email':
        return 'text-blue-500 bg-blue-500/10';
      case 'push':
        return 'text-green-500 bg-green-500/10';
      case 'sms':
        return 'text-purple-500 bg-purple-500/10';
      case 'slack':
        return 'text-yellow-500 bg-yellow-500/10';
      default:
        return 'text-gray-500 bg-gray-500/10';
    }
  };
  const filteredAlerts = (tab: string) => {
    const alerts = alertsData[tab as keyof typeof alertsData] || [];
    return alerts.filter(alert => alert.name.toLowerCase().includes(searchQuery.toLowerCase()) || alert.description.toLowerCase().includes(searchQuery.toLowerCase()));
  };
  if (isLoading) {
    return <div className="flex flex-col items-center justify-center h-64">
        <div className="bg-yellow-500/10 p-3 rounded-full">
          <RefreshCwIcon className="h-8 w-8 text-yellow-500 animate-spin" />
        </div>
        <p className="text-gray-400 mt-4">Loading alerts...</p>
      </div>;
  }
  return <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-[#151822] p-6 rounded-xl border border-yellow-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 relative z-10">
          <div>
            <h1 className="text-xl font-bold mb-2 flex items-center gap-2">
              <BellIcon className="h-5 w-5 text-yellow-500" />
              <span>Automated Alerts</span>
            </h1>
            <p className="text-gray-400">
              Set up custom alerts for price movements, technical indicators,
              and more
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 px-3 py-1 rounded-lg text-sm flex items-center gap-1 transition-all duration-200" onClick={() => handleOpenModal('create')}>
              <PlusIcon className="h-4 w-4" />
              <span>New Alert</span>
            </button>
            <button className="bg-[#1A1F2E] hover:bg-[#262B3D] px-3 py-1 rounded-lg text-sm flex items-center gap-1 transition-all duration-200" onClick={() => handleOpenModal('templates')}>
              <DownloadIcon className="h-4 w-4" />
              <span>Templates</span>
            </button>
            <button className="bg-[#1A1F2E] hover:bg-[#262B3D] px-3 py-1 rounded-lg text-sm flex items-center gap-1 transition-all duration-200" onClick={() => handleOpenModal('settings')}>
              <SettingsIcon className="h-4 w-4" />
              <span>Settings</span>
            </button>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div className="border-b border-gray-800/50">
        <div className="flex space-x-4 overflow-x-auto hide-scrollbar">
          <button className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === 'active' ? 'border-yellow-500 text-yellow-500' : 'border-transparent text-gray-400 hover:text-white'} transition-colors duration-200`} onClick={() => setActiveTab('active')}>
            Active Alerts
          </button>
          <button className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === 'paused' ? 'border-yellow-500 text-yellow-500' : 'border-transparent text-gray-400 hover:text-white'} transition-colors duration-200`} onClick={() => setActiveTab('paused')}>
            Paused Alerts
          </button>
          <button className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === 'triggered' ? 'border-yellow-500 text-yellow-500' : 'border-transparent text-gray-400 hover:text-white'} transition-colors duration-200`} onClick={() => setActiveTab('triggered')}>
            Triggered History
          </button>
        </div>
      </div>
      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="relative flex-grow max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input type="text" placeholder="Search alerts..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="bg-[#1A1F2E] w-full rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/50 border border-gray-800/30 hover:border-gray-700/50 focus:border-yellow-500/30" />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
          <select className="bg-[#1A1F2E] rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/50 border border-gray-800/30 hover:border-gray-700/50 focus:border-yellow-500/30">
            <option value="all">All Types</option>
            <option value="price">Price Alerts</option>
            <option value="technical">Technical Alerts</option>
            <option value="portfolio">Portfolio Alerts</option>
            <option value="news">News Alerts</option>
            <option value="macro">Economic Alerts</option>
          </select>
          <button className="bg-[#1A1F2E] px-3 py-2 rounded-lg text-sm flex items-center gap-1 hover:bg-[#262B3D] transition-all duration-200 border border-gray-800/30">
            <FilterIcon className="h-4 w-4" />
            <span>Filters</span>
          </button>
          <button className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 px-3 py-2 rounded-lg text-sm flex items-center gap-1 transition-all duration-200" onClick={() => handleOpenModal('create')}>
            <PlusIcon className="h-4 w-4" />
            <span>New Alert</span>
          </button>
        </div>
      </div>
      {/* Content based on active tab */}
      <div className="py-2">
        {activeTab === 'active' && <div className="space-y-4">
            {filteredAlerts('active').length > 0 ? filteredAlerts('active').map(alert => <div key={alert.id} className="bg-[#151822] p-5 rounded-xl border border-gray-800/30 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg cursor-pointer" onClick={() => handleAlertSelect(alert)}>
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${getAlertTypeColor(alert.type)}`}>
                      {getAlertTypeIcon(alert.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{alert.name}</h4>
                        <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${getAlertPriorityColor(alert.priority)}`}>
                          {getAlertPriorityIcon(alert.priority)}
                          <span className="capitalize">{alert.priority}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300 mt-1">
                        {alert.description}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        {alert.channels.map((channel: string) => <div key={channel} className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${getChannelColor(channel)}`}>
                            {getChannelIcon(channel)}
                            <span className="capitalize">{channel}</span>
                          </div>)}
                        <div className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[#1A1F2E] text-gray-400">
                          <ClockIcon className="h-3 w-3" />
                          <span>{alert.frequency}</span>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-between items-center">
                        <div className="text-xs text-gray-400">
                          {alert.lastTriggered ? <>Last triggered: {alert.lastTriggered}</> : <>Created: {alert.createdAt}</>}
                        </div>
                        <div className="flex gap-2">
                          <button className="bg-[#1A1F2E] hover:bg-[#262B3D] p-1 rounded text-gray-400 hover:text-white transition-colors" onClick={e => {
                    e.stopPropagation();
                    // Pause alert logic
                  }}>
                            <BellOffIcon className="h-4 w-4" />
                          </button>
                          <button className="bg-[#1A1F2E] hover:bg-[#262B3D] p-1 rounded text-gray-400 hover:text-white transition-colors" onClick={e => {
                    e.stopPropagation();
                    // Edit alert logic
                    setSelectedAlert(alert);
                    handleOpenModal('edit');
                  }}>
                            <EditIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>) : <div className="bg-[#151822] p-12 rounded-xl border border-gray-800/30 text-center">
                <div className="bg-yellow-500/10 p-4 rounded-full mx-auto w-fit mb-4">
                  <BellIcon className="h-8 w-8 text-yellow-500" />
                </div>
                <h3 className="text-lg font-medium mb-2">
                  No active alerts found
                </h3>
                <p className="text-gray-400 mb-6">
                  {searchQuery ? `No alerts matching "${searchQuery}" were found.` : "You don't have any active alerts set up yet."}
                </p>
                <button className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 px-4 py-2 rounded-lg text-sm flex items-center gap-2 mx-auto transition-all duration-200" onClick={() => handleOpenModal('create')}>
                  <PlusIcon className="h-4 w-4" />
                  <span>Create New Alert</span>
                </button>
              </div>}
          </div>}
        {activeTab === 'paused' && <div className="space-y-4">
            {filteredAlerts('paused').length > 0 ? filteredAlerts('paused').map(alert => <div key={alert.id} className="bg-[#151822] p-5 rounded-xl border border-gray-800/30 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg cursor-pointer opacity-75" onClick={() => handleAlertSelect(alert)}>
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${getAlertTypeColor(alert.type)}`}>
                      {getAlertTypeIcon(alert.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">{alert.name}</h4>
                          <span className="bg-gray-500/10 text-gray-400 text-xs px-2 py-0.5 rounded-full">
                            Paused
                          </span>
                        </div>
                        <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${getAlertPriorityColor(alert.priority)}`}>
                          {getAlertPriorityIcon(alert.priority)}
                          <span className="capitalize">{alert.priority}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300 mt-1">
                        {alert.description}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        {alert.channels.map((channel: string) => <div key={channel} className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${getChannelColor(channel)}`}>
                            {getChannelIcon(channel)}
                            <span className="capitalize">{channel}</span>
                          </div>)}
                        <div className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[#1A1F2E] text-gray-400">
                          <ClockIcon className="h-3 w-3" />
                          <span>{alert.frequency}</span>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-between items-center">
                        <div className="text-xs text-gray-400">
                          Paused on: {alert.pausedAt}
                        </div>
                        <div className="flex gap-2">
                          <button className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 p-1 rounded transition-colors" onClick={e => {
                    e.stopPropagation();
                    // Resume alert logic
                  }}>
                            <BellIcon className="h-4 w-4" />
                          </button>
                          <button className="bg-[#1A1F2E] hover:bg-[#262B3D] p-1 rounded text-gray-400 hover:text-white transition-colors" onClick={e => {
                    e.stopPropagation();
                    // Edit alert logic
                    setSelectedAlert(alert);
                    handleOpenModal('edit');
                  }}>
                            <EditIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>) : <div className="bg-[#151822] p-12 rounded-xl border border-gray-800/30 text-center">
                <div className="bg-gray-500/10 p-4 rounded-full mx-auto w-fit mb-4">
                  <BellOffIcon className="h-8 w-8 text-gray-500" />
                </div>
                <h3 className="text-lg font-medium mb-2">No paused alerts</h3>
                <p className="text-gray-400 mb-6">
                  {searchQuery ? `No paused alerts matching "${searchQuery}" were found.` : "You don't have any paused alerts at the moment."}
                </p>
              </div>}
          </div>}
        {activeTab === 'triggered' && <div className="space-y-4">
            {filteredAlerts('triggered').length > 0 ? filteredAlerts('triggered').map(alert => <div key={alert.id} className="bg-[#151822] p-5 rounded-xl border border-gray-800/30 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg cursor-pointer" onClick={() => handleAlertSelect(alert)}>
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${getAlertTypeColor(alert.type)}`}>
                      {getAlertTypeIcon(alert.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">{alert.name}</h4>
                          <span className="bg-green-500/10 text-green-500 text-xs px-2 py-0.5 rounded-full">
                            Triggered
                          </span>
                        </div>
                        <div className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${getAlertPriorityColor(alert.priority)}`}>
                          {getAlertPriorityIcon(alert.priority)}
                          <span className="capitalize">{alert.priority}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300 mt-1">
                        {alert.description}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        {alert.channels.map((channel: string) => <div key={channel} className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${getChannelColor(channel)}`}>
                            {getChannelIcon(channel)}
                            <span className="capitalize">{channel}</span>
                          </div>)}
                        <div className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[#1A1F2E] text-gray-400">
                          <ClockIcon className="h-3 w-3" />
                          <span>{alert.frequency}</span>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-between items-center">
                        <div className="text-xs text-gray-400">
                          Triggered on: {alert.triggeredAt}
                        </div>
                        <div className="flex gap-2">
                          <button className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 p-1 rounded transition-colors" onClick={e => {
                    e.stopPropagation();
                    // Recreate alert logic
                  }}>
                            <RefreshCwIcon className="h-4 w-4" />
                          </button>
                          <button className="bg-[#1A1F2E] hover:bg-[#262B3D] p-1 rounded text-gray-400 hover:text-red-500 transition-colors" onClick={e => {
                    e.stopPropagation();
                    // Delete alert logic
                  }}>
                            <TrashIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>) : <div className="bg-[#151822] p-12 rounded-xl border border-gray-800/30 text-center">
                <div className="bg-gray-500/10 p-4 rounded-full mx-auto w-fit mb-4">
                  <CheckCircleIcon className="h-8 w-8 text-gray-500" />
                </div>
                <h3 className="text-lg font-medium mb-2">
                  No triggered alerts
                </h3>
                <p className="text-gray-400 mb-6">
                  {searchQuery ? `No triggered alerts matching "${searchQuery}" were found.` : "You don't have any triggered alerts in your history."}
                </p>
              </div>}
          </div>}
      </div>
      {/* Modals */}
      {showModal && <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#151822] rounded-xl border border-gray-800/50 w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-fadeIn">
            <div className="sticky top-0 bg-[#151822] border-b border-gray-800/50 p-4 flex justify-between items-center z-10">
              <h3 className="font-medium text-lg">
                {modalType === 'create' && 'Create New Alert'}
                {modalType === 'edit' && 'Edit Alert'}
                {modalType === 'view' && 'Alert Details'}
                {modalType === 'templates' && 'Alert Templates'}
                {modalType === 'settings' && 'Alert Settings'}
              </h3>
              <button onClick={handleCloseModal} className="text-gray-400 hover:text-white transition-colors">
                <XIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              {modalType === 'create' && <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">
                      Alert Type
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <button className={`p-3 rounded-lg flex flex-col items-center gap-2 transition-all ${selectedAlertType === 'price' ? 'bg-green-500/10 border border-green-500/30' : 'bg-[#1A1F2E] border border-gray-800/30 hover:border-green-500/30'}`} onClick={() => setSelectedAlertType('price')}>
                        <div className="bg-green-500/10 p-2 rounded-full">
                          <DollarSignIcon className="h-5 w-5 text-green-500" />
                        </div>
                        <span className="text-sm font-medium">Price Alert</span>
                      </button>
                      <button className={`p-3 rounded-lg flex flex-col items-center gap-2 transition-all ${selectedAlertType === 'technical' ? 'bg-blue-500/10 border border-blue-500/30' : 'bg-[#1A1F2E] border border-gray-800/30 hover:border-blue-500/30'}`} onClick={() => setSelectedAlertType('technical')}>
                        <div className="bg-blue-500/10 p-2 rounded-full">
                          <BarChart3Icon className="h-5 w-5 text-blue-500" />
                        </div>
                        <span className="text-sm font-medium">Technical</span>
                      </button>
                      <button className={`p-3 rounded-lg flex flex-col items-center gap-2 transition-all ${selectedAlertType === 'portfolio' ? 'bg-purple-500/10 border border-purple-500/30' : 'bg-[#1A1F2E] border border-gray-800/30 hover:border-purple-500/30'}`} onClick={() => setSelectedAlertType('portfolio')}>
                        <div className="bg-purple-500/10 p-2 rounded-full">
                          <TrendingUpIcon className="h-5 w-5 text-purple-500" />
                        </div>
                        <span className="text-sm font-medium">Portfolio</span>
                      </button>
                      <button className={`p-3 rounded-lg flex flex-col items-center gap-2 transition-all ${selectedAlertType === 'news' ? 'bg-yellow-500/10 border border-yellow-500/30' : 'bg-[#1A1F2E] border border-gray-800/30 hover:border-yellow-500/30'}`} onClick={() => setSelectedAlertType('news')}>
                        <div className="bg-yellow-500/10 p-2 rounded-full">
                          <GlobeIcon className="h-5 w-5 text-yellow-500" />
                        </div>
                        <span className="text-sm font-medium">News</span>
                      </button>
                      <button className={`p-3 rounded-lg flex flex-col items-center gap-2 transition-all ${selectedAlertType === 'macro' ? 'bg-orange-500/10 border border-orange-500/30' : 'bg-[#1A1F2E] border border-gray-800/30 hover:border-orange-500/30'}`} onClick={() => setSelectedAlertType('macro')}>
                        <div className="bg-orange-500/10 p-2 rounded-full">
                          <CalendarIcon className="h-5 w-5 text-orange-500" />
                        </div>
                        <span className="text-sm font-medium">Economic</span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">
                      Alert Name
                    </label>
                    <input type="text" placeholder="Enter alert name" className="w-full bg-[#1A1F2E] rounded-lg p-2 text-sm border border-gray-800/30 focus:outline-none focus:ring-2 focus:ring-yellow-500/30" />
                  </div>
                  {selectedAlertType === 'price' && <>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">
                          Symbol
                        </label>
                        <input type="text" placeholder="e.g., AAPL, MSFT, BTC-USD" className="w-full bg-[#1A1F2E] rounded-lg p-2 text-sm border border-gray-800/30 focus:outline-none focus:ring-2 focus:ring-yellow-500/30" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">
                            Condition
                          </label>
                          <select className="w-full bg-[#1A1F2E] rounded-lg p-2 text-sm border border-gray-800/30 focus:outline-none focus:ring-2 focus:ring-yellow-500/30">
                            <option value="above">Above</option>
                            <option value="below">Below</option>
                            <option value="rises">Rises by</option>
                            <option value="falls">Falls by</option>
                            <option value="crosses">Crosses</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">
                            Value
                          </label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                              $
                            </span>
                            <input type="number" placeholder="0.00" className="w-full bg-[#1A1F2E] rounded-lg pl-8 pr-4 py-2 text-sm border border-gray-800/30 focus:outline-none focus:ring-2 focus:ring-yellow-500/30" />
                          </div>
                        </div>
                      </div>
                    </>}
                  {selectedAlertType === 'technical' && <>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">
                          Symbol
                        </label>
                        <input type="text" placeholder="e.g., AAPL, MSFT, BTC-USD" className="w-full bg-[#1A1F2E] rounded-lg p-2 text-sm border border-gray-800/30 focus:outline-none focus:ring-2 focus:ring-yellow-500/30" />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">
                          Indicator
                        </label>
                        <select className="w-full bg-[#1A1F2E] rounded-lg p-2 text-sm border border-gray-800/30 focus:outline-none focus:ring-2 focus:ring-yellow-500/30">
                          <option value="rsi">RSI</option>
                          <option value="macd">MACD</option>
                          <option value="ma_cross">Moving Average Cross</option>
                          <option value="bollinger">Bollinger Bands</option>
                          <option value="volume">Volume</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">
                            Parameters
                          </label>
                          <input type="text" placeholder="e.g., 14, 50,200" className="w-full bg-[#1A1F2E] rounded-lg p-2 text-sm border border-gray-800/30 focus:outline-none focus:ring-2 focus:ring-yellow-500/30" />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-400 mb-1">
                            Condition
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            <select className="bg-[#1A1F2E] rounded-lg p-2 text-sm border border-gray-800/30 focus:outline-none focus:ring-2 focus:ring-yellow-500/30">
                              <option value="above">Above</option>
                              <option value="below">Below</option>
                              <option value="crosses_above">
                                Crosses Above
                              </option>
                              <option value="crosses_below">
                                Crosses Below
                              </option>
                            </select>
                            <input type="text" placeholder="Value" className="bg-[#1A1F2E] rounded-lg p-2 text-sm border border-gray-800/30 focus:outline-none focus:ring-2 focus:ring-yellow-500/30" />
                          </div>
                        </div>
                      </div>
                    </>}
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">
                      Frequency
                    </label>
                    <select className="w-full bg-[#1A1F2E] rounded-lg p-2 text-sm border border-gray-800/30 focus:outline-none focus:ring-2 focus:ring-yellow-500/30">
                      <option value="once">
                        Once (disable after triggering)
                      </option>
                      <option value="every_time">
                        Every time condition is met
                      </option>
                      <option value="daily">Once per day</option>
                      <option value="weekly">Once per week</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">
                      Notification Channels
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="email" className="rounded bg-[#1A1F2E] border-gray-800/50 text-yellow-500 focus:ring-yellow-500/30" />
                        <label htmlFor="email" className="text-sm">
                          Email
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="push" className="rounded bg-[#1A1F2E] border-gray-800/50 text-yellow-500 focus:ring-yellow-500/30" />
                        <label htmlFor="push" className="text-sm">
                          Push Notification
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="sms" className="rounded bg-[#1A1F2E] border-gray-800/50 text-yellow-500 focus:ring-yellow-500/30" />
                        <label htmlFor="sms" className="text-sm">
                          SMS
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">
                      Priority
                    </label>
                    <select className="w-full bg-[#1A1F2E] rounded-lg p-2 text-sm border border-gray-800/30 focus:outline-none focus:ring-2 focus:ring-yellow-500/30">
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                  <div className="flex justify-end gap-3">
                    <button className="bg-[#1A1F2E] hover:bg-[#262B3D] px-4 py-2 rounded-lg text-sm transition-all duration-200" onClick={handleCloseModal}>
                      Cancel
                    </button>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors" onClick={handleCloseModal}>
                      Create Alert
                    </button>
                  </div>
                </div>}
              {modalType === 'view' && selectedAlert && <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg ${getAlertTypeColor(selectedAlert.type)}`}>
                      {getAlertTypeIcon(selectedAlert.type)}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">
                        {selectedAlert.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {selectedAlert.description}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#1A1F2E] p-4 rounded-lg">
                    <h4 className="font-medium mb-3">Alert Conditions</h4>
                    <div className="space-y-3">
                      {selectedAlert.conditions.map((condition: any, index: number) => <div key={index} className="bg-[#151822] p-3 rounded-lg border border-gray-800/30">
                            {condition.type === 'price' && <div className="flex items-center gap-2 text-sm">
                                <span className="font-medium">
                                  {condition.asset}
                                </span>
                                <span className="text-gray-400">price</span>
                                <span>{condition.operator}</span>
                                <span className="font-medium">
                                  ${condition.value}
                                </span>
                              </div>}
                            {condition.type === 'technical' && <div className="flex items-center gap-2 text-sm">
                                <span className="font-medium">
                                  {condition.asset}
                                </span>
                                <span className="text-gray-400">
                                  {condition.indicator}({condition.params})
                                </span>
                                <span>{condition.operator}</span>
                                <span className="font-medium">
                                  {condition.value}
                                </span>
                              </div>}
                            {condition.type === 'portfolio' && <div className="flex items-center gap-2 text-sm">
                                <span className="text-gray-400">Portfolio</span>
                                <span className="font-medium">
                                  {condition.metric}
                                </span>
                                <span>{condition.operator}</span>
                                <span className="font-medium">
                                  {condition.metric === 'drawdown' ? `${condition.value}%` : `$${condition.value}`}
                                </span>
                              </div>}
                            {condition.type === 'news' && <div className="flex items-center gap-2 text-sm">
                                <span className="text-gray-400">
                                  News about
                                </span>
                                <span className="font-medium">
                                  {condition.asset}
                                </span>
                                <span className="text-gray-400">with</span>
                                <span className="font-medium">
                                  {condition.sentiment === 'any' ? 'any sentiment' : `${condition.sentiment} sentiment`}
                                </span>
                                <span className="text-gray-400">and</span>
                                <span className="font-medium">
                                  {condition.importance} importance
                                </span>
                              </div>}
                            {condition.type === 'macro' && <div className="flex items-center gap-2 text-sm">
                                <span className="text-gray-400">
                                  Economic event:
                                </span>
                                <span className="font-medium">
                                  {condition.event}
                                </span>
                                <span className="text-gray-400">with</span>
                                <span className="font-medium">
                                  {condition.importance} importance
                                </span>
                              </div>}
                          </div>)}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-[#1A1F2E] p-4 rounded-lg">
                      <h4 className="font-medium mb-3">Alert Settings</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Frequency:</span>
                          <span>{selectedAlert.frequency}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Priority:</span>
                          <span className="capitalize">
                            {selectedAlert.priority}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Created:</span>
                          <span>{selectedAlert.createdAt}</span>
                        </div>
                        {selectedAlert.lastTriggered && <div className="flex justify-between">
                            <span className="text-gray-400">
                              Last Triggered:
                            </span>
                            <span>{selectedAlert.lastTriggered}</span>
                          </div>}
                        {selectedAlert.pausedAt && <div className="flex justify-between">
                            <span className="text-gray-400">Paused On:</span>
                            <span>{selectedAlert.pausedAt}</span>
                          </div>}
                      </div>
                    </div>
                    <div className="bg-[#1A1F2E] p-4 rounded-lg">
                      <h4 className="font-medium mb-3">
                        Notification Channels
                      </h4>
                      <div className="space-y-2">
                        {selectedAlert.channels.map((channel: string) => <div key={channel} className="flex items-center gap-2 text-sm">
                            <div className={`p-1 rounded-full ${getChannelColor(channel)}`}>
                              {getChannelIcon(channel)}
                            </div>
                            <span className="capitalize">{channel}</span>
                          </div>)}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-3">
                    {selectedAlert.triggeredAt ? <>
                        <button className="bg-[#1A1F2E] hover:bg-[#262B3D] px-4 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-1" onClick={handleCloseModal}>
                          <TrashIcon className="h-4 w-4" />
                          <span>Delete</span>
                        </button>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1" onClick={handleCloseModal}>
                          <RefreshCwIcon className="h-4 w-4" />
                          <span>Recreate</span>
                        </button>
                      </> : selectedAlert.pausedAt ? <>
                        <button className="bg-[#1A1F2E] hover:bg-[#262B3D] px-4 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-1" onClick={handleCloseModal}>
                          <EditIcon className="h-4 w-4" />
                          <span>Edit</span>
                        </button>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1" onClick={handleCloseModal}>
                          <BellIcon className="h-4 w-4" />
                          <span>Resume</span>
                        </button>
                      </> : <>
                        <button className="bg-[#1A1F2E] hover:bg-[#262B3D] px-4 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-1" onClick={handleCloseModal}>
                          <BellOffIcon className="h-4 w-4" />
                          <span>Pause</span>
                        </button>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1" onClick={handleCloseModal}>
                          <EditIcon className="h-4 w-4" />
                          <span>Edit</span>
                        </button>
                      </>}
                  </div>
                </div>}
              {modalType === 'templates' && <div className="space-y-6">
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input type="text" placeholder="Search templates..." className="bg-[#1A1F2E] w-full rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/50 border border-gray-800/30 hover:border-gray-700/50 focus:border-yellow-500/30" />
                  </div>
                  <div className="space-y-4">
                    {templates.map(template => <div key={template.id} className="bg-[#1A1F2E] p-4 rounded-lg border border-gray-800/30 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg cursor-pointer">
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-lg ${getAlertTypeColor(template.type)}`}>
                            {getAlertTypeIcon(template.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{template.name}</h4>
                              <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
                                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm">
                                  {template.popularity}
                                </span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-300 mt-1">
                              {template.description}
                            </p>
                            <div className="mt-3 flex justify-between items-center">
                              <div className="text-xs text-gray-400">
                                {template.usageCount} users using this template
                              </div>
                              <button className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 px-3 py-1 rounded-lg text-xs transition-colors" onClick={() => {
                        setSelectedAlertType(template.type);
                        handleCloseModal();
                        handleOpenModal('create');
                      }}>
                                Use Template
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>)}
                  </div>
                </div>}
              {modalType === 'settings' && <div className="space-y-6">
                  <div className="bg-[#1A1F2E] p-4 rounded-lg">
                    <h4 className="font-medium mb-4">Notification Settings</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <MailIcon className="h-4 w-4 text-blue-500" />
                            <span className="font-medium">
                              Email Notifications
                            </span>
                          </div>
                          <p className="text-sm text-gray-400 mt-1">
                            Receive alerts via email
                          </p>
                        </div>
                        <button className="text-yellow-500">
                          <ToggleRightIcon className="h-6 w-6" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <SmartphoneIcon className="h-4 w-4 text-green-500" />
                            <span className="font-medium">
                              Push Notifications
                            </span>
                          </div>
                          <p className="text-sm text-gray-400 mt-1">
                            Receive alerts on your devices
                          </p>
                        </div>
                        <button className="text-yellow-500">
                          <ToggleRightIcon className="h-6 w-6" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <MessageSquareIcon className="h-4 w-4 text-purple-500" />
                            <span className="font-medium">
                              SMS Notifications
                            </span>
                            <span className="bg-yellow-500/10 text-yellow-400 text-xs px-2 py-0.5 rounded-full">
                              Premium
                            </span>
                          </div>
                          <p className="text-sm text-gray-400 mt-1">
                            Receive alerts via text message
                          </p>
                        </div>
                        <button className="text-yellow-500">
                          <ToggleRightIcon className="h-6 w-6" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <SlackIcon className="h-4 w-4 text-yellow-500" />
                            <span className="font-medium">
                              Slack Integration
                            </span>
                          </div>
                          <p className="text-sm text-gray-400 mt-1">
                            Receive alerts in your Slack workspace
                          </p>
                        </div>
                        <button className="text-gray-400">
                          <ToggleLeftIcon className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#1A1F2E] p-4 rounded-lg">
                    <h4 className="font-medium mb-4">Alert Preferences</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Quiet Hours</div>
                          <p className="text-sm text-gray-400 mt-1">
                            Don't send alerts during these hours
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <select className="bg-[#151822] rounded-lg p-1 text-sm border border-gray-800/30 focus:outline-none focus:ring-1 focus:ring-yellow-500/30">
                            <option value="22">10:00 PM</option>
                            <option value="23">11:00 PM</option>
                            <option value="0">12:00 AM</option>
                            <option value="1">1:00 AM</option>
                          </select>
                          <span className="text-sm">to</span>
                          <select className="bg-[#151822] rounded-lg p-1 text-sm border border-gray-800/30 focus:outline-none focus:ring-1 focus:ring-yellow-500/30">
                            <option value="6">6:00 AM</option>
                            <option value="7">7:00 AM</option>
                            <option value="8">8:00 AM</option>
                            <option value="9">9:00 AM</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">
                            Combine Similar Alerts
                          </div>
                          <p className="text-sm text-gray-400 mt-1">
                            Group similar alerts together
                          </p>
                        </div>
                        <button className="text-yellow-500">
                          <ToggleRightIcon className="h-6 w-6" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Alert Sound</div>
                          <p className="text-sm text-gray-400 mt-1">
                            Play sound when alerts are triggered
                          </p>
                        </div>
                        <button className="text-yellow-500">
                          <ToggleRightIcon className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#1A1F2E] p-4 rounded-lg">
                    <h4 className="font-medium mb-4">Data Sources</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">
                            Real-time Market Data
                          </div>
                          <p className="text-sm text-gray-400 mt-1">
                            Use real-time data for price alerts
                          </p>
                        </div>
                        <button className="text-yellow-500">
                          <ToggleRightIcon className="h-6 w-6" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">News Sources</div>
                          <p className="text-sm text-gray-400 mt-1">
                            Select news providers for news alerts
                          </p>
                        </div>
                        <button className="bg-[#151822] hover:bg-[#0B0E15] px-3 py-1 rounded text-sm transition-colors">
                          Configure
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">
                              AI-Enhanced Alerts
                            </span>
                            <span className="bg-yellow-500/10 text-yellow-400 text-xs px-2 py-0.5 rounded-full">
                              Premium
                            </span>
                          </div>
                          <p className="text-sm text-gray-400 mt-1">
                            Use AI to reduce false positives and enhance
                            relevance
                          </p>
                        </div>
                        <button className="text-yellow-500">
                          <ToggleRightIcon className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-3">
                    <button className="bg-[#1A1F2E] hover:bg-[#262B3D] px-4 py-2 rounded-lg text-sm transition-all duration-200" onClick={handleCloseModal}>
                      Cancel
                    </button>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors" onClick={handleCloseModal}>
                      Save Settings
                    </button>
                  </div>
                </div>}
            </div>
          </div>
        </div>}
      {/* Custom styles */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>;
};
const MessageSquareIcon = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>;