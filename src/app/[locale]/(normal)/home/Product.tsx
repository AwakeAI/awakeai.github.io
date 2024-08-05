"use client";
import { Box, Center, Flex, Grid, GridItem, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React from "react";

const TechnologySection = () =>{
  const color = useColorModeValue("gray.100", "Black");
  const color2 = useColorModeValue("gray.100", "Black");
  const fnColor = useColorModeValue("Black", "White");
  return (

  <Box className="main-wrapper techn"  backdropFilter='auto' color="black" py={12}>
      <Grid 
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
         w="100%" gap="3" mb={4}>
        <GridItem>
        <Flex direction="column" align="center" bg={color} p={4} borderRadius="md">
          <Text color={fnColor} mb={2}>Raw video</Text>
          <Box bg={color2} p={2} borderRadius="md">
            <Flex sx={{
                transition: 'transform 0.5s', // 动画效果持续0.5秒
                _hover: {
                  transform: 'scale(1.1)', // 鼠标悬停时放大1.3倍
                }
              }} justify="space-between">
              <Image src="/images/raw.gif" alt="video"/>
            </Flex>
          </Box>
        </Flex>
        </GridItem>
        <GridItem>

        <Flex direction="column" align="center" bg={color} p={4} borderRadius="md">
          <Text color={fnColor} mb={2} noOfLines={1}>Human Activities</Text>
          <Box bg={color2} p={2} borderRadius="md">
            <Flex sx={{
                transition: 'transform 0.5s', // 动画效果持续0.5秒
                _hover: {
                  transform: 'scale(1.1)', // 鼠标悬停时放大1.3倍
                }
              }} justify="space-between">
              <Image src="/images/video.gif" alt="video"/>
            </Flex>
          </Box>
        </Flex>
        </GridItem>

        <GridItem>
        <Flex direction="column" align="center" bg={color} p={4} borderRadius="md">
          <Text color={fnColor} mb={2} noOfLines={1}>Segmentation</Text>
          <Box bg={color2} p={2} borderRadius="md">
            <Flex sx={{
                transition: 'transform 0.5s', // 动画效果持续0.5秒
                _hover: {
                  transform: 'scale(1.1)', // 鼠标悬停时放大1.3倍
                }
              }} justify="space-between">
              <Image src="/images/segment29062.gif" alt="video"/>
            </Flex>
          </Box>
        </Flex>
        </GridItem>

      </Grid>
  </Box>
)}

export default TechnologySection;
