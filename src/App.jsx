import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import SingleService from './pages/SingleService';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import GuidesBlogs from './pages/GuidesBlogs';
import SingleGuideBlog from './pages/SingleGuideBlog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import ClientDashboard from './pages/ClientDashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthProvider from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <main className="flex-grow min-h-[100vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service/:id" element={<SingleService />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/guides-blogs" element={<GuidesBlogs />} />
            <Route path="/guide-blog/:id" element={<SingleGuideBlog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/client-dashboard" element={<ClientDashboard />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;

