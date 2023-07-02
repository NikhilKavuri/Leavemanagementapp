  "use client";
import { Spinner, Center} from "@chakra-ui/react";
const Loading = () => {
  return (
    <Center>
      <Spinner
        thickness="10px"
        speed="0.5s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Center>
  );
};
export default Loading;
