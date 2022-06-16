import { Box, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import  axios  from "axios"
import { Link } from 'react-router-dom';

export const LatestNews = () => {
    const [latestNews,setLatestNews] = useState([]);

    const getLatestNews = async ()=>{
        const data = await axios({
          method: 'GET',
          url: 'https://unofficial-cricbuzz.p.rapidapi.com/news/get-categories',
          headers: {
            'X-RapidAPI-Key': 'b1233bd737mshb48e280eeb863f7p111f8djsn735cbb71628c',
            'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
          }
        })
        .then((data)=>(data.data.storyType));
        // console.log("LatestNews",data.data.storyType);
        setLatestNews(data);

    }

    useEffect(()=>{
        getLatestNews();
    },[])

  return (
    <Box>
        <Heading size='lg' >LATEST NEWS</Heading>
        {latestNews.map((news)=>{
            return <Box key={news.id}>
                <Link to='' >
                    <Flex gap={2} p={1}>
                        <Box flex={4}>
                            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRdnuP6tn4h6dsKpr9ZAdwISb1vjmXjYSRw&usqp=CAU'></Image>
                        </Box>
                        <Box flex={8}>
                            <Text noOfLines={2}>{news.desc}</Text>
                        </Box>
                    </Flex>   
                    <Divider mt={1} mb={1}></Divider>
                </Link>
            </Box>
        })}
    </Box>
  )
}