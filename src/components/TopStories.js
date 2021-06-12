import React, { useEffect } from 'react';
import TopStory from './TopStory';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import BackArrow from './images/backarrow.svg'

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.3)',
    backgroundColor: '#fafafa',
  },
  media: {
    height: 300,
  },
}));

function TopStories({ loading, topStories, getTopArticles }) {
  const classes = useStyles();
  useEffect(() => {
    getTopArticles('world');
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <>
        <div className="container-topstories">
        <NavLink to="/" className='goback'>
          <Link component="button" variant="body2">
              <img src={BackArrow} className='backarrow'/>
          </Link>
        </NavLink>
        <div className='topstory-btn-main'>
          <button
            className="draw"
            onClick={() => {
              getTopArticles('world');
            }}
          >
            World News
          </button>
          <button
            onClick={() => {
              getTopArticles('technology');
            }}
            className="draw"
          >
            Technology
          </button>
          <button
            onClick={() => {
              getTopArticles('us');
            }}
            className="draw"
          >
            US News
          </button>
        </div>
        </div>

        <div className="d">
         
            {topStories.map((topstory) => (
              <div className="main" key={topstory.url} data-aos="fade-up">
                <TopStory topstory={topstory} />
              </div>
            ))}
          
        </div>
      </>
    </>
  );
}

TopStories.propTypes = {
  loading: PropTypes.bool.isRequired,
  topStories: PropTypes.array.isRequired,
};

export default TopStories;
