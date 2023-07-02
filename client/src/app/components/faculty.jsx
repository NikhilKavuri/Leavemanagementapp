"use client";
import { Heading, Flex, Box, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import styled from "../styled/faculty.module.css";
import { leavesData, acceptanceData } from "../services/facultyData";

const FacultyComponent = () => {
  const [studentsLeave, setStudentsLeave] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getTheData = async () => {
      const data = await leavesData();
      setStudentsLeave(data);
    };
    getTheData();
  }, []);

  useEffect(() => {
    (async () => {
      const loggedIn = await JSON.parse(localStorage.getItem("loggedIn"));
      const userValue = await JSON.parse(localStorage.getItem("userData"));
      setUser(userValue);
      if (!loggedIn) {
        router.push("/");
      }
    })();
  }, []);
  // const facultyData = JSON.parse(localStorage.getItem("userData"));
const handleAccept = async(leave) =>{
  const status = await acceptanceData(leave._id,"accepted")
  console.log(status)
}
const handleReject = async (leave)=>{
  const status = await acceptanceData(leave._id,"rejected")
  console.log(status)
}

  return (
    <div>
      <Flex
        align="center"
        flexDirection="column"
        justify="flex-start"
        gap={50}
        h="100vh"
      >
        <Heading>Welcome {user.id} </Heading>
        <Accordion className={styled.accordian} bg={"purple.300"} allowToggle>
          {studentsLeave.map((leave) => (
            <AccordionItem key={leave._id}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="start">
                    <strong>{leave.studentId}</strong>
                  </Box>
                  <Box as="span" flex="1" textAlign="end">
                    {leave.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{leave.reason}
              <Box display={"flex"} justifyContent={"space-between"}>
                <Button onClick={() => handleAccept(leave)} bg={"green.300"}>Accept</Button>
                <Button onClick={()=> handleReject(leave)} bg={"red.300"}>Reject</Button>
              </Box>
              
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>
    </div>
  );
};

export default FacultyComponent;
