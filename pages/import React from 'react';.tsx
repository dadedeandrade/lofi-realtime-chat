import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface HeaderProps {
  username: string;
}

export function Header({ username }: HeaderProps) {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <Box
      style={{
        width: '100%',
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Text fontSize="2xl" fontWeight="bold">
        Chat
      </Text>
      <Box textAlign="center">
        <Text fontSize="md">Você está logado como:</Text>
        <Text fontSize="lg" fontWeight="bold">
          {username}
        </Text>
      </Box>
      <Button variant="outline" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
}
