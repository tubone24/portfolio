import React from 'react'
import { navigate } from 'gatsby'
import FlickrHero from 'react-flickr-hero'
import styled from 'styled-components'

import Layout from '../components/layout'
import Button from '../components/button'
import HeroText from '../components/heroText'

const HomeButton = styled(Button)`
  position: absolute;
  bottom: 35%;
  left: 20%;
`

const PageNotFound = () => (
  <Layout>
    <FlickrHero
      api_key="89f4752b9b3a8dffcbf94ca144719883"
      user_id="184992580@N06"
      album_id="72157711319102412"
      fillPage
    />
    <HomeButton opaque light onClick={() => navigate('/')}>
      Return To Home Page
    </HomeButton>
    <HeroText text="404 Page Not Found" />
  </Layout>
)

export default PageNotFound
