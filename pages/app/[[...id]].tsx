import React from "react";
import type { NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";

const App: NextPage = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  if (loading) {
    return null;
  }
  if (!loading && !session) {
    return (
      <>
        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={!session}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent>
            <AlertDialogHeader>You are not signed in</AlertDialogHeader>
            <AlertDialogBody>
              Before you can view content you must sign in.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme="blue" ml={3}>
                Sign in
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    );
  }
  return (
    <div>
      {session && (
        <Image
          className="rounded-full"
          src={session.user?.image}
          width={150}
          height={150}
        ></Image>
      )}
      <div>You are logged in</div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}

export default App;
