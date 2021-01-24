import React, { ReactChildren } from 'react'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'

import Footer from './footer'

const GlobalStyle = createGlobalStyle`
  @import "//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

  html {
    max-width: 100vw;
    overflow-x: hidden;
  }
`

const Body = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 100vw;

  img {
    margin-bottom: 0;
  }
`

const Content = styled.div`
  flex: 1;
`

type Props = {
  location?: Location
  children?: React.ReactChild[]
}

const PageBase = ({ location, children }: Props) => {
  return (
    <Body>
      <GlobalStyle />
      <Helmet
        title="tubone24"
        meta={[
          { name: 'description', content: 'portfolio' },
          { name: 'keywords', content: 'tubone24, portfolio' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ]}
      />
      <Content>{children}</Content>
      {location && location.pathname !== '/404' && <Footer />}
    </Body>
  )
}

export default PageBase
