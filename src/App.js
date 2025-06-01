import React, { useState, useEffect } from 'react';

const SinhalaRecognitionWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'objective', 'significance', 'future', 'features', 'team'];
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-light">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
            <i className="fas fa-brain me-2"></i>
            Sinhala Recognition
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'objective', label: 'Objectives' },
                { id: 'significance', label: 'Applications' },
                { id: 'future', label: 'Future Works' },
                { id: 'features', label: 'Features' },
                { id: 'team', label: 'Team' }
              ].map(item => (
                <li key={item.id} className="nav-item">
                  <button 
                    className={`nav-link btn btn-link text-white ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-vh-100 d-flex align-items-center position-relative overflow-hidden">
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            opacity: 0.9
          }}
        ></div>
        <div className="container position-relative text-white text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="mb-4">
                <i className="fas fa-language display-1 mb-4 text-warning"></i>
              </div>
              <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeInUp">
                Sinhala Handwritten Sentence Recognition
              </h1>
              <p className="lead mb-5 fs-4">
                A Deep Learning Approach Using CNN and RNN
              </p>
              <button 
                className="btn btn-warning btn-lg px-5 py-3 rounded-pill shadow-lg"
                onClick={() => scrollToSection('about')}
              >
                <i className="fas fa-arrow-down me-2"></i>
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom-0 start-0 w-100">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-100" style={{height: '60px'}}>
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-center mb-4 mb-lg-0">
                <i className="fas fa-project-diagram display-1 text-primary mb-3"></i>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold text-primary mb-4">About Our Project</h2>
              <p className="lead mb-4">
                Our research focuses on developing an advanced deep learning system capable of recognizing 
                handwritten Sinhala sentences with high accuracy and efficiency.
              </p>
              <p className="mb-4">
                By combining Convolutional Neural Networks (CNN) for feature extraction and Recurrent Neural 
                Networks (RNN) for sequence modeling, we've created a comprehensive solution that addresses 
                the unique challenges of Sinhala script recognition.
              </p>
              <div className="d-flex align-items-center">
                <i className="fas fa-check-circle text-success me-2"></i>
                <span>Advanced Deep Learning Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objective" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-3">Project Objectives</h2>
            <p className="lead">Our main goals and specific targets for this research</p>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-2">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fas fa-bullseye text-primary fs-2 me-3"></i>
                    <h4 className="card-title mb-0">Main Objective</h4>
                  </div>
                  <p className="card-text ">
                    To develop a robust and accurate deep learning system for recognizing handwritten 
                    Sinhala sentences using state-of-the-art CNN and RNN architectures.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-2">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fas fa-list-ul text-success fs-2 me-3"></i>
                    <h4 className="card-title mb-0">Specific Objectives</h4>
                  </div>
                  <ul className="list-unstyled ">
                    <li className="mb-2"><i className="fas fa-chevron-right text-success me-2"></i>Achieve 95%+ recognition accuracy</li>
                    <li className="mb-2"><i className="fas fa-chevron-right text-success me-2"></i>Process 454 Sinhala characters</li>
                    <li className="mb-2"><i className="fas fa-chevron-right text-success me-2"></i>Enable real-time processing</li>
                    <li className="mb-0"><i className="fas fa-chevron-right text-success me-2"></i>Create mobile-friendly solution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Significance Section */}
      <section id="significance" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-3">Significance & Applications</h2>
            <p className="lead">Real-world impact and practical importance</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <i className="fas fa-graduation-cap text-primary fs-1 mb-3"></i>
                  <h5 className="card-title">Education</h5>
                  <p className="card-text">Digitizing handwritten educational materials and enabling automated grading systems.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <i className="fas fa-archive text-success fs-1 mb-3"></i>
                  <h5 className="card-title">Digital Archives</h5>
                  <p className="card-text">Preserving historical documents and making them searchable for future generations.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <i className="fas fa-building text-warning fs-1 mb-3"></i>
                  <h5 className="card-title">Government</h5>
                  <p className="card-text">Streamlining document processing and reducing manual data entry in public services.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <i className="fas fa-universal-access text-info fs-1 mb-3"></i>
                  <h5 className="card-title">Accessibility</h5>
                  <p className="card-text">Helping people with disabilities by converting handwritten text to digital format.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Works Section */}
      <section id="future" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-3">Future Works</h2>
            <p className="lead">Planned enhancements and research directions</p>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="alert alert-primary border-0 shadow-sm mb-4" role="alert">
                <div className="d-flex align-items-center">
                  <i className="fas fa-rocket text-primary fs-4 me-3"></i>
                  <div>
                    <h5 className="alert-heading mb-1">Advanced Architecture Implementation</h5>
                    <p className="mb-0">Integrate Transformer models and attention mechanisms for improved accuracy</p>
                  </div>
                </div>
              </div>
              
              <div className="alert alert-success border-0 shadow-sm mb-4" role="alert">
                <div className="d-flex align-items-center">
                  <i className="fas fa-database text-success fs-4 me-3"></i>
                  <div>
                    <h5 className="alert-heading mb-1">Dataset Expansion</h5>
                    <p className="mb-0">Collect and annotate larger datasets with diverse handwriting styles</p>
                  </div>
                </div>
              </div>
              
              <div className="alert alert-warning border-0 shadow-sm mb-4" role="alert">
                <div className="d-flex align-items-center">
                  <i className="fas fa-mobile-alt text-warning fs-4 me-3"></i>
                  <div>
                    <h5 className="alert-heading mb-1">Mobile Application Development</h5>
                    <p className="mb-0">Create native mobile apps for iOS and Android platforms</p>
                  </div>
                </div>
              </div>
              
              <div className="alert alert-info border-0 shadow-sm" role="alert">
                <div className="d-flex align-items-center">
                  <i className="fas fa-language text-info fs-4 me-3"></i>
                  <div>
                    <h5 className="alert-heading mb-1">Multi-language Support</h5>
                    <p className="mb-0">Extend the system to recognize Tamil and English handwriting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-3">Key Features</h2>
            <p className="lead">Advanced capabilities of our recognition system</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center hover-lift">
                <div className="card-body p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <i className="fas fa-brain text-primary fs-2"></i>
                  </div>
                  <h5 className="card-title">CNN + RNN Integration</h5>
                  <p className="card-text">Powerful combination of feature extraction and sequence modeling</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center hover-lift">
                <div className="card-body p-4">
                  <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <i className="fas fa-clock text-success fs-2"></i>
                  </div>
                  <h5 className="card-title">Real-time Recognition</h5>
                  <p className="card-text">Instant processing and recognition of handwritten text</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center hover-lift">
                <div className="card-body p-4">
                  <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <i className="fas fa-mobile-alt text-warning fs-2"></i>
                  </div>
                  <h5 className="card-title">Mobile & Web Support</h5>
                  <p className="card-text">Cross-platform compatibility for all devices</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center hover-lift">
                <div className="card-body p-4">
                  <div className="bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <i className="fas fa-font text-info fs-2"></i>
                  </div>
                  <h5 className="card-title">454 Sinhala Characters</h5>
                  <p className="card-text">Comprehensive dataset covering the complete Sinhala script</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-3">Our Team</h2>
            <p className="lead">Meet the researchers behind this project</p>
          </div>
          <div className="row g-4">
            {/* Supervisor */}
            <div className="col-lg-12 mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '100px', height: '100px'}}>
                    <i className="fas fa-user-tie text-primary fs-1"></i>
                  </div>
                  <h4 className="card-title text-primary">Project Supervisor</h4>
                  <h5 className="mb-2">Dr. Academic Supervisor</h5>
                  <p className="text-muted mb-2">Senior Lecturer, Department of Computer Science</p>
                  <p className="mb-0">
                    <i className="fas fa-envelope text-primary me-2"></i>
                    supervisor@university.lk
                  </p>
                </div>
              </div>
            </div>
            
            {/* Team Members */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <i className="fas fa-user text-success fs-2"></i>
                  </div>
                  <h5 className="card-title">Student Name 1</h5>
                  <p className="text-muted mb-2">Student ID: 2021CS001</p>
                  <p className="mb-0">
                    <i className="fas fa-envelope text-success me-2"></i>
                    student1@university.lk
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <i className="fas fa-user text-warning fs-2"></i>
                  </div>
                  <h5 className="card-title">Student Name 2</h5>
                  <p className="text-muted mb-2">Student ID: 2021CS002</p>
                  <p className="mb-0">
                    <i className="fas fa-envelope text-warning me-2"></i>
                    student2@university.lk
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <div className="bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                    <i className="fas fa-user text-info fs-2"></i>
                  </div>
                  <h5 className="card-title">Student Name 3</h5>
                  <p className="text-muted mb-2">Student ID: 2021CS003</p>
                  <p className="mb-0">
                    <i className="fas fa-envelope text-info me-2"></i>
                    student3@university.lk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <i className="fas fa-university fs-3 me-3 text-primary"></i>
                <div>
                  <h6 className="mb-0">University Name</h6>
                  <small className="text-muted">Department of Computer Science</small>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="mb-0">
                © 2025 Sinhala Recognition Project. All rights reserved.
              </p>
              <small className="text-muted">Final Year Research Project</small>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        .hover-lift:hover {
          transform: translateY(-5px);
          transition: transform 0.3s ease;
        }
        
        .navbar-nav .nav-link.active {
          background-color: rgba(255,255,255,0.2);
          border-radius: 0.5rem;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        .card {
          transition: all 0.3s ease;
        }
        
        .card:hover {
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>

      {/* Bootstrap 5 CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      {/* Font Awesome */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        rel="stylesheet" 
      />
      
      {/* Bootstrap 5 JS */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default SinhalaRecognitionWebsite;