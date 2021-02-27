import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

type Icon = {
  href: string
  name: string
}
const Icon = ({ name, href }: Icon) => (
  <a href={href}>
    <FontAwesome name={name} />
  </a>
)

const Base = styled.div`
  margin: 20px 0;
  text-align: center;
  & a {
    display: inline-block;
    margin 5px;
    color: #fff;
  }
  & a span {
    transition: color .2s ease-in;
  }
  & a:hover {
    text-decoration: none;
  }
  & a:hover span.fa-linkedin {
    color: #4875b4;
  }
  & a:hover span.fa-twitter {
    color: #3cf;
  }
  & a:hover span.fa-github-alt {
    color: #fc6d26;
  }
`

type Props = {
  icons: Icon[]
  style?: { [key: string]: string | number }
}

const SocialIcons = (props: Props): JSX.Element => {
  const icons = props.icons.map(icon => {
    return <Icon key={icon.name} name={icon.name} href={icon.href} />
  })
  return <Base {...props}>{icons}</Base>
}

export default SocialIcons
