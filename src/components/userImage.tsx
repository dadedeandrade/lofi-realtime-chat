import { Button, Text } from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";

export function UserImage(props) {
  if (props.src.length >= 25 || props.src === "/randomUser.png") {
    return (
      <div>
        <img src={props.src} />
        <style jsx>{`
          img {
            border-radius: 50%;
            margin-bottom: 16px;
            width: 100%;
            height: 100%;
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <Text
        color="neutrals.200"
        backgroundColor="neutrals.900"
        padding="3px 10px"
        borderRadius="1000px"
      >
        Aguardando um usuário ser inserido
        <span className="dot1"> .</span>
        <span className="dot2">.</span>
        <span className="dot3">.</span>
      </Text>

      <style jsx>{`
        p {
          text-align: center;
        }
        @keyframes blink {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
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
  );
}
