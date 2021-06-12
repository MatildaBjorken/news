import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import arrow from './images/arrow2.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    height: 500,
  },
  media: {
    height: 300,
  },
});

const TopStory = ({ topstory }) => {
  let author = topstory.byline;

  const classes = useStyles();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="main">
      {topstory && (
        <div className="article" id={topstory.url}>
          <div className="img-article">
            <CardMedia
              className={classes.media}
              component="img"
              src={
                topstory.multimedia?.[0]?.url
                  ? `https://nyt.com/${topstory.multimedia[0].url}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
              }
              alt="news-img"
            />
          </div>
          <div className="article-header">
            <a href={topstory.url} className="article-header">
              {topstory.title}
            </a>
          </div>
          <div className="article-bottom">
            <Typewriter
              className="article-author"
              options={{
                strings: [author],
                autoStart: true,
                loop: true,
              }}
            />
            <img src={arrow} className="arrow2" />
          </div>
          <p>{topstory.abstract}</p>
          <p className="article-date">
            {topstory.published_date.slice(2, 10).replaceAll('-', '.')}
          </p>
        </div>
      )}
    </div>
  );
};

TopStory.propTypes = {
  topstory: PropTypes.object.isRequired,
};
export default TopStory;
