// in src/App.tsx
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/main-layout';

// Import public pages
import PublicLandingPage from './pages/public/public_landing';
import BusinessLandingPage from './pages/public/business_landing';
import StoreProfilePage from './pages/public/store_profile_view';
import AboutUsPage from './pages/public/aboutus';
import BrowseStoresPage from './pages/public/browse_stores';

// Import auth pages
import LoginPage from './pages/auth/login';
import RegistrationPage from './pages/auth/register';
import StoreRegistrationPage from './pages/auth/store_register';

// Import the protected pages
import StoreDashboardPage from './pages/protected/store_dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import ConsumerDashboardPage from './pages/protected/consumer_dashboard';
import StoreItemsPage from './pages/protected/store_items';
// import StoreReviewsPage from './pages/protected/store_reviews';
import ProtectedLayout from './components/layout/ProtectedLayout';
import StoreSettingsPage from './pages/protected/store_settings';

function App() {
  return (
    <Routes>
      {/* Public and Auth Routes (with MainLayout and Footer) */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<PublicLandingPage />} />
        <Route path="business" element={<BusinessLandingPage />} />
        <Route path="stores/:storeId" element={<StoreProfilePage />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="browse-stores" element={<BrowseStoresPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegistrationPage />} />
        <Route path="store-register" element={<StoreRegistrationPage />} />
      </Route>

      {/* Protected Routes (NO MainLayout, NO Footer) */}
      <Route element={<ProtectedRoute />}>
        <Route element={<ProtectedLayout />}>
          <Route path="store-dashboard" element={<StoreDashboardPage />} />
          <Route path="store-settings" element={<StoreSettingsPage />} />
          <Route path="store-items" element={<StoreItemsPage />} /> 
          {/* <Route path="store-reviews" element={<StoreReviewsPage />} /> */}

          {/* <Route path="consumer-dashboard" element={<StoreSettingsPagePage />} /> --- IGNORE --- */}
          <Route path="consumer-dashboard" element={<ConsumerDashboardPage />} />
          {/* Add more protected routes here */}
        </Route>
      </Route>

      {/* Fallback route for unmatched paths */}
      <Route path="*" element={<div className="p-4">404 - Page Not Found</div>} />
    </Routes>
  );
}

export default App;