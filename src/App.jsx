import { useState } from 'react';

import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import { botToken } from './constants/index.js';
import ChattyWidget from './lib/ChattyWidget.jsx';
import WorkExperience from './sections/Experience.jsx';
import { HeroParallaxDemo } from './sections/Home/Parallox-Hero.jsx';
import ChatBot from './lib/ChatBot.jsx';

const App = () => {

  const [language, setLanguage] = useState('en');

  const handleChildData = (data) => {
    setLanguage(data);
  };

  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar handleChildDataApp={handleChildData} />
      <HeroParallaxDemo />
        <About />
      <Projects language={language} />
      <Clients language={language} />
      <WorkExperience language={language} />
      <Contact />
      <Footer />
      {/* <ChattyWidget token={botToken} /> */}
      {/* <ChatBot /> */}
    </main>
  );
};

export default App;
