import React from 'react'
import Layout from './layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// pages
import Home from './pages/home'
import AboutUs from './pages/about-us'
import ContactUs from './pages/contact-us'
import Blog from './pages/blog'
import Program from './pages/program'
import News from './pages/news'
import NewsDetail from './pages/news/detail'

export default function RouterApp() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route path="/" exact>
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route path="/about-us" exact>
            <Layout>
              <AboutUs />
            </Layout>
          </Route>
          <Route path="/contact-us" exact>
            <Layout>
              <ContactUs />
            </Layout>
          </Route>
          <Route path="/blog" exact>
            <Layout>
              <Blog />
            </Layout>
          </Route>
          <Route path="/program" exact>
            <Layout>
              <Program />
            </Layout>
          </Route>
          <Route path="/news" exact>
            <Layout>
              <News />
            </Layout>
          </Route>
          <Route path="/news/:slug" exact>
            <Layout>
              <NewsDetail />
            </Layout>
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  )
}
