import React, { useState, useEffect } from 'react';
// Then use: src={student1Img} instead of src="/images/team/student1.jpg"

const SinhalaRecognitionWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'objective', 'significance', 'future', 'features', 'demonstration', 'team'];
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
            <img 
                  src="/images/nav/nav-icon.png" 
                  alt="nnav icon"
                  className="me-2"
                  style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                />
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
                { id: 'demonstration', label: 'Demonstration' },
                { id: 'team', label: 'Team' }
              ].map(item => (
                <li key={item.id} className="nav-item mx-2">
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

      {/* Hero Sec  tion */}
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
              <div className="mb-2">
                <img 
                  src="/images/hero/hero-icon.png" 
                  alt="Hero Visual"
                  className="img-fluid animate__animated animate__fadeInDown"
                  style={{ width: '200px', height: '200px', objectFit: 'contain' }}
                />
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
                <img 
                  src="/images/about/about.png" 
                  alt="About Visual"
                  className="img-fluid animate__animated animate__fadeInDown"
                  style={{ width: '500px', height: '500px', objectFit: 'contain' }}
                />
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

      {/* Project Demonstration Section */}
      <section id="demonstration" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-primary mb-3">Project Demonstration</h2>
            <p className="lead">Watch how our Sinhala Recognition system works in real-time</p>
          </div>
          <div className="row g-4 justify-content-center">
            {/* Mobile App Demo */}
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-3">
                  <h5 className="card-title text-center text-primary mb-3">Mobile App Demonstration</h5>
                  <div className="ratio ratio-16x9">
                    <video controls>
                      <source src="/videos/mobile_demo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>

            {/* Web App Demo */}
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-3">
                  <h5 className="card-title text-center text-primary mb-3">Web App Demonstration</h5>
                  <div className="ratio ratio-16x9">
                    <video controls>
                      <source src="/videos/web_demo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="techstack" className="py-5 bg-white">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {[
              {
                name: 'Python',
                image: '/images/tech/python.png',
                link: 'https://www.python.org'
              },
              {
                name: 'OpenCV',
                image: '/images/tech/opencv.png',
                link: 'https://opencv.org'
              },
              {
                name: 'NumPy',
                image: '/images/tech/numpy.png',
                link: 'https://numpy.org'
              },
              {
                name: 'TensorFlow',
                image: '/images/tech/tensorflow.png',
                link: 'https://www.tensorflow.org'
              },
              {
                name: 'Keras',
                image: '/images/tech/keras.png',
                link: 'https://keras.io'
              },
              {
                name: 'Google Colab',
                image: '/images/tech/colab.png',
                link: 'https://colab.research.google.com'
              }
            ].map((tech, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 text-center">
                <a href={tech.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <div className="card h-100 border-0 shadow-sm hover-lift py-3">
                    <img 
                      src={tech.image} 
                      alt={tech.name}
                      className="mx-auto mb-3"
                      style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                    />
                    <h6 className="text-primary fw-bold">{tech.name}</h6>
                  </div>
                </a>
              </div>
            ))}
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
                  <div className="mb-3">
                    <img 
                      src="/images/team/supervisor.jpg" 
                      alt="Dr. Academic Supervisor"
                      className="rounded-circle"
                      style={{
                        width: '100px', 
                        height: '100px',
                        objectFit: 'cover',
                        border: '3px solid var(--bs-primary)'
                      }}
                    />
                  </div>
                  <h4 className="card-title text-primary">Project Supervisor</h4>
                  <h5 className="mb-2">Dr. Nalaka Lankasena</h5>
                  <p className="text-muted mb-2">Senior Lecturer of 
                    Department of Information and Communication Technology 
                    Faculty of Technology 
                    University of Sri Jayewardenepura
                  </p>
                </div>
              </div>
            </div>
            
            {/* Team Members */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <div className="mb-3">
                    <img 
                      src="/images/team/student1.jpg" 
                      alt="Student Name 1"
                      className="rounded-circle"
                      style={{
                        width: '80px', 
                        height: '80px',
                        objectFit: 'cover',
                        border: '3px solid var(--bs-success)'
                      }}
                    />
                  </div>
                  <h4 className="card-title text-primary">Team Member</h4>
                  <h5 className="card-title">Sumudu Chamika</h5>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <div className="mb-3">
                    <img 
                      src="/images/team/student2.png" 
                      alt="Student Name 2"
                      className="rounded-circle"
                      style={{
                        width: '80px', 
                        height: '80px',
                        objectFit: 'cover',
                        border: '3px solid var(--bs-warning)'
                      }}
                    />
                  </div>
                  <h4 className="card-title text-primary">Team Member</h4>
                  <h5 className="card-title">Thilina Tharinda</h5> 
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <div className="mb-3">
                    <img 
                      src="/images/team/student3.png"
                      alt="Student Name 3"
                      className="rounded-circle"
                      style={{
                        width: '80px', 
                        height: '80px',
                        objectFit: 'cover',
                        border: '3px solid var(--bs-info)'
                      }}
                    />
                  </div>
                  <h4 className="card-title text-primary">Team Member</h4>
                  <h5 className="card-title">Yuvin Navod</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white pt-5 pb-3 mt-5">
        <div className="container">
          <div className="row text-center text-md-start">
            
            <div className="col-md-4 mb-4">
              <h5 className="text-white mb-3">About Us</h5>
              <ul className="list-unstyled">
                <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
                <li><a href="#about" className="text-light text-decoration-none">About</a></li>
                <li><a href="#features" className="text-light text-decoration-none">Features</a></li>
                <li><a href="#team" className="text-light text-decoration-none">Team</a></li>
              </ul>
            </div>

            <div className="col-md-4 mb-4">
              <h5 className="text-white mb-3">Tech Stack</h5>
              <ul className="list-unstyled">
                <li><span className="text-light">Python</span></li>
                <li><span className="text-light">OpenCV</span></li>
                <li><span className="text-light">Tensorflow</span></li>
                <li><span className="text-light">NumPy</span></li>
              </ul>
            </div>

            <div className="col-md-4 mb-4">
              <h5 className="text-white mb-3">Useful Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
                <li><a href="#" className="text-light text-decoration-none">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <hr className="border-secondary" />

          <div className="text-center">
            <p className="mb-2">© 2025 Sinhala Handwritten Recognition Project. All rights reserved.</p>
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