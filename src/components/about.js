import Header from './header';
import imgBoy from './images/street.jpg';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProgressiveImage from 'react-progressive-image';
import '../about.css';
import { useState, useEffect } from 'react';
import { flash } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

/*
<div class="square">
<div class="line-top"></div>
<div class="line-right"></div>
<div class="line-bottom"></div>
<div class="line-left"></div>
<div class="black-mask"></div>
<div class="text">
  <h1>We're doing amazing things</h1>
</div>
</div>
*/

const About = ({ imageDetails, image }) => {
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState();
    useEffect(() => {
      function handleResize() {
        if (imageDetails.width >= 900) {
          console.log('under 900');
          setWindowSize(true);
          imageDetails.width = 0;
          let imageSize = document.querySelector('.thumbnail');
          imageSize.width = 0;
          imageSize.element.style = 0;
        }
      }
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
  }
  useWindowSize();

  const styles = {
    flash: {
      animation: 'x 3s',
      animationName: Radium.keyframes(flash, 'flash'),
    },
  };

  return (
    <>
      <main>
      <StyleRoot>
        <div className="about-container">
          <div className="row center">
            <div className="image-container">
              <div
                className="thumbnail"
                ref={image}
                style={{
                  height: imageDetails.height,
                }}
              >
                <div className="frame">
                  <Link to={`/model`}>
                    <ProgressiveImage src={imgBoy} placeholder={imgBoy}>
                      {(src) => (
                        <motion.img
                        
                          src={src}
                          alt="Yasmeen Tariq"
                          whileHover={{ scale: 1.1 }}
                          transition={transition}
                        />
                      )}
                    </ProgressiveImage>
                  </Link>
                </div>
              </div>
              <motion.div
                exit={{ opacity: 0 }}
                transition={transition}
                className="information"
              >
                <div className="title" style={styles.flash}>Why News?</div>
                <div className="location" style={styles.flash}>
                  <span>28.538336</span>
                  <span>-81.379234</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        </StyleRoot>
      </main>
    </>
  );
};

export default About;
