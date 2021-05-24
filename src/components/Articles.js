import React, { useEffect } from 'react';
import Article from './Article.js';
import PropTypes from 'prop-types';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Curly from './images/curly.svg'
export default function Articles({ loading, articles }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      {loading ? (
        'Loading...'
      ) : (
        <div className="d">
          {articles.map((article) => (
            <div
              key={article.id}
              className="main"
              data-aos="fade-up"
             
            >
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
