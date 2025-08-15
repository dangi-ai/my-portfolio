import { Box, Heading, Text, Link, Badge, Image, Stack, HStack } from "@chakra-ui/react";

export default function ProjectCard({ title, description, tech, image, github, demo }) {
  return (
    <Box p={6} borderWidth={1} borderRadius="xl" boxShadow="md" bg="whiteAlpha.800">
      <Image
        src={image || "https://via.placeholder.com/400x200"}
        alt={title}
        borderRadius="md"
        mb={4}
        objectFit="cover"
        w="100%"
        h="180px"
      />
      <Heading as="h3" size="md" mb={2}>{title}</Heading>
      <Text mb={2}>{description}</Text>
      <HStack spacing={2} mb={2}>
        {tech.map(t => (
          <Badge key={t} colorScheme="teal">{t}</Badge>
        ))}
      </HStack>
      <Stack direction="row" spacing={4}>
        {github && <Link href={github} isExternal color="teal.500">GitHub</Link>}
        {demo && <Link href={demo} isExternal color="teal.500">Demo</Link>}
      </Stack>
    </Box>
  );
}