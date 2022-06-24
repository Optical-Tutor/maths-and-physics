import React from "react";
import { Button, HStack } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const SocialButton = ({ onClick }) => {
  return (
    <HStack>
      <Button colorScheme="twitter" leftIcon={<FaGithub />} onClick={onClick}>
        Sign in with Github
      </Button>
    </HStack>
  );
};

export default SocialButton;
