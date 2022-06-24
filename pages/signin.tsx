import type { NextPage } from "next";
import { Box, Stack } from "@chakra-ui/react";
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
      router.push("/app");
    } else {
      router.push("/");
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
          1
        </Box>
        <Box w="60%" h="calc(100vh)" bg="white">
          <SocialButton onClick={() => signIn("github")} />
        </Box>
      </Stack>
    </div>
  );
};

export default Signin;
