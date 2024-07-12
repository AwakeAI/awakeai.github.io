"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Box, Grid, GridItem, Image } from '@chakra-ui/react';

const images = [
  "/images/vectors/old_1.png",
  "/images/vectors/old_12.png",
  "/images/vectors/old_3.png",
  "/images/vectors/old_4.png",
  "/images/vectors/old_5.png",
  "/images/vectors/old_11.png",
  "/images/vectors/old_6.png",
  "/images/vectors/old_2.png",
  "/images/vectors/old_7.png",
  "/images/vectors/old_8.png",
  "/images/vectors/old_9.png",
  "/images/vectors/old_10.png",
];


export const ParallaxScroll = ({  }) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <Box
      h="85vh"
      overflowY="scroll"
      ref={gridRef}
      sx={{ '&::-webkit-scrollbar': { display: 'none' } }}
      display={{ base: 'none', md: 'flex' }}
      flexDirection="column"
      alignItems="start"
    >
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        columnGap={10}
        rowGap={10}
        py={20}
        px={20}
        maxW="4xl"
        mx="auto"
      >
        <GridItem gap={4}>
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              <Image
                src={el}
                boxSize="80"
                objectFit="cover"
                borderRadius="full"
                m={0}
                p={0}
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </GridItem>
        <GridItem gap={4}>
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <Image
                src={el}
                boxSize="80"
                objectFit="cover"
                borderRadius="full"
                m={0}
                p={0}
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </GridItem>
        <GridItem gap={4}>
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <Image
                src={el}
                boxSize="80"
                objectFit="cover"
                borderRadius="full"
                m={0}
                p={0}
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </GridItem>
      </Grid>
    </Box>
  );
};
