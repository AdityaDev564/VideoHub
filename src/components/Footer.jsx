import {
  Box,
  Stack,
  Button,
  HStack,
  VStack,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import {
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineGithub,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size="md" textTransform={'uppercase'} textAlign={'center'}>
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            Video Hub
          </Heading>
          <Text>All rights received</Text>
        </VStack>
        <VStack w="full">
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <HStack>
            <Button variant={'ghost'} colorScheme={'purple'}>
              <a href="https://youtube.com" target="__blank">
                <AiFillYoutube size={30} />
              </a>
            </Button>
            <Button variant={'ghost'} colorScheme={'purple'}>
              <a href="https://github.com" target="__blank">
                <AiOutlineGithub size={30} />
              </a>
            </Button>
            <Button variant={'ghost'} colorScheme={'purple'}>
              <a href="https://instagram.com" target="__blank">
                <AiFillInstagram size={30} />
              </a>
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
