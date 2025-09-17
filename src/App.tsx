// in src/App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/main-layout';
import PublicLandingPage from './pages/public/public_landing';
import BusinessLandingPage from './pages/public/business_landing';
import StoreProfilePage from './pages/public/store_profile_view';
// Import your other pages here as you build them
// import LoginPage from './pages/auth/login';
// import RegistrationPage from './pages/auth/register';

function App() {
  return (
    <Router>
      <Routes>
        {/* All your pages will be nested inside the MainLayout */}
        <Route path="/" element={<MainLayout />}>
          {/* The 'index' route is the default page for the parent route '/' */}
          <Route index element={<PublicLandingPage />} />
          <Route path="business" element={<BusinessLandingPage />} />
          <Route path="store/:storeID" element={<StoreProfilePage />} />
          
          {/* Add your other pages here */}
          {/* <Route path="login" element={<LoginPage />} /> */}
          {/* <Route path="register" element={<RegistrationPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;