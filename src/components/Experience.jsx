import { Box, Heading, VStack } from "@chakra-ui/react";
import experience from "../data/experience";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <Box as="section" id="experience" py={16}>
      <Heading as="h2" size="xl" mb={8}>Experience</Heading>
      <VStack spacing={8} align="stretch">
        {experience.map((exp, idx) => (
          <ExperienceItem key={idx} {...exp} />
        ))}
      </VStack>
    </Box>
  );
}