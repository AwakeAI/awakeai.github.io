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


export const ParallaxScroll = () => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);
  const columns = [
    { items: images.slice(0, third), y: translateFirst },
    { items: images.slice(third, 2 * third), y: translateSecond },
    { items: images.slice(2 * third), y: translateThird },
  ];

  return (
    <Box
      h="80vh"
      flexShrink={0}
      overflowY="scroll"
      ref={gridRef}
      sx={{
        scrollbarWidth: "none",
        '&::-webkit-scrollbar': { display: 'none' },
        // Soft fade at the top and bottom of the scrolling gallery.
        maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
      }}
      display={{ base: 'none', md: 'flex' }}
      flexDirection="column"
      alignItems="start"
    >
      <Grid
        templateColumns={{ md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }}
        columnGap={6}
        py={16}
        px={2}
      >
        {columns.map((col, i) => (
          <GridItem key={i} display={{ md: i === 2 ? "none" : "block", xl: "block" }}>
            {col.items.map((el, idx) => (
              <motion.div style={{ y: col.y }} key={`grid-${i}-${idx}`}>
                <Image
                  src={el}
                  w={{ md: "160px", lg: "190px" }}
                  h={{ md: "240px", lg: "280px", xl: "300px" }}
                  mb={6}
                  objectFit="cover"
                  borderRadius="full"
                  alt=""
                />
              </motion.div>
            ))}
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
