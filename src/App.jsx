import { Box, Container } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Helmet>
        <title>My Portfolio | Software Engineer</title>
        <meta name="description" content="Portfolio of a Software Engineer: projects, skills, experience, and contact." />
      </Helmet>
      <Box minH="100vh" display="flex" flexDirection="column">
        <Navbar />
        <Container maxW="6xl" flex="1 0 auto" pt={8}>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </Container>
        <Footer />
      </Box>
    </>
  );
}