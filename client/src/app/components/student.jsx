"use client";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { useFormik } from "formik";
import Approval from "./approval";
import style from "../styled/student.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ApplyLeave } from "../services/leave";

const StudentComponent = () => {
  const [leaveData, setLeaveData] = useState([]);
  const [approvaltatus, setApprovalStatus] = useState("");

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      title: "",
      reason: "",
    },
    onSubmit: async (values, { resetForm }) => {
      values.id = studentData.id
      values.approval = "pending"
      let data = await ApplyLeave(values)
      console.log(data)
      setLeaveData(values);
      resetForm();
    },
  });

  console.log(leaveData);
  const Data = JSON.parse(localStorage.getItem("userData"));
  const studentData = Data.studentData[0]
  return (
    <div>
      <Flex
        align="center"
        flexDirection="column"
        justify="flex-start"
        gap={50}
        h="100vh"
      >
        <Heading>Welcome {studentData.id}</Heading>
        <Heading size={"md"}>Please provide the Leave Information</Heading>
        <Box className={style.inputBox} bg="#E3F4F4" p={4} rounded="md">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl>
                <FormLabel htmlFor="title">Title for Leave</FormLabel>
                <Input
                  id="title"
                  name="title"
                  type="title"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                  backgroundColor="#DDE6ED"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="reason">Reason for Leave</FormLabel>
                <Textarea
                  id="reason"
                  name="reason"
                  type="reason"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.reason}
                  h={200}
                  resize={"none"}
                  backgroundColor="#DDE6ED"
                />
              </FormControl>
              <Flex justify="flex-end" w="100%">
                <Button type="submit" colorScheme="green">
                  Submit
                </Button>
              </Flex>
              {approvaltatus === "pending" ? (
                <Approval status={approvaltatus} />
              ) : (
                <Approval status={approvaltatus} />
              )}
            </VStack>
          </form>
        </Box>
      </Flex>
    </div>
  );
};
export default StudentComponent;
