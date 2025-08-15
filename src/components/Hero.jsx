import { Box, Heading, Text, Button, Stack, Image } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box as="section" py={{ base: 10, md: 24 }} textAlign="center" id="hero">
      <Stack spacing={6} align="center">
        <Image
          src="/assets/profile.jpg"
          alt="Profile"
          borderRadius="full"
          boxSize="120px"
          objectFit="cover"
          mb={4}
          fallbackSrc="https://via.placeholder.com/120"
        />
        <Heading as="h1" size="2xl" fontWeight="bold">
          Hi, I'm Your Name
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Software Engineer | Building impactful, scalable solutions
        </Text>
        <Button
          as="a"
          href="#projects"
          size="lg"
          colorScheme="teal"
          mt={4}
        >
          View My Work
        </Button>
      </Stack>
    </Box>
  );
}