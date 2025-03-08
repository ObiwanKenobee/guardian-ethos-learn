
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  BarChart,
  Users,
  Shield,
  BookOpen,
  GraduationCap,
  Building,
  FileText,
  Flask,
  Settings,
  User,
  LogOut
} from 'lucide-react';

const DashboardPage = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // If not authenticated, redirect to login
  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  // Helper to get role-specific icon
  const getRoleIcon = () => {
    switch (user?.role) {
      case 'admin': return <Shield className="h-8 w-8 text-red-500" />;
      case 'educator': return <GraduationCap className="h-8 w-8 text-blue-500" />;
      case 'learner': return <BookOpen className="h-8 w-8 text-green-500" />;
      case 'organization': return <Building className="h-8 w-8 text-purple-500" />;
      case 'researcher': return <Flask className="h-8 w-8 text-amber-500" />;
      default: return <User className="h-8 w-8 text-gray-500" />;
    }
  };

  // Role-specific dashboard content
  const getDashboardContent = () => {
    switch (user?.role) {
      case 'admin':
        return <AdminDashboard />;
      case 'educator':
        return <EducatorDashboard />;
      case 'learner':
        return <LearnerDashboard />;
      case 'organization':
        return <OrganizationDashboard />;
      case 'researcher':
        return <ResearcherDashboard />;
      default:
        return <div>Unknown role dashboard</div>;
    }
  };

  return (
    <div className="min-h-screen bg-guardian-50">
      <header className="bg-white border-b border-guardian-200 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Shield className="h-8 w-8 text-guardian-600" />
            <h1 className="text-xl font-semibold text-guardian-800">Guardian IO</h1>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="text-right mr-2">
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-guardian-600 capitalize">{user?.role}</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-guardian-100 overflow-hidden">
              {user?.avatar ? (
                <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-guardian-200 text-guardian-700">
                  {user?.name.charAt(0)}
                </div>
              )}
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={logout}
              title="Logout"
            >
              <LogOut size={18} />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-guardian-800 mb-2">Welcome, {user?.name}</h2>
          <p className="text-guardian-600">
            Your {user?.role} dashboard gives you access to role-specific features and insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profile Status</CardTitle>
              <User className="h-4 w-4 text-guardian-600" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  {user?.avatar ? (
                    <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-guardian-200 text-guardian-700">
                      {user?.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-2xl font-bold">{user?.name}</p>
                  <p className="text-xs text-guardian-600 capitalize">{user?.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Access Level</CardTitle>
              <Shield className="h-4 w-4 text-guardian-600" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                {getRoleIcon()}
                <div>
                  <p className="text-2xl font-bold capitalize">{user?.role}</p>
                  <p className="text-xs text-guardian-600">Full {user?.role} privileges</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Account Created</CardTitle>
              <FileText className="h-4 w-4 text-guardian-600" />
            </CardHeader>
            <CardContent>
              <div>
                <p className="text-2xl font-bold">
                  {user?.createdAt.toLocaleDateString ? 
                    user.createdAt.toLocaleDateString() : 
                    new Date(user?.createdAt).toLocaleDateString()}
                </p>
                <p className="text-xs text-guardian-600">Account active</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {getDashboardContent()}
      </main>
    </div>
  );
};

const AdminDashboard = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-guardian-800 mb-4">Administrator Dashboard</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">1,248</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">74</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Platform Uptime</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">99.9%</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Security Status</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-green-600">Secure</p>
        </CardContent>
      </Card>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>System Analytics</CardTitle>
          <CardDescription>Platform usage and performance metrics</CardDescription>
        </CardHeader>
        <CardContent className="h-80 flex items-center justify-center bg-guardian-50 rounded">
          <div className="text-center text-guardian-600">
            <BarChart className="h-16 w-16 mx-auto mb-4 opacity-70" />
            <p>Analytics visualization would display here</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>Manage platform users</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b">
              <div className="flex items-center space-x-2">
                <Users size={16} className="text-guardian-600" />
                <span>Manage Roles</span>
              </div>
              <Button variant="ghost" size="sm">Configure</Button>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div className="flex items-center space-x-2">
                <Shield size={16} className="text-guardian-600" />
                <span>Security Policies</span>
              </div>
              <Button variant="ghost" size="sm">Configure</Button>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-2">
                <Settings size={16} className="text-guardian-600" />
                <span>System Settings</span>
              </div>
              <Button variant="ghost" size="sm">Configure</Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Admin Control Panel</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
);

const EducatorDashboard = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-guardian-800 mb-4">Educator Dashboard</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>My Courses</CardTitle>
          <CardDescription>Courses you're teaching</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b">
              <span>AI Ethics 101</span>
              <div className="text-sm bg-green-100 text-green-800 px-2 py-0.5 rounded">Active</div>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <span>Cybersecurity Fundamentals</span>
              <div className="text-sm bg-green-100 text-green-800 px-2 py-0.5 rounded">Active</div>
            </div>
            <div className="flex items-center justify-between py-2">
              <span>Digital Transformation</span>
              <div className="text-sm bg-amber-100 text-amber-800 px-2 py-0.5 rounded">Draft</div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Create New Course</Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Student Progress</CardTitle>
          <CardDescription>Overall completion rates</CardDescription>
        </CardHeader>
        <CardContent className="h-60 flex items-center justify-center bg-guardian-50 rounded">
          <div className="text-center text-guardian-600">
            <BarChart className="h-16 w-16 mx-auto mb-4 opacity-70" />
            <p>Progress chart would display here</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">View Detailed Analytics</Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Sessions</CardTitle>
          <CardDescription>Your scheduled teaching sessions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="py-2 border-b">
              <div className="flex justify-between">
                <span className="font-medium">AI Ethics Workshop</span>
                <span className="text-sm text-guardian-600">Today</span>
              </div>
              <p className="text-sm text-guardian-600">2:00 PM - 4:00 PM</p>
            </div>
            <div className="py-2 border-b">
              <div className="flex justify-between">
                <span className="font-medium">Office Hours</span>
                <span className="text-sm text-guardian-600">Tomorrow</span>
              </div>
              <p className="text-sm text-guardian-600">10:00 AM - 12:00 PM</p>
            </div>
            <div className="py-2">
              <div className="flex justify-between">
                <span className="font-medium">Project Review</span>
                <span className="text-sm text-guardian-600">Friday</span>
              </div>
              <p className="text-sm text-guardian-600">1:00 PM - 3:00 PM</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Schedule Session</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
);

const LearnerDashboard = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-guardian-800 mb-4">Learner Dashboard</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>My Learning Path</CardTitle>
          <CardDescription>AI-recommended courses based on your interests</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-lg border border-guardian-200 hover:bg-guardian-50">
              <div className="rounded-md bg-blue-100 p-2 text-blue-700">
                <Shield size={24} />
              </div>
              <div>
                <h4 className="font-medium">AI Ethics and Society</h4>
                <p className="text-sm text-guardian-600 mt-1">Learn about the ethical implications of AI in modern society</p>
                <div className="mt-2 flex items-center">
                  <div className="w-48 h-2 rounded-full bg-guardian-100 overflow-hidden">
                    <div className="h-full bg-guardian-600" style={{ width: '25%' }}></div>
                  </div>
                  <span className="ml-2 text-xs text-guardian-600">25% Complete</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg border border-guardian-200 hover:bg-guardian-50">
              <div className="rounded-md bg-green-100 p-2 text-green-700">
                <BookOpen size={24} />
              </div>
              <div>
                <h4 className="font-medium">Critical Thinking in the Digital Age</h4>
                <p className="text-sm text-guardian-600 mt-1">Develop skills to evaluate information in the era of misinformation</p>
                <div className="mt-2 flex items-center">
                  <div className="w-48 h-2 rounded-full bg-guardian-100 overflow-hidden">
                    <div className="h-full bg-guardian-600" style={{ width: '10%' }}></div>
                  </div>
                  <span className="ml-2 text-xs text-guardian-600">10% Complete</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg border border-guardian-200 hover:bg-guardian-50">
              <div className="rounded-md bg-purple-100 p-2 text-purple-700">
                <GraduationCap size={24} />
              </div>
              <div>
                <h4 className="font-medium">Introduction to Machine Learning</h4>
                <p className="text-sm text-guardian-600 mt-1">Fundamentals of ML algorithms and applications</p>
                <div className="mt-2 flex items-center">
                  <div className="w-48 h-2 rounded-full bg-guardian-100 overflow-hidden">
                    <div className="h-full bg-guardian-600" style={{ width: '0%' }}></div>
                  </div>
                  <span className="ml-2 text-xs text-guardian-600">Not Started</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Explore More Courses</Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Learning Stats</CardTitle>
          <CardDescription>Your progress at a glance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-guardian-700">12</p>
              <p className="text-sm text-guardian-600">Hours Learning</p>
            </div>
            
            <div className="text-center">
              <p className="text-4xl font-bold text-guardian-700">3</p>
              <p className="text-sm text-guardian-600">Active Courses</p>
            </div>
            
            <div className="text-center">
              <p className="text-4xl font-bold text-guardian-700">2</p>
              <p className="text-sm text-guardian-600">Certificates Earned</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">View All Achievements</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
);

const OrganizationDashboard = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-guardian-800 mb-4">Organization Dashboard</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Team Overview</CardTitle>
          <CardDescription>Your organization's learning stats</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b">
              <span>Total Team Members</span>
              <span className="font-semibold">87</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span>Active Learners</span>
              <span className="font-semibold">62</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span>Completion Rate</span>
              <span className="font-semibold">71%</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Manage Team</Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Learning Programs</CardTitle>
          <CardDescription>Active organization programs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium">Cybersecurity Training</p>
                <p className="text-sm text-guardian-600">Mandatory for IT staff</p>
              </div>
              <div className="text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded">In Progress</div>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium">AI Ethics for Leaders</p>
                <p className="text-sm text-guardian-600">Executive program</p>
              </div>
              <div className="text-sm bg-green-100 text-green-800 px-2 py-0.5 rounded">Active</div>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium">Digital Transformation</p>
                <p className="text-sm text-guardian-600">All departments</p>
              </div>
              <div className="text-sm bg-amber-100 text-amber-800 px-2 py-0.5 rounded">Planning</div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Create New Program</Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Compliance Status</CardTitle>
          <CardDescription>Training compliance metrics</CardDescription>
        </CardHeader>
        <CardContent className="h-60 flex items-center justify-center bg-guardian-50 rounded">
          <div className="text-center text-guardian-600">
            <BarChart className="h-16 w-16 mx-auto mb-4 opacity-70" />
            <p>Compliance chart would display here</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">View Compliance Reports</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
);

const ResearcherDashboard = () => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-guardian-800 mb-4">Researcher Dashboard</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Research Projects</CardTitle>
          <CardDescription>Your active and planned research initiatives</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-lg border border-guardian-200 hover:bg-guardian-50">
              <div className="rounded-md bg-purple-100 p-2 text-purple-700">
                <Flask size={24} />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">AI Bias Detection Framework</h4>
                  <div className="text-sm bg-green-100 text-green-800 px-2 py-0.5 rounded">Active</div>
                </div>
                <p className="text-sm text-guardian-600 mt-1">
                  Developing methodologies to identify and mitigate bias in educational AI systems
                </p>
                <div className="flex items-center mt-2 text-xs text-guardian-600">
                  <span>Collaborators: 3</span>
                  <span className="mx-2">•</span>
                  <span>Last updated: 2 days ago</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg border border-guardian-200 hover:bg-guardian-50">
              <div className="rounded-md bg-blue-100 p-2 text-blue-700">
                <Flask size={24} />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Ethical AI Evaluation Standards</h4>
                  <div className="text-sm bg-amber-100 text-amber-800 px-2 py-0.5 rounded">Planning</div>
                </div>
                <p className="text-sm text-guardian-600 mt-1">
                  Creating comprehensive standards for evaluating AI systems in educational contexts
                </p>
                <div className="flex items-center mt-2 text-xs text-guardian-600">
                  <span>Collaborators: 5</span>
                  <span className="mx-2">•</span>
                  <span>Last updated: 1 week ago</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">New Research Project</Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Data Access</CardTitle>
          <CardDescription>Anonymized datasets for research</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="py-2 border-b">
              <p className="font-medium">Learning Patterns Dataset</p>
              <p className="text-sm text-guardian-600">10,000 anonymized learning sessions</p>
              <Button variant="outline" size="sm" className="mt-2 w-full">Access Dataset</Button>
            </div>
            <div className="py-2 border-b">
              <p className="font-medium">AI Ethics Survey Results</p>
              <p className="text-sm text-guardian-600">Global survey on AI ethics perceptions</p>
              <Button variant="outline" size="sm" className="mt-2 w-full">Access Dataset</Button>
            </div>
            <div className="py-2">
              <p className="font-medium">Bias Detection Results</p>
              <p className="text-sm text-guardian-600">Algorithmic bias analysis findings</p>
              <Button variant="outline" size="sm" className="mt-2 w-full">Access Dataset</Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Request New Dataset</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
);

export default DashboardPage;
