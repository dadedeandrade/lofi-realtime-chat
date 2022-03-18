import React from 'react';
import appConfig from '../../config.json';
import Image from 'next/image'
import { Text } from '@skynexui/components';
import { useState } from 'react';

export function UserImage(props) {
  const src = props.src;
  // Length seria o total da URL
  if (src.length >= 25 || src === '/randomUser.png') {
    return (
      <div>
        <img
          src={src}
          onError={({ currentTarget }) => {
            currentTarget.onError = null
            currentTarget.src = '/randomUser.png';
          }}
        />
        <style jsx>{`
      img {
        border-radius: 50%;
        margin-bottom: 16px;
        width:100%;
        height:100%;
      }
      `}</style>
      </div>
    )
  } else {
    return (
      <>
        <Text
          variant="body4"
          styleSheet={{
            color: appConfig.theme.colors.neutrals[200],
            backgroundColor: appConfig.theme.colors.neutrals[900],
            padding: '3px 10px',
            borderRadius: '1000px'
          }}
        >
          <p>Aguardando um usuário ser inserido
          <span className='dot1'> .</span>
          <span className='dot2'>.</span>
          <span className='dot3'>.</span>         
          </p>
        </Text>

          <style jsx>{`
          p{
            text-align:center;
          }
          @keyframes blink {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
          }
          .dot1 {
            animation: blink 2s infinite 0.25s;
          }
          .dot2 {
            animation: blink 2s infinite 0.625s;
          }
          .dot3 {
            animation: blink 2s infinite 1s;
          }
          `}</style>



      </>
    )
  }
}