import React from 'react';
import { Box, Text } from '@skynexui/components';
import appConfig from '../../config.json';
import { UserImage } from './userImage.js'
// import styles from '../../styles/scrollbar.module.css'

export function MessageList(props) {
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
            {props.messageList.map((currentMessage) => {
                return (
                    <Text
                        key={currentMessage.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                            hover: {
                                backgroundColor: appConfig.theme.colors.neutrals[7000],
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
                            <UserImage
                                styleSheet={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px',
                                }}
                                src={`https://github.com/${currentMessage.from}.png`}


                                
                            />
                            <Text tag="strong">
                                {currentMessage.from}
                            </Text>
                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[300],
                                }}
                                tag="span"
                                
                                >
                                {currentMessage.created_at}
                            </Text>
                        </Box>
                        {currentMessage.text.startsWith(':stickerURL:')
                            ? (
                                <UserImage 
                                src={currentMessage.text.replace(':stickerURL:', '')} />
                                )
                                : (
                                currentMessage.text
                                )
                            }
                    </Text>
                )
            })}
        </Box>
    )
}