import {Box, Button. Text, TextField, Image} from '@skynexui/components';
import appConfig from '../config.json'

function GlobalStyle() {
  return (
    <style global jsx>{`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
    }
    body {
      font-family: 'Open Sans', sans-serif;
    }
    /* App fit Height */ 
    html, body, #__next {
      min-height: 100vh;
      display: flex;
      flex: 1;
    }
    #__next {
      flex: 1;
    }
    #__next > * {
      flex: 1;
    }
    /* ./App fit Height */ 
  `}</style>
  );
}

function Title(props) {
  const Tag = props.tag;
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.primary[700]};
        }
        `}</style>

    </>

  )
}

function HomePage() {
  return (
    <div>
      <GlobalStyle/>
      <Title tag='h1'>Boass vindas de volta</Title>
      <h2> Alura cord - Matrix</h2>
<style jsx>{`
  h2 {
    color: red;
  }
  `}</style>

    </div>
  )
}

export default HomePage