import React, { useState } from 'react';
import {
  Box,
  Button,
  Text,
  Image,
  useStyleConfig,
} from '@chakra-ui/react';
import { colors } from "../../theme/colors";

interface ButtonSendStickerProps {
  onStickerClick?: (sticker: string) => void;
}

export function ButtonSendSticker(props: ButtonSendStickerProps) {
  const [isOpen, setOpenState] = useState(false);
  const styles = useStyleConfig('ButtonSendSticker');

  return (
    <Box
      position="relative"
    >
      <Button
        borderRadius="50%"
        padding="0 3px 0 0"
        minWidth="50px"
        minHeight="50px"
        fontSize="20px"
        marginBottom="8px"
        lineHeight="0"
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor={colors.primary['primary-300']}
        filter={isOpen ? 'grayscale(0)' : 'grayscale(0)'}
        _hover={{
          filter: 'grayscale(0)',
        }}
        onClick={() => setOpenState(!isOpen)}
      >
        😋
      </Button>
      {isOpen && (
        <Box
          display="flex"
          flexDirection="column"
          borderRadius="5px"
          position="absolute"
          backgroundColor={colors.neutrals['neutrals-800']}
          width={{ base: '200px', sm: '290px' }}
          height="300px"
          right="30px"
          bottom="30px"
          padding="16px"
          boxShadow="rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px"
          onClick={() => setOpenState(false)}
        >
          <Text
            color={colors.neutrals['neutrals-000']}
            fontWeight="bold"
          >
            Stickers
          </Text>
          <Box
            as="ul"
            overflow="auto"
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            flex={1}
            paddingTop="16px"
          >
            {colors.stickers.map((sticker) => (
              <Box
                as="li"
                key={sticker}
                width="50%"
                borderRadius="5px"
                padding="10px"
                _focus={{
                  backgroundColor: colors.neutrals['neutrals-600'],
                }}
                _hover={{
                  backgroundColor: colors.neutrals['neutrals-600'],
                }}
                onClick={() => {
                  console.log('[dentro do componente]Clicou no sticker:', sticker);
                  if (Boolean(props.onStickerClick)) {
                    props.onStickerClick!(sticker);
                  }
                }}
              >
                <Image src={sticker} />
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}