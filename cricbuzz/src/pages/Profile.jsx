import { Box, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text, } from '@chakra-ui/react'
import React from 'react'
import { FaGreaterThan, FaPowerOff, FaSubscript, FaUserAlt } from 'react-icons/fa'
import { MdOutlineAttachMoney, MdOutlineContactSupport, MdOutlinePayment, MdSubscriptions } from 'react-icons/md'
import { BsFillAwardFill } from 'react-icons/bs'
import { MyProfile } from '../components/profile/MyProfile'
import { Subscribtion } from '../components/profile/Subscribtion'
import { RCoupons } from '../components/profile/RCoupons'
import { MCoupons } from '../components/profile/MCoupons'
import { Payment } from '../components/profile/Payment'
import { Support } from '../components/profile/Support'


export const Profile = () => {
  return (
    <Box w='80%' m='auto' bgColor='white' p={10}>
        <Tabs orientation='vertical' variant='unstyled'>
            <TabList minW='300px' borderRight='1px solid silver' pr={2}>
                <Tab border='1px solid silver' justifyContent='space-between' _selected={{ color: 'white', bg: 'rgb(0,146,112)' }}>
                    <Flex gap={5} alignItems='center'>
                        <Box ><FaUserAlt ></FaUserAlt></Box>
                        <Text fontSize='lg' fontWeight='medium'>My Profile</Text>
                    </Flex>
                    <Box ><FaGreaterThan></FaGreaterThan></Box>
                </Tab>
                <Tab border='1px solid silver' borderTop='0px' justifyContent='space-between' _selected={{ color: 'white', bg: 'rgb(0,146,112)' }}>
                    <Flex gap={5} alignItems='center'>
                        <Box ><MdSubscriptions></MdSubscriptions></Box>
                        <Text fontSize='lg' fontWeight='medium'>Manage Subscription</Text>
                    </Flex>
                    <Box ><FaGreaterThan></FaGreaterThan></Box>
                </Tab>
                <Tab border='1px solid silver' borderTop='0px' justifyContent='space-between' _selected={{ color: 'white', bg: 'rgb(0,146,112)' }}>
                    <Flex gap={5} alignItems='center'>
                        <Box ><BsFillAwardFill></BsFillAwardFill></Box>
                        <Text fontSize='lg' fontWeight='medium'>Redeem Coupons</Text>
                    </Flex>
                    <Box ><FaGreaterThan></FaGreaterThan></Box>
                </Tab>
                <Tab border='1px solid silver' borderTop='0px' justifyContent='space-between' _selected={{ color: 'white', bg: 'rgb(0,146,112)' }}>
                    <Flex gap={5} alignItems='center'>
                        <Box ><MdOutlineAttachMoney></MdOutlineAttachMoney></Box>
                        <Text fontSize='lg' fontWeight='medium'>My Coupons</Text>
                    </Flex>
                    <Box ><FaGreaterThan></FaGreaterThan></Box>
                </Tab>
                <Tab border='1px solid silver' borderTop='0px' justifyContent='space-between' _selected={{ color: 'white', bg: 'rgb(0,146,112)' }}>
                    <Flex gap={5} alignItems='center'>
                        <Box ><MdOutlinePayment></MdOutlinePayment></Box>
                        <Text fontSize='lg' fontWeight='medium'>Payment History</Text>
                    </Flex>
                    <Box ><FaGreaterThan></FaGreaterThan></Box>
                </Tab>
                <Tab border='1px solid silver' borderTop='0px' justifyContent='space-between' _selected={{ color: 'white', bg: 'rgb(0,146,112)' }}>
                    <Flex gap={5} alignItems='center'>
                        <Box ><MdOutlineContactSupport></MdOutlineContactSupport></Box>
                        <Text fontSize='lg' fontWeight='medium'>Get Support</Text>
                    </Flex>
                    <Box ><FaGreaterThan></FaGreaterThan></Box>
                </Tab>
                <Tab border='1px solid silver' borderTop='0px' justifyContent='space-between' _selected={{ color: 'white', bg: 'rgb(0,146,112)' }}>
                    <Flex gap={5} alignItems='center'>
                        <Box ><FaPowerOff></FaPowerOff></Box>
                        <Text fontSize='lg' fontWeight='medium'>Sign Out</Text>
                    </Flex>
                </Tab>
            </TabList>
            <TabPanels >
                <TabPanel >
                    <MyProfile></MyProfile>
                </TabPanel>
                <TabPanel >
                    <Subscribtion></Subscribtion>
                </TabPanel>
                <TabPanel >
                    <RCoupons></RCoupons>
                </TabPanel>
                <TabPanel >
                    <MCoupons></MCoupons>
                </TabPanel>
                <TabPanel >
                    <Payment></Payment>
                </TabPanel>
                <TabPanel >
                    <Support></Support>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Box>
  )
}
