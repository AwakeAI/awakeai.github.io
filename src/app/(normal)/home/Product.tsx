"use client";
import { Box, Center, Flex, Grid, GridItem, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';

const TechnologySection = () =>{
  const color = useColorModeValue("gray.100", "Black");
  const color2 = useColorModeValue("gray.200", "Black");
  const fnColor = useColorModeValue("Black", "White");
  return (

  <Box className="main-wrapper techn" maxW="1340px" maxH="700px" backdropFilter='auto' color="black" p={4}>
    <Flex direction="column" align="center" >

      <Flex justify="space-around" w="100%" gap="3" mb={4}>
        <Flex direction="column" align="center" bg={color} p={4} borderRadius="md">
          <Text color={fnColor} mb={2}>Raw video</Text>
          <Box bg={color2} p={2} borderRadius="md">
            <Flex sx={{
                transition: 'transform 0.5s', // 动画效果持续0.5秒
                _hover: {
                  transform: 'scale(1.1)', // 鼠标悬停时放大1.3倍
                }
              }} justify="space-between">
              <Image src="/images/raw.gif" alt="video" width="300px"/>
            </Flex>
          </Box>
        </Flex>

        <Flex direction="column" align="center" bg={color} p={4} borderRadius="md">
          <Text color={fnColor} mb={2} noOfLines={1}>Human Activities</Text>
          <Box bg={color2} p={2} borderRadius="md">
            <Flex sx={{
                transition: 'transform 0.5s', // 动画效果持续0.5秒
                _hover: {
                  transform: 'scale(1.1)', // 鼠标悬停时放大1.3倍
                }
              }} justify="space-between">
              <Image src="/images/video.gif" alt="video" width="300px"/>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <Flex justify="space-around" w="100%" gap="3">
        <Flex direction="column" align="center" bg={color} p={4} borderRadius="md">
          <Text color={fnColor} mb={2}>Segmentation</Text>
          <Box bg={color2} p={2} borderRadius="md">
            <Flex sx={{
                transition: 'transform 0.5s', // 动画效果持续0.5秒
                _hover: {
                  transform: 'scale(1.1)', // 鼠标悬停时放大1.3倍
                }
              }} justify="space-between">
              <Image src="/images/segment29062.gif" alt="video" width="300px"/>
            </Flex>
          </Box>
        </Flex>

        <Flex direction="column" align="center" bg={color} p={4} borderRadius="md">
          <Text color={fnColor} mb={2}>Multi-Model</Text>
          <Box bg={color2} p={2} borderRadius="md">
            <Flex sx={{
                transition: 'transform 0.5s', // 动画效果持续0.5秒
                _hover: {
                  transform: 'scale(1.1)', // 鼠标悬停时放大1.3倍
                }
              }} justify="space-between">
              <Image src="/images/segment29062.gif" alt="video" width="300px"/>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  </Box>
)}

export default TechnologySection;
