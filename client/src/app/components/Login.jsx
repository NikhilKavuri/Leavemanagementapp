"use client";
import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { studentLoginData } from "../services/login.js";
import { useRouter } from "next/navigation";

export default function Login() {
  const [userData, setUserData] = useState("");
  const [facultylogin, setFacultyLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(()=>{
    localStorage.setItem("loggenIn",JSON.stringify(loggedIn))
  },[loggedIn])
  const facultyLogin = () => {
    setFacultyLogin(true);
  };

  const studentLogin = () => {
    setFacultyLogin(false);
  };

  return (
    <Flex
      align="center"
      flexDirection="column"
      justify="center"
      gap={10}
      h="100vh"
    >
      <Heading>Please Login to Continue</Heading>
      <Box bg="white" p={6} rounded="md" w={64}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            id: "",
            role: facultylogin ? "faculty" : "student",
          }}
          onSubmit={async (values, { resetForm }) => {
            let data = await studentLoginData(values);
            console.log(data.studentData[0].role)
            localStorage.setItem("userData", JSON.stringify(data));
            setLoggedIn(true);
            if (data.studentData[0].role === "student") {
              router.push("pages/student");
            }
            else if(data.studentData[0].role==="faculty"){
              router.push("pages/faculty")
            }
            else{
              router.push("/")
            }
            setUserData(data.studentData[0]);
            resetForm();
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                {facultylogin ? (
                  <FormControl isInvalid={!!errors.email && touched.email}>
                    <FormLabel htmlFor="email">Faculty Email</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      variant="filled"
                      validate={(value) => {
                        let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
                        let error;
                        if (value.length === 0) {
                          error = "Email cannot be empty";
                        } else if (!emailRegex.test(value)) {
                          error = "Not a valid email";
                        }
                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                ) : (
                  <FormControl isInvalid={!!errors.email && touched.email}>
                    <FormLabel htmlFor="email">Student Email</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      variant="filled"
                      validate={(value) => {
                        let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
                        let error;
                        if (value.length === 0) {
                          error = "Email cannot be empty";
                        } else if (!emailRegex.test(value)) {
                          error = "Not a valid email";
                        }
                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                )}
                {facultylogin ? (
                  <FormControl isInvalid={!!errors.id && touched.id}>
                    <FormLabel htmlFor="id">Faculty ID</FormLabel>
                    <Field
                      as={Input}
                      id="id"
                      name="id"
                      variant="filled"
                      type="id"
                      validate={(value) => {
                        let error;
                        if (value.length < 6) {
                          error = "Faculty ID cannot be less than 6 Characters";
                        }
                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.id}</FormErrorMessage>
                  </FormControl>
                ) : (
                  <FormControl isInvalid={!!errors.id && touched.id}>
                    <FormLabel htmlFor="id">Student ID</FormLabel>
                    <Field
                      as={Input}
                      id="id"
                      name="id"
                      type="id"
                      variant="filled"
                      validate={(value) => {
                        let error;
                        if (value.length < 6) {
                          error = "Wrong Student ID";
                        }
                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.id}</FormErrorMessage>
                  </FormControl>
                )}

                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value) => {
                      let error;
                      if (value.length < 6) {
                        error = "Password must contain at least 6 characters";
                      }
                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme="purple" width="full">
                  Login
                </Button>
                {facultylogin ? (
                  <Button
                    colorScheme="red"
                    alignSelf="center"
                    width="fit-content"
                    height="3.5vh"
                    backgroundColor="yellow.500"
                    onClick={() => studentLogin()}
                  >
                    Student Login{" "}
                  </Button>
                ) : (
                  <Button
                    colorScheme="red"
                    alignSelf="center"
                    width="fit-content"
                    height="3.5vh"
                    backgroundColor="green.500"
                    onClick={() => facultyLogin()}
                  >
                    Faculty Login{" "}
                  </Button>
                )}
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
