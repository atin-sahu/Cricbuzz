
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaAndroid, FaApple, FaFacebook, FaFirefoxBrowser, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';


export const Footer = () => {
  return (
    <Box bg='#4a4a4a' color="white" mt={5}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }}>
        <Stack>
            <Box maxW='200px'>
                <Image src='https://upload.wikimedia.org/wikipedia/commons/9/9c/Cricbuzz_Logo.png'></Image>
            </Box>
        </Stack>
          <Stack align={'flex-start'}>
            <Heading size='md'>MOBILE SITE & APP</Heading>
            <Link href={'#'}>
                <Box display='flex' gap={3} alignItems='center'>
                    <FaFirefoxBrowser></FaFirefoxBrowser>
                    <Text>m.cricbuzz.com</Text> 
                </Box>
            </Link>
            <Link href={'#'}>
                <Box display='flex' gap={3} alignItems='center'>
                <FaAndroid></FaAndroid>
                    <Text>Android</Text> 
                </Box>
            </Link>
            <Link href={'#'}>
                <Box display='flex' gap={3} alignItems='center'>
                    <FaApple></FaApple>
                    <Text>iOS</Text> 
                </Box>
            </Link>
          </Stack>
          <Stack align={'flex-start'} >
            <Heading size='md'>Follow Us</Heading>
            <Link href={'#'}>
                <Box display='flex' gap={3} alignItems='center'>
                    <FaFacebook ></FaFacebook>
                    <Text>Facebook</Text> 
                </Box>
            </Link>
            <Link href={'#'}>
                <Box display='flex' gap={3} alignItems='center'>
                    <FaTwitter></FaTwitter>
                    <Text>Twitter</Text> 
                </Box>
            </Link>
            <Link href={'#'}>
                <Box display='flex' gap={3} alignItems='center'>
                    <FaInstagram></FaInstagram>
                    <Text>Instagram</Text> 
                </Box>
            </Link>
            <Link href={'#'}>
                <Box display='flex' gap={3} alignItems='center'>
                    <FaLinkedin></FaLinkedin>
                    <Text>LinkedIn</Text> 
                </Box>
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Heading size='md'>Company</Heading>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Advertise</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Use</Link>
            <Link href={'#'}>Cricbuzz TV Ads</Link>
          </Stack>
        </SimpleGrid>
        <Center>
            <Text mt={5} color="rgb(165,178,168)">© 2022 Cricbuzz.com, Times Internet Limited. All rights reserved | The Times of India | Navbharat Times</Text>
        </Center>
      </Container>
    </Box>
  );
}