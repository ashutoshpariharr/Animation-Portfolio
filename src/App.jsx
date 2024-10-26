import { useState } from 'react';

import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';

const App = () => {

  const [language, setLanguage] = useState('en');
  
  const handleChildData = (data) => {
    setLanguage(data);
  };

  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar handleChildDataApp={handleChildData} />
      <Hero />
      <About />
      <Projects language={language} /> 
      <Clients  language={language}/>
      <WorkExperience language={language} />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
