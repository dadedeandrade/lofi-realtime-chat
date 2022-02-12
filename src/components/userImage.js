import React from 'react';
import appConfig from '../../config.json';
import Image from 'next/image'

export function UserImage(props) {
  const src = props.src;
  
  if(src.length>=20){
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
          {/* <Image
          src="/randomUser.png" alt="randomUser" width="458" height="458"
          /> */}

      </>
      )
    }  
}
