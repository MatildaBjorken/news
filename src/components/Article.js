import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

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
          <div>
            <div className="article-header">
              <a href={article.web_url} className="article-header">
                {article.headline.main}
              </a>
            </div>
            <h4 className="article-author"> {article.byline.original}</h4>

            <p>{article.snippet.slice(0)}</p>
            <p className="article-date">
              {article.pub_date.slice(2, 10).replaceAll('-', '.')}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
};

export default Article;
