import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import AboutUsPage from './pages/about-us/page'
import BlogPage from './pages/blog/page'
import ContactUsPage from './pages/contact-us/page'
import ProductsPage from './pages/products/page'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

