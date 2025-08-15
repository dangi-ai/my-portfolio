import { Box, Flex, Spacer, IconButton, useColorMode, Link } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex as="nav" p={4} align="center" bg="whiteAlpha.800" boxShadow="md" zIndex="100">
      <Box fontWeight="bold" fontSize="xl" letterSpacing="tight">YourName</Box>
      <Spacer />
      <Flex gap={4}>
        {navLinks.map(link => (
          <Link key={link.href} href={link.href} fontWeight="medium" _hover={{ color: "teal.400" }}>
            {link.label}
          </Link>
        ))}
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          onClick={toggleColorMode}
          variant="ghost"
        />
      </Flex>
    </Flex>
  );
}