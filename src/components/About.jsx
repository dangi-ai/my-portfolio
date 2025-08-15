import { Box, Heading, Text, Stack, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaReact, FaNodeJs, FaDatabase, FaPython } from "react-icons/fa";

const skills = [
  { icon: FaReact, label: "React.js" },
  { icon: FaNodeJs, label: "Node.js" },
  { icon: FaPython, label: "Python" },
  { icon: FaDatabase, label: "SQL/NoSQL" },
  // Add more as needed
];

export default function About() {
  return (
    <Box as="section" id="about" py={16}>
      <Heading as="h2" size="xl" mb={6}>About Me</Heading>
      <Text fontSize="lg" mb={6}>
        Passionate software engineer with a focus on building scalable web applications.
        Skilled in full-stack development, cloud solutions, and modern JavaScript frameworks.
        Always eager to learn and tackle new challenges.
      </Text>
      <Heading as="h3" size="md" mb={4}>Skills & Tools</Heading>
      <SimpleGrid columns={[2, 3, 4]} spacing={6}>
        {skills.map(skill => (
          <Stack align="center" key={skill.label}>
            <Icon as={skill.icon} boxSize={8} color="teal.400" />
            <Text>{skill.label}</Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Box>
  );
}