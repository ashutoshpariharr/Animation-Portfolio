import { useEffect } from 'react';

const ChattyWidget = ({ token }) => {
  useEffect(() => {
    if (!token) return;

    const script = document.createElement('script');
    script.src = `https://widget.gallabox.com/chatty-widget.min.js?_=${Math.random()}`;
    script.async = true;

    script.onload = () => {
      if (!window.Chatty) {
        window.Chatty = function (c) {
          window.Chatty._.push(c);
        };
        window.Chatty._ = [];
      }

      window.Chatty.url = 'https://widget.gallabox.com';
      window.Chatty.hash = token;

      // Optional: Call any startup method if required by the Gallabox API
      // e.g., window.Chatty({ action: 'start' });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [token]);

  return null;
};

export default ChattyWidget;
