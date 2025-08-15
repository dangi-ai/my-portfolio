import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" py={6} textAlign="center" color="gray.500" fontSize="sm">
      <Text>
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </Text>
    </Box>
  );
}