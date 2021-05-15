import React from 'react';
import Article from './Article.js';
import PropTypes from 'prop-types';

export default function Articles({ loading, articles }) {
  return (
    <>
      {loading ? (
        'Loading...'
      ) : (
        <div className="d">
          {articles.map((article) => (
            <div key={article.id} className="main">
              <Article article={article} />
              
            </div>
          ))}
        </div>
      )}
    </>
  );
}

Articles.propTypes = {
  loading: PropTypes.bool.isRequired,
  articles: PropTypes.array.isRequired,
};
