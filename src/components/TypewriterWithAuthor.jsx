import React, { useEffect, useState } from 'react';

const TypingText = () => {
  const [text, setText] = useState('');
  const [showConfucio, setShowConfucio] = useState(false);
  const originalText = 'ELIGE UN TRABAJO QUE TE APASIONE Y NO TENDRÁS QUE TRABAJAR NI UN DÍA DE TU VIDA';

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(originalText.substring(0, index));
      index += 1;

      if (index > originalText.length) {
        clearInterval(intervalId);

        setShowConfucio(true);
      }
    }, 100); 
  }, []);

  return (
    <div className='typewriter-container'>
      <p>{text}</p>
      {showConfucio && <p className='autor'>- Confucio -</p>}
    </div>
  );
};

export default TypingText;