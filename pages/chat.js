import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';
import { useRouter } from 'next/router'
import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { ButtonSendSticker } from '../src/components/buttonSendSticker'


import styles from '../styles/glassMorphism.module.css'

const SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzgxMTE1NywiZXhwIjoxOTU5Mzg3MTU3fQ.wfDaJbPrC2EILmZl8R7tHgeTxIeTFx7m-i_c1gMTJK0'
const SUPA_URL = 'https://jerfaxeghnnbhfxvvucu.supabase.co'
const dbSupaInteraction = createClient(SUPA_URL, SUPA_KEY)



export default function ChatPage() {
    const [mensagem, setMensagem] = React.useState('')
    const [messageList, setMessageList] = React.useState([])

    function listenerSupaBase(addMsg){
        return dbSupaInteraction
            .from('mesHis')
            .on('INSERT',(liveResponse) => {
                addMsg(liveResponse.new)
            })
            .subscribe()    
    } 
    
    
    const roteamento = useRouter()
    const loggedUser = roteamento.query.username

    // Por padrao o useeffect roda qnd a pagina carrega
    // Caso queira onChange basta colocar a variavel onchange na entrada secundaria array
    React.useEffect(() => {
        dbSupaInteraction.from('mesHis').select('*').order('id', { ascending: false }).then(({ data }) => {
            setMessageList(data);
        })
        listenerSupaBase((novaMensagem)=>{
            console.log('novamensagem: '+novaMensagem);
            setMessageList((realtimeListValue)=>{
                return [
                    novaMensagem, ...realtimeListValue,
                ]
            })
    }, [])
})


    function handleNewMessage(novaMensagem) {
        const mensagem = {
            id: messageList.length + 1,
            de: loggedUser,
            texto: novaMensagem,
            created_at: (new Date()).toLocaleDateString()
        }
        console.log(mensagem)
        dbSupaInteraction.from('mesHis').insert([mensagem])
        .then(({ data }) => {
            console.log('Resposta handleNewMessage:::: ' + data)
        })

        setMensagem('');

    }

    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: `url(https://cdna.artstation.com/p/assets/images/images/018/836/268/large/fajar-fazriansyah-master-10.jpg?1560916155)`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                backgroundPosition: 'right',
                color: appConfig.theme.colors.neutrals['000'],
            }}
        >
            {/* Background chat */}
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    // backgroundColor: appConfig.theme.colors.neutrals[700],
                    transition: 0.2,
                    height: '100%',
                    maxWidth: '55%',
                    maxHeight: '75vh',
                    padding: '32px'
                }}
                className={styles.glassMorphismOutside}
            >
                <Header

                />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        // backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                    className={styles.glassMorphismInside}
                >

                    <MessageList messageList={messageList} />
                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        value={messageList[0]}
                    >
                        <TextField
                            placeholder="Insira sua mensagem aqui..."
                            value={mensagem}
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                            onChange={(event) => {
                                const valor = event.target.value
                                setMensagem(valor)
                            }}
                            onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                    event.preventDefault();
                                    handleNewMessage(mensagem);
                                }
                            }
                            }
                        />
                        <ButtonSendSticker
                        onStickerClick={(sticker)=>{
                          handleNewMessage(':stickerURL:'+sticker)
                        }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
function Header() {
    const roteamento = useRouter()
    return (
        <>
            <Box styleSheet={{ 
                width: '100%',
                 marginBottom: '16px',
                  display: 'flex',
                   alignItems: 'center',
                    justifyContent: 'space-between'
                     }}
             >
                <Text variant='heading5'>Chat</Text>
                <Box 
                styleSheet={{
                    textAlign: 'center'
                }}>
                    <Text variant='body4'>Você está logado como:</Text>
                    <Text variant='body1'>{roteamento.query.username}</Text>
                    
                </Box>
                
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}
function MessageList(props) {
    // const messageList  = props.messageList 
    var date = new Date("December 17, 1995 03:24:00");
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >
            {props.messageList.map((mensagemAtual) => {
                return (
                    <Text
                        key={mensagemAtual.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                            hover: {
                                backgroundColor: appConfig.theme.colors.neutrals[700],
                            }
                        }}
                    >
                        <Box
                            styleSheet={{
                                marginBottom: "8px",
                                display: "flex",
                                alignItems: "center"
                            }}
                        >
                            <Image
                                styleSheet={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px',
                                }}
                                src={`https://github.com/${mensagemAtual.de}.png`}


                                
                            />
                            <Text tag="strong">
                                {mensagemAtual.de}
                            </Text>
                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[300],
                                }}
                                tag="span"
                                
                                >
                                {mensagemAtual.created_at}
                            </Text>
                        </Box>
                        {mensagemAtual.texto.startsWith(':stickerURL:')
                            ? (
                                <Image 
                                src={mensagemAtual.texto.replace(':stickerURL:', '')} />
                                )
                                : (
                                mensagemAtual.texto
                                )
                            }
                    </Text>
                )
            })}
        </Box>
    )
}