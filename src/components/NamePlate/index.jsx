import React, { useEffect, useRef, useState } from 'react';
import "./style.css";

const NamePlate = () => {
  const [isMounted, setIsMounted] = useState(true);
  const rollingTextRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);

    const elements = rollingTextRef.current.querySelectorAll('.rolling-text');

    elements.forEach(element => {
      let innerText = element.innerText;
      element.innerHTML = '';

      let textContainer = document.createElement('div');
      textContainer.classList.add('block');

      for (let letter of innerText) {
        let span = document.createElement('span');
        span.innerText = letter.trim() === '' ? '\xa0' : letter;
        span.classList.add('letter');
        textContainer.appendChild(span);
      }

      element.appendChild(textContainer);
      element.appendChild(textContainer.cloneNode(true));
    });

    // For presentation purpose
    if (isMounted) {
      setTimeout(() => {
        elements.forEach(element => {
          element.classList.add('play');
        });
      }, 600);

      elements.forEach(element => {
        element.addEventListener('mouseover', () => {
          element.classList.remove('play');
        });
      });
    }

    // Cleanup event listeners on component unmount
    return () => {
      elements.forEach(element => {
        element.removeEventListener('mouseover', () => {
          element.classList.remove('play');
        });
      });
    };
  }, [isMounted]);

  return (
    <div ref={rollingTextRef} className="rolling-text">
        <a className="rolling-text" href="#">
            Reilly Nahill.
        </a>
    </div>
  );
}

export default NamePlate;