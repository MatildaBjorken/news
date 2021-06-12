import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Articles from './components/Articles';
import Search from './components/Search';
import TopStories from './components/TopStories';
import { Link } from 'react-router-dom';
import landingImg from './components/images/green.jpg';
import landingImg2 from './components/images/grafitti.jpg';
import './App.css';
import arrow from './components/images/arrow.svg';
import GreatDay from './components/images/greatday.svg';
import Header from './components/header';
import ReadMe from './components/images/readme.svg';
import ReadLine from './components/images/read-line.svg';
import Ticker from 'react-ticker';
import About from './components/about';
import { AnimatePresence } from 'framer-motion';
import Model from './components/model';
import Square from './components/images/square.svg'

const App = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=art&api-key=y3XzrNKIXGb7aIpdYtZfsnzqA58tpS5j`
      );
      setArticles(res.data.response.docs);
      setLoading(false);
    };
    getArticles();
  }, []);

  const searchArticles = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${text}&api-key=xSsrhssAksLIljo0qATNj33dL2BV6d0h`
    );
    setArticles(res.data.response.docs);
    setLoading(false);
  };

  const getTopArticles = async (section) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=Ilfm2qj5qZkUFZb3C1wYXJhpxb6ttM1a`
    );
    setTopStories(res.data.results);
    setLoading(false);
  };

  const timer = useNewTimer(new Date());
  function useNewTimer(currentDate) {
    const [date, setDate] = useState(currentDate);

    useEffect(() => {
      var timerID = setInterval(() => tick(), 1000);
      return function cleanup() {
        clearInterval(timerID);
      };
    });

    function tick() {
      setDate(new Date());
    }

    return date;
  }

  const renderWelcomeMsg = (currentTime = new Date()) => {
    const currentHour = currentTime.getHours();
    const splitAfternoon = 12; // 24hr time to split the afternoon
    const splitEvening = 17; // 24hr time to split the evening

    if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
      // Between 12 PM and 5PM
      return 'Good afternoon';
    } else if (currentHour >= splitEvening) {
      // Between 5PM and Midnight
      return 'Good evening';
    }
    // Between dawn and noon
    return 'Good morning';
  };

  renderWelcomeMsg();

  const imageDetails = {
    width: 524,
    height: 650,
  };
  return (
    <div>
      <div>
        <Router>
          <Header />
          <Route
            render={({ location }) => (
              <AnimatePresence initial={false} exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route
                    exact
                    path="/About"
                    render={() => <About imageDetails={imageDetails} />}
                  />
                  <Route
                    exact
                    path="/model"
                    render={() => <Model imageDetails={imageDetails} />}
                  />
                </Switch>
              </AnimatePresence>
            )}
          />

          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <>
                  <div className="container">
                    <img className="redLine" src={ReadLine} />
                    <div className="wrapper">
                      <div className="s">
                        <Ticker className="ticker-main">
                          {({ index }) => (
                            <>
                              <h1 className="ticker">Trending top stories! </h1>
                            </>
                          )}
                        </Ticker>
                        <p className="topStories">
                          {renderWelcomeMsg()}...
                          <br></br>
                          Take a break and read the most popular stories right
                          now. These are the trending stories in the world, in
                          tech and in the us!
                        </p>
                        <NavLink to="/topstories">
                          <Link
                            component="button"
                            className="btn-topstories "
                            class="submit"
                          >
                            Go to top stories
                          </Link>
                        </NavLink>
                        <br></br>
                        <>
                          {loading ? (
                            'Loading...'
                          ) : (
                            <img
                              className="img-left"
                              src={
                                articles?.multimedia?.[0]?.url
                                  ? `https://nytimes.com/${articles.multimedia[0].url}`
                                  : landingImg2
                              }
                              alt="news-img"
                            />
                          )}
                        </>
                        <img className="readme-img" src={ReadMe} />
                      </div>
                      <div>
                        <>
                          {loading ? (
                            'Loading...'
                          ) : (
                            <img
                              className="img-right"
                              src={
                                articles?.multimedia?.[0]?.url
                                  ? `https://nytimes.com/${articles.multimedia[0].url}`
                                  : landingImg
                              }
                              alt="news-img"
                            />
                          )}
                        </>
                        <Search searchArticles={searchArticles} />

                        <p className="filter-text">
                          What are you looking for?<br></br>
                          Use filters to narrow the scope of your search. You
                          can specify the fields and the values that your query
                          will be filtered on.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="header">
                    <div className="read">
                      Read
                      <img src={arrow} className="arrow" />
                    </div>

                    <h2 className="time">
                      {' '}
                      {timer.toLocaleTimeString().slice(0, 2)} AM
                    </h2>
                  </div>

                  <Articles
                    className="test"
                    loading={loading}
                    articles={articles}
                  />
                </>
              )}
            />
           

            <Route
              exact
              path="/topstories"
              render={() => (
                <>
                  <TopStories
                    loading={loading}
                    topStories={topStories}
                    getTopArticles={getTopArticles}
                  />
                </>
              )}
            />
          </Switch>
        </Router>
        <div className="footer">
          <div className="read">
            <img src={GreatDay} className="greatday" />
          </div>

          <div className="square-footer">
            <img src={Square}/>
             </div>
        </div>
      </div>
    </div>
  );
};

export default App;
