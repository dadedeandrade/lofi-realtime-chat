// React // Next
import { useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

// Librarys
import { Box, Button, Text, TextField, Image } from '@skynexui/components';

// Components
import { Title } from '../src/components/Title.js'
import { UserImage } from '../src/components/UserImage'
import Modal from "../src/components/Modal"

// Style
import appConfig from '../config.json'



export default function HomePage() {
  const [username, setUsername] = useState('');
  const [showModal, setShowModal] = useState(false)
  const roteamento = useRouter()
  console.log(roteamento)

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.neutrals[500],
          backgroundImage: 'url(https://cdnb.artstation.com/p/assets/images/images/029/320/295/original/bogdan-mb0sco-coffeeanim.gif?1601147277)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply',
        }}
        style={{
          backgrou: 'red'
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
            onSubmit={function (infoDoEvento) {
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
            <Title tag="h2">🍃 Chillin Thrilling 🍃</Title>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
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
                function (event) {
                  const valor = event.target.value
                  setUsername(valor)
                  // setImage(valor)
                }
              }
            />
            <Button
              type='submit'
              label='Entrar com GitHub'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["100"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />

            {/* <Button
              type='submit'
              label='Enter as a Guest'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[600],
                mainColorLight: appConfig.theme.colors.primary[600],
                mainColorStrong: appConfig.theme.colors.primary[800],
              }}
              styleSheet={{ marginTop: '6px'}}
            /> */}
            <Text 
              variant='body4'
              styleSheet={{
                color: appConfig.theme.colors.neutrals[300],
                marginTop: '5px',
              }
              }>
              Dont have a github account?
              {/* <Button
                href="#"
                onClick={() => setShowModal(true)}
                label="Click here"
                className="btn"
                type='submit'
              label='Enter as a Guest'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[600],
                mainColorLight: appConfig.theme.colors.primary[600],
                mainColorStrong: appConfig.theme.colors.primary[800],
              }}
              styleSheet={{ marginTop: '6px'}}>
              </Button> */}
              <Link 
                href="#"
                className="btn"
                onClick={() => setShowModal(true)}
                >
                
                Click Here!
              </Link>
              <Modal show={showModal} onClose={()=> setShowModal(false)}> 
              <Box
                as="form"
                styleSheet={{
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center',
                    justifyContent: 'center',
                  width: { xs: '100%', sm: '50%' },
                  textAlign: 'center',
                    marginBottom: '32px',
                }}
              />
              </Modal>
            </Text>
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