import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Signup1 from "./pages/Signup1";
import Header from "./components/Header";
import Footer from "./components/footer";
import Partner from "./pages/partner";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GetStarted from "./pages/Get-started";
import Browse from "./pages/Browse";
import Rental from "./pages/Rental";
import Applynow from "./pages/Applynow";
import Manor from "./pages/Manor";
import Buy from "./pages/Buy";
import BlueChip from "./pages/BlueChip";
import ExploreGlobal from "./pages/ExploreGlobal";
import Investment from "./pages/Investment";
import SecureAccess from "./pages/Secureaccess";
import Property from "./pages/Property";
import Eliterental from "./pages/Eliterental";
import Bookstay from "./pages/Bookstay";
import Summer from "./pages/Summer";
import Villaazure from "./pages/Villaazure";
import Bookingconfirmation from "./pages/Booking-confirmation";
import Requestbooking from "./pages/Requestbooking";
import Propertiesgallery from "./pages/properties-gallery";
import Propertiesdetails from "./pages/properties-details";
import Addproperty from "./pages/Add-properties";
import Submission from "./pages/Submission";
import AnotherProperties from "./pages/Another-properties";
import Messages from "./pages/Messages";
import Directcall from "./pages/Directcall";
import Dashboard from "./pages/Dashboard";
import Newlisting from "./pages/Newlisting";
import Propertyowner from "./pages/Property-owner";
import CreateNewlisting from "./pages/Create-newlisting";
import SpeakAdvisor from "./pages/SpeakAdvisor";
import ContactAdvisor from "./pages/ContactAdvisor";
import EliteAgent from "./pages/EliteAgent";
import AgentProfile from "./pages/AgentProfile-julian";
import ScheduleBriefing from "./pages/ScheduleBriefing";
import RequestCall from "./pages/RequestCall";
import ContactUs from "./pages/ContactUs";
import UserProfile from "./pages/UserProfile";
import Breifing from "./pages/Breifing";
import Setting from "./pages/Setting";
import Agent from "./pages/Agent";
import AgentBreifing from "./pages/AgentBreifing";
import ClientInquiries from "./pages/ClientInquiries";
import AgentSetting from "./pages/AgentSetting";
import SecureMessage from "./pages/SecureMessage";
import RequestName from "./pages/RequestName";
import Tax from "./pages/Tax";
import Join from "./pages/Join";
import Body from "./pages/Body";
import ViewSummary from "./pages/ViewSummary";
import SchedulePrivate from "./pages/SchedulePrivate";
import MediaPage from "./pages/Media";
import Review from "./pages/Review";
import BluePrint from "./pages/BluePrint";
import ListProperty from "./pages/ListProperty";
import BrowseExclusive from "./pages/BrowseExclusive";
import ContactElite from "./pages/ContactElite";
import GlassVilla from "./pages/GlassVilla";
import AgentDashboard from "./pages/agent/AgentDashboard";
import AgentProperty from "./pages/agent/agent-property";
import AgentVerification from "./pages/agent/agent-verification";
import AgentReport from "./pages/agent/Agent-report";
import AgentPerformance from "./pages/agent/Agent-performance";
import AgentSettings from "./pages/agent/Agent-setting";
import PropertyVerification from "./pages/agent/Properties-verification";








function Layout() {


  const location = useLocation();

  // pages where header/footer should be hidden
  const hideLayoutRoutes = ["/agent-breifing", "/messages", "/propertyowner", "/create-newlisting", "/requestcall", "/user-profile",
    "/breifing", "/setting", "/requestname",
    "/agent", "/client-inquiries", "/secure-message",
    "/agent-setting", "/tax", "/login", "/signup", "/signup1",
    "/join",

    "/body", "/ViewSummary", "/SchedulePrivate", "/media", "/review", "/blueprint", "/list-property","/agent-dashboard","/agent-property",
      "/agent-report","/agent-performance","/agent-settings","/property-verification"



  ]

  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="app-container">

      {!hideLayout && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup1" element={<Signup1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/applynow" element={<Applynow />} />
        <Route path="/manor" element={<Manor />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/bluechip" element={<BlueChip />} />
        <Route path="/exploreglobal" element={<ExploreGlobal />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/secureaccess" element={<SecureAccess />} />
        <Route path="/property" element={<Property />} />
        <Route path="/eliterental" element={<Eliterental />} />
        <Route path="/bookstay" element={<Bookstay />} />
        <Route path="/summer" element={<Summer />} />
        <Route path="/villaazure" element={<Villaazure />} />
        <Route path="/bookingconfirmation" element={<Bookingconfirmation />} />
        <Route path="/requestbooking" element={<Requestbooking />} />
        <Route path="/propertiesgallery" element={<Propertiesgallery />} />
        <Route path="/propertiesdetails" element={<Propertiesdetails />} />
        <Route path="/addproperty" element={<Addproperty />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/anotherproperties" element={<AnotherProperties />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/directcall" element={<Directcall />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/newlisting" element={<Newlisting />} />
        <Route path="/propertyowner" element={<Propertyowner />} />
        <Route path="/createnewlisting" element={<CreateNewlisting />} />
        <Route path="/speakadvisor" element={<SpeakAdvisor />} />
        <Route path="/contactadvisor" element={<ContactAdvisor />} />
        <Route path="/eliteagent" element={<EliteAgent />} />
        <Route path="/agentprofile" element={<AgentProfile />} />
        <Route path="/schedulebriefing" element={<ScheduleBriefing />} />
        <Route path="/requestcall" element={<RequestCall />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/breifing" element={<Breifing />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/agentbreifing" element={<AgentBreifing />} />
        <Route path="/clientinquiries" element={<ClientInquiries />} />
        <Route path="/agentsetting" element={<AgentSetting />} />
        <Route path="/securemessage" element={<SecureMessage />} />
        <Route path="/requestname" element={<RequestName />} />
        <Route path="/tax" element={<Tax />} />
        <Route path="/join" element={<Join />} />
        <Route path="/body" element={<Body />} />
        <Route path="/viewSummary" element={<ViewSummary />} />
        <Route path="/schedulePrivate" element={<SchedulePrivate />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/review" element={<Review />} />
        <Route path="/blueprint" element={<BluePrint />} />
        <Route path="/listproperty" element={<ListProperty />} />
        <Route path="/browseexclusive" element={<BrowseExclusive />} />
        <Route path="/glassvilla" element={<GlassVilla />} />
        <Route path="/contactelite" element={<ContactElite />} />
        <Route path="/agent-dashboard" element={<AgentDashboard />} />
        <Route path="/agent-property" element={<AgentProperty />} />
        <Route path="/agent-verification"element={<AgentVerification />} />
       <Route path="/agent-report" element={<AgentReport />} />
        <Route path="/agent-performance" element={<AgentPerformance />} />
        <Route path="/agent-settings" element={<AgentSettings />} />
        <Route path="/property-verification" element={<PropertyVerification />} />
      




      </Routes>

      {!hideLayout && <Footer />}

          </div>



   );
}


function App() {
  return (
 
    <Router>
      <Layout />
    </Router>
   );
}

export default App;