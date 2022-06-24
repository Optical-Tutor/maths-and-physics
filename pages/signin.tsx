import type { NextPage } from "next";
import { Box, Stack, Center } from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SocialButton from "../components/SocialButton";

const Signin: NextPage = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  console.log(loading);

  const router = useRouter();

  useEffect(() => {
    if (session) {
      console.log(session);
      router.push("/app");
    }
  }, [session, router]);

  return (
    <div>
      <Stack textAlign={"center"} direction={["column", "row"]} spacing="0">
        <Box
          w="40%"
          h="calc(100vh)"
          bgGradient="linear(to-br, #FF0080, #7928CA)"
        >
          master maths and physics
        </Box>
        <Box w="60%" h="calc(100vh)" bg="white">
          <Center padding={4}>
            <SocialButton onClick={() => signIn("github")} />
          </Center>
        </Box>
      </Stack>
    </div>
  );
};

export default Signin;
