import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <Box as="section" id="projects" py={16}>
      <Heading as="h2" size="xl" mb={8}>Projects</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {projects.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </SimpleGrid>
    </Box>
  );
}