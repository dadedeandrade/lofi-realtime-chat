import {Box, Button, Text, TextField, Image} from '@skynexui/components';
import { useState } from 'react';
import {useRouter} from 'next/router'
// Hooks, sempre useAlgumaCoisa
import appConfig from '../config.json'

function Titulo(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.primary[500]};
        }
        `}</style>

    </>

  )
}
function UserImage(props) {
  const src = props.src;
  
  if(src.length>=26){
    return (
      <>

            <img
              src={src}

            />

            <style jsx>{`
              img {
                border-radius: 50%;
                
                margin-bottom: 16px;
                width:100%;
                height:100%;
              }
          `}</style>
  
        </>
    
      )
  } else {
    return (
      <>
      </>
    )
  }
  
  
}


export default function PaginaInicial() {
  const [username, setUsername] = useState('');
  // const [image, setImage] = useState(`https://github.com/${username}.png`)
  const roteamento = useRouter()
  console.log(roteamento)

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.neutrals[500],
          backgroundImage: 'url(https://cdnb.artstation.com/p/assets/images/images/029/320/295/original/bogdan-mb0sco-coffeeanim.gif?1601147277)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function(infoDoEvento) {
              infoDoEvento.preventDefault()
              // 
              // Dessa forma ele da reload de novo:
                    // window.location.href = '/chat'
              // 
              // Recurso do Next:
              roteamento.push(`/chat?username=${username}`)
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">🍃 Chillin Thrilling 🍃</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[100] }}>
              {appConfig.name}
            </Text>

            <TextField
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                }
              }}
              placeholder='Insert your github user here to join the chat :)'
              onChange={
                function(event){
                  const valor = event.target.value
                  setUsername(valor)
                  // setImage(valor)
                }
              }
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            
            <UserImage
              // onError={this.addDefaultSrc}
              src={`https://github.com/${username}.png`}            
            />            
            
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}