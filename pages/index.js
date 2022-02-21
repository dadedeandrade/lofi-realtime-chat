// React // Next
import { useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

// Librarys
import { Box, Button, Text, TextField, Icon } from '@skynexui/components';

// Components
import { Title } from '../src/components/title.js'
import { UserImage } from '../src/components/userImage.js'

// Style
import appConfig from '../config.json'



export default function HomePage() {
  const [username, setUsername] = useState('');
  const [isRandomUser, setRandomUser] = useState(false)
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
      >
        {!isRandomUser &&
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
            {/* Form */}
            <Box
              as="form"
              onSubmit={function (infoDoEvento) {
                infoDoEvento.preventDefault()
                roteamento.push(`/chat?username=${username}`)
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Title tag="h2">🍃 Chillin 🍃</Title>
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




              <Button
                type='submit'
                label='Enter as a Guest'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary[600],
                  mainColorLight: appConfig.theme.colors.primary[600],
                  mainColorStrong: appConfig.theme.colors.primary[800],
                }}
                styleSheet={{ marginTop: '6px' }}
                onClick={() => {setUsername(''), setRandomUser(true) }}
              />
            </Box>
            {/* Form */}


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
                src={`https://github.com/${username}.png`}
              />,
              {username.length > 0 &&
              
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
              }
            </Box>
            {/* Photo Area */}
          </Box>
        }


        {isRandomUser &&
          <Box
            styleSheet={{
              position: 'relative',
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
                roteamento.push(`/chat?username=${username}`)
              }}
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: { xs: '100%', sm: '50%' },
                textAlign: 'center',
                marginBottom: '65px',
              }}
            >

              <Box
                styleSheet={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  justifyContent: 'space-between',
                  // textAlign: 'center',
                }}

              >
                <Icon
                  label="Icon Component"
                  name="FaArrowLeft"
                  onClick={() => { setUsername(''), setRandomUser(false) }}
                  styleSheet={{
                    color: 'white',
                    cursor: 'pointer',
                  }}
                />

                <Title tag="h2" styleSheet={{ position: 'absolute' }}>🍃 Chillin 🍃</Title>


                <Icon
                  label="Icon Component"
                  name="FaArrowLeft"
                  onClick={() => { setUsername(''), setRandomUser(false) }}
                  styleSheet={{
                    color: 'rgba(0,0,0,0)',
                  }}
                />

              </Box>


              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              </Text>

              <TextField
                fullWidth
                styleSheet={{
                  textAlign: 'center'
                }}
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  }
                }}
                placeholder='Your name will appear here :)'
                onChange={
                  function (event) {
                    const valor = event.target.value
                    setUsername(valor+' (Convidado)')
                  }
                }

              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["100"],
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
                src='/randomUser.jpg'
                
              />

              {username.length > 0 &&
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
              }
            </Box>
            {/* Photo Area */}
          </Box>
        }

      </Box>
    </>
  );
}