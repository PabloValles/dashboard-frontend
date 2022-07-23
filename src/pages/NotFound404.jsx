import React from "react";
import { Flex, Image, Stack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import gatito from "../assets/img/cat404.png";

const NotFound404 = () => {
  return (
    <>
      <Stack direction="row" spacing={4}>
        <Link to="/">
          <Button
            leftIcon={<MdKeyboardBackspace />}
            colorScheme="blue"
            variant="solid"
          >
            Menú principal
          </Button>
        </Link>
      </Stack>
      <Flex justifyContent="center" alignItems="center" h="90vh">
        <Image boxSize="600px" objectFit="cover" src={gatito} alt="Gato 404" />
      </Flex>
    </>
  );
};

export default NotFound404;
