import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container maxW={'container.xl'} p={'16'} h={'100vh'}>
      <VStack h={'full'} color={'purple.500'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vMax'} />
        <HStack>
          <form>
            <Input
              required
              type={'file'}
              css={{
                '&::file-selector-button': {
                  border: 'none',
                  width: 'calc(100% + 36px)',
                  height: '100%',
                  marginLeft: '-18px',
                  color: 'purple',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                },
              }}
            />
          </form>

          <Button colorScheme={'purple'} type="submit">
            Upload
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Upload;
