import { Box, Heading, Text, Badge } from "@chakra-ui/react";

export default function ExperienceItem({ role, company, period, details }) {
  return (
    <Box p={6} borderWidth={1} borderRadius="xl" boxShadow="md" bg="whiteAlpha.800">
      <Heading as="h4" size="md">{role}</Heading>
      <Text fontWeight="bold" color="teal.600">{company}</Text>
      <Badge colorScheme="gray" mb={2}>{period}</Badge>
      <Text mt={2}>{details}</Text>
    </Box>
  );
}