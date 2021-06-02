import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import arrow from './images/arrow2.svg';
import Typewriter from 'typewriter-effect';

const useStyles = makeStyles({
  card: {
    height: 600,
  },
  media: {
    height: 300,
  },
});

const Article = ({ article }) => {
  const classes = useStyles();

  //let test = article?.media[0]['media-metadata'][0].url
  //console.log(article[Object.keys(article)[0]])
  //console.log(article.byline.original[Object.keys(article.byline.original)[0]])
  let author = article.byline.original;
  return (
    <div className="main">
      {article && (
        <div className="article" id={article._id}>
          <div className="img-article">
            <CardMedia
              className={classes.media}
              component="img"
              src={
                article.multimedia?.[0]?.url
                  ? `https://nytimes.com/${article.multimedia[0].url}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
              }
              alt="news-img"
            />
          </div>

          <div className="article-header">
            <a href={article.web_url} className="article-header">
              {article.headline.main}
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
          <p>{article.snippet.slice(0)}</p>
          <p className="article-date">
            {article.pub_date.slice(2, 10).replaceAll('-', '.')}
          </p>
        </div>
      )}
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
};

export default Article;
