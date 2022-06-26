import React from "react";
import { Button, HStack } from "@chakra-ui/react";
import { FaGithub, FaGoogle } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const SocialButton = ({ type, onClick }) => {
  return (
    <HStack>
      <Button
        size="lg"
        colorScheme={type === "Github" ? "gray" : "blue"}
        leftIcon={type === "Github" ? <FaGithub /> : <FaGoogle />}
        onClick={onClick}
      >
        Sign in with {type}
      </Button>
    </HStack>
  );
};

export default SocialButton;
