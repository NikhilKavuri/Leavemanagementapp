"use client";
import { Heading, Flex, Box } from "@chakra-ui/react";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import styled from "../styled/faculty.module.css";
const FacultyComponent = () => {
  const [studentsLeave, setStudentsLeave] = useState([]);

  const facultyData = JSON.parse(localStorage.getItem("userData"));

  return (
    <div>
      <Flex
        align="center"
        flexDirection="column"
        justify="flex-start"
        gap={50}
        h="100vh"
      >
        <Heading>Welcome {facultyData.facultyId}</Heading>
        <Accordion className={styled.accordian} bg={"green.300"} allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 1 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </div>
  );
};

export default FacultyComponent;
