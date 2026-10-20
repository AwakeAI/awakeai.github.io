"use client";
import { Box, Grid, Image, Text } from '@chakra-ui/react';
import React from "react";

const demos = [
  { label: "Raw video", src: "/images/raw.gif" },
  { label: "Human Activities", src: "/images/video.gif" },
  { label: "Segmentation", src: "/images/segment29062.gif" },
];

const TechnologySection = () => {
  return (
    <Grid
      templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
      w="100%" gap="16px" my={{ base: "8px", lg: "16px" }}>
      {demos.map((d) => (
        <Box
          key={d.src}
          role="group"
          bg="bg.surface"
          border="1px solid"
          borderColor="border.subtle"
          rounded="xl"
          p="10px"
          boxShadow="card"
        >
          <Box rounded="lg" overflow="hidden">
            <Image
              src={d.src}
              alt={`${d.label} demo`}
              w="100%"
              transition="transform 0.5s"
              _groupHover={{ transform: "scale(1.06)" }}
            />
          </Box>
          <Text mt="10px" mb="2px" textAlign="center" fontSize="14px" fontWeight={600} noOfLines={1}>
            {d.label}
          </Text>
        </Box>
      ))}
    </Grid>
  );
};

export default TechnologySection;
