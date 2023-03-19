import React from 'react';
import { Box, Text, Button } from '@skynexui/components';
import { useRouter } from 'next/router'


export function Header() {
    const router = useRouter()
    return (
        <>
            <Box style={{ 
                width: '100%',
                 marginBottom: '16px',
                  display: 'flex',
                   alignItems: 'center',
                    justifyContent: 'space-between'
                     }}
             >
                <Text variant='heading5'>Chat</Text>
                <Box 
                style={{
                    textAlign: 'center'
                }}>
                    <Text variant='body4'>Você está logado como:</Text>
                    <Text variant='body1'>{router.query.username}</Text>
                    
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