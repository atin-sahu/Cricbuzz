import { Box, Divider, Flex, Heading, Image, Text, textDecoration } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import  axios  from "axios"
import { Link } from 'react-router-dom';

export const Topics = () => {
    const [topic,setTopic] = useState([]);

    const getTopics = async ()=>{
        const data = await axios({
                method: 'GET',
                url: 'https://unofficial-cricbuzz.p.rapidapi.com/news/get-topics',
                headers: {
                    'X-RapidAPI-Key': 'b1233bd737mshb48e280eeb863f7p111f8djsn735cbb71628c',
                    'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
                }
              })
        .then((data)=>(data.data.topics));
        console.log("topic",data);
        setTopic(data);

    }

    useEffect(()=>{
        getTopics();
    },[])

  return (
    <Box>
        <Heading size='lg' mb={5}>Latest Cricket Topics</Heading>
        {topic.map((tpc)=>{
            return <Box key={tpc.id} mt={1}>
                <Link to=''>
                    <Heading noOfLines={1} fontSize={'2xl'} >{tpc.headline}</Heading>
                </Link>
                <Text noOfLines={1} mt={2} mb={4}>{tpc.desc}</Text>
                <Divider mt={2} mb={4}></Divider>
            </Box>
        })}
    </Box>
  )
}