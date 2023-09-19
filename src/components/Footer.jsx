import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          marginTop={['10' , '0']}
          marginBottom={['10' , '0']}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
          borderBottom={['1px solid white' , 'none']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <Text>All Rights Reserved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme="white">
            <a href="https://youtube.com" target={'blank'}>
              YouTube
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a href="https://twitter.com/Fazeen_Ijaz" target={'blank'}>
              Twitter
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a href="https://web.facebook.com/FazeenIjaz" target={'blank'}>
              FaceBook
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a href="https://www.instagram.com/fazeenijaz__arain" target={'blank'}>
              Instagram
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a href="https://github.com/FazeenIjaz" target={'blank'}>
              Github
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
