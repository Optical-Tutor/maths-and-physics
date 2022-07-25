import type { NextPage } from "next";
import { Box, Stack, Center, Text, VStack } from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SocialButton from "../components/SocialButton";
import ReturnHome from "../components/ReturnHome";

const Signin: NextPage = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  console.log(loading);

  const router = useRouter();

  useEffect(() => {
    if (session) {
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
          <ReturnHome />
          <Center h="calc(100vh)">
            <Text w={300} className="text-white text-6xl text-left">
              dive into the maths and physics <Text as="i">bay</Text>
            </Text>
          </Center>
        </Box>
        <Box w="60%" h="calc(100vh)" bg="white">
          <Center h="calc(100vh)">
            <VStack>
              <h1 className="p-5 text-4xl font-black">
                Let&#39;s get you started!
              </h1>
              <SocialButton
                type="Github"
                onClick={() => signIn("github", { callbackUrl: "/app" })}
              />
              <div className="text-slate-400">or</div>
              <SocialButton type="Google" onClick={() => signIn("google")} />
            </VStack>
          </Center>
        </Box>
      </Stack>
    </div>
  );
};

export default Signin;
