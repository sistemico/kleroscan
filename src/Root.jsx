import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import styled from 'styled-components'

import client from './client'

import Clock from './utils/clock'
import GlobalStylesheet from './GlobalStylesheet'
import Branding from './components/Branding'

import HomePage from './pages/HomePage'
import CourtDetail from './pages/courts/CourtDetail'
import CourtList from './pages/courts/CourtList'
import DisputeDetail from './pages/disputes/DisputeDetail'
import DisputeList from './pages/disputes/DisputeList'

const Root = () => (
  <ApolloProvider client={client}>
    <Router>
      <Clock>
        <Wrapper>
          <Header>
            <Container>
              <Title>
                <Link to='/'>Kleros Explorer</Link>
              </Title>
              <Link to='/'>
                <Branding />
              </Link>
              <Menu>
                <Item>
                  <Link to='/courts'>Courts</Link>
                </Item>
                <Item>
                  <Link to='/disputes'>Disputes</Link>
                </Item>
              </Menu>
            </Container>
          </Header>
          <Content>
            <Container>
              <Switch>
                <Route path='/courts' component={CourtList} />
                {/*<Route path='/court/:courtId' component={CourtDetail} />*/}
                <Route path='/disputes' component={DisputeList} />
                {/*<Route path='/dispute/:disputeId' component={DisputeDetail} />*/}
                <Route path='/jurors' component={JurorList} />
                <Route path='/' exact={true} component={HomePage} />
                <Redirect to='/' />
              </Switch>
            </Container>
          </Content>
        </Wrapper>
        <Footer>
          <span>
            Made with <b>❤</b> by&nbsp;
          </span>
          <a href='https://github.com/sistemico/kleroscan' target='_blank' rel='noopener noreferrer'>
            sistemico
          </a>
          <span>&nbsp;using&nbsp;</span>
          <a href='https://thegraph.com/' target='_blank' rel='noopener noreferrer'>
            The Graph
          </a>
        </Footer>
      </Clock>
    </Router>
    <GlobalStylesheet />
  </ApolloProvider>
)

const Wrapper = styled.main`
  flex: 1 1 100%;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
`

const Container = styled.div`
  flex: 1 1 100%;
  width: 100%;
  margin: auto;
  padding: var(--spacing-normal);

  @media only screen and (max-width: 599px) {
    padding: var(--spacing-narrow);
  }

  @media only screen and (min-width: 960px) {
    max-width: 900px;
  }

  @media only screen and (min-width: 1264px) {
    max-width: 1200px;
  }

  @media only screen and (min-width: 1900px) {
    max-width: 1600px;
  }
`

const Content = styled.section`
  ${Container} {
    padding: var(--spacing-narrow) var(--spacing-normal);
  }
`

const Header = styled.header`
  height: 64px;
  background: var(--header-backgroud-color);
  color: var(--text-inverse-color);

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding-top: 0;
    padding-bottom: 0;
  }

  a {
    color: var(--text-inverse-color);
    transition: 0.5s all ease;

    &:hover {
      text-decoration: none;
      text-shadow: 0 0 50px #fff, 0 0 50px #fff;
    }
  }

  svg {
    width: auto;
    height: 40px;
  }
`

const Title = styled.h1`
  display: inline-block;
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  font-weight: normal;
  text-transform: uppercase;
  user-select: none;
`

export const Menu = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: var(--spacing-wide);
  list-style: none;
`

export const Item = styled.li`
  font-weight: bold;
`

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: var(--spacing-wide);
  padding-bottom: var(--spacing-wide);
  font-size: 90%;

  b {
    color: var(--link-color);
    padding: 0 0.25em;
  }
`

export default Root
