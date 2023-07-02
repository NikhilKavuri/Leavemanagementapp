"use client";
import { Box, Grid, Icon, GridItem, Button } from "@chakra-ui/react";
import { FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter()
  const handleLogout = ()=>{
    localStorage.removeItem("userData")
    localStorage.setItem("loggedIn",JSON.stringify(false))
    router.push("/")
  }
  return (
<Grid
  templateColumns="repeat(4, 1fr)"
  gap={2}
  display="flex"
  flexDirection="row"
  justifyContent="end"
  alignItems="center"
  pos="fixed"
  bottom={1}
  w="100%"
  p={0}
  bg={"lavender"}
>
  <GridItem bg={"lavender"} >
    <Button bg={"lavender"} onClick={handleLogout}>
      <Box display={"flex"} bg={"lavender"} flexDirection={"row"}>
        <Icon
          as={FaSignOutAlt}
          bg={"lavender"}
          boxSize={10}
          color={"tomato"}
          _hover={{
            transform: 'translateY(-5px)',
            bg: 'lavender',
            transition: 'transform 0.3s ease-in-out',
          }}
        />
      </Box>
    </Button>
  </GridItem>
</Grid>

  );
};

export default Navbar;
