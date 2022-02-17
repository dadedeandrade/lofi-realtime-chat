import React from 'react';
import appConfig from '../../config.json';
import Image from 'next/image'
import { Text } from '@skynexui/components';

export function UserImage(props) {
  const src = props.src;
  
  if(src.length>=24 || src==='/randomUser.jpg'){
    return (
      <div>
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
      
      </div>
        
        )
      } else {
        return (
          <>
          <img
          src='/randomUser.jpg'
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
    }  
}
