import Header from './header';
import imgBoy from './images/street.jpg';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProgressiveImage from 'react-progressive-image';
import '../about.css';

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
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
const About = ({ imageDetails, image }) => (
  <>
    <main>
      <div className='about-container'>
        <div className='row center'>
          <div className='image-container'>
            <div
              className='thumbnail'
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className='frame'>
                <Link to={`/model`}>
                  <ProgressiveImage
                    src={imgBoy}
                    placeholder={imgBoy}>
                    {(src) => (
                      <motion.img
                        src={src}
                        alt='Yasmeen Tariq'
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
              className='information'>
              <div className='title'>Yasmeen Tariq</div>
              <div className='location'>
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default About;