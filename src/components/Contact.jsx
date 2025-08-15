import { Box, Heading, Text, Stack, Link, Icon } from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <Box as="section" id="contact" py={16}>
      <Heading as="h2" size="xl" mb={6}>Contact</Heading>
      <Text fontSize="lg" mb={6}>
        Interested in collaborating or just want to say hi? Feel free to reach out!
      </Text>
      <Stack direction="row" spacing={8} justify="center" align="center">
        <Link href="mailto:your.email@example.com" isExternal>
          <Icon as={FaEnvelope} boxSize={6} mr={2} /> Email
        </Link>
        <Link href="https://github.com/yourusername" isExternal>
          <Icon as={FaGithub} boxSize={6} mr={2} /> GitHub
        </Link>
        <Link href="https://linkedin.com/in/yourusername" isExternal>
          <Icon as={FaLinkedin} boxSize={6} mr={2} /> LinkedIn
        </Link>
      </Stack>
    </Box>
  );
}