import React from "react";
import type { NextPage } from "next";
import { getSession, useSession, signOut } from "next-auth/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Link from "next/link";

const App: NextPage = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const { onClose } = useDisclosure();
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
              <Link href="/signin">
                <Button colorScheme="blue" ml={3}>
                  Sign in
                </Button>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    );
  }
  return (
    <div>
      {session && (
        <HStack spacing="24px" className="p-5">
          <div>
            <Image
              className="rounded-full"
              src={session.user?.image || session?.image}
              width={50}
              height={50}
            ></Image>
          </div>
          <div>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Account
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
              </MenuList>
            </Menu>
          </div>
          <Badge colorScheme="green">
            @{session.user?.name || session?.name}
          </Badge>
        </HStack>
      )}
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
