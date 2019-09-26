import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'

import { ApolloProvider } from '@apollo/react-hooks'

import client from './client'

import CourtPage from './pages/CourtPage'
import DisputePage from './pages/DisputePage'
import HomePage from './pages/HomePage'

import logo from './images/kleros-symbol.svg'

const Root = () => (
  <ApolloProvider client={client}>
    <Router>
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
                <Link to='/'>Home</Link>
              </Item>
              <Item>
                <Link to='/court/0'>Courts</Link>
              </Item>
              <Item>
                <Link to='/dispute/123'>Disputes</Link>
              </Item>
            </Menu>
          </Container>
        </Header>
        <Content>
          <Container>
            <Switch>
              <Route path='/court/:courtId' component={CourtPage} />
              <Route path='/dispute/:disputeId' component={DisputePage} />
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
    </Router>
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
    padding: 3rem 1rem;
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

const Branding = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${logo});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;

  animation: spin 4s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`

export const Menu = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: var(--spacing-wide);
  list-style: none;
`

export const Item = styled.li`
  font-weight: bold;

  a {
  }
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
    padding: 0 var(--spacing-narrow);
  }
`

export default Root
