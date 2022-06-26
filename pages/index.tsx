import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Button, ColorModeScript, HStack, VStack } from "@chakra-ui/react";

const theme = "light";

const CURRENT_YEAR = new Date().getFullYear();

if (typeof window !== "undefined") {
  // only runs when on client env
  localStorage.setItem("chakra-ui-color-mode", "light");
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>M * A * P</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ColorModeScript initialColorMode={theme} />
        <nav className={styles.navbar}>
          <div className={styles.navContainer}>
            <div className={styles.navGrid}>
              <h1>
                <b>The Maths and Physics Bay</b>
              </h1>
              <HStack spacing="28px" justify="center">
                <Link href="/">
                  <button>Home</button>
                </Link>
                <Link href="/about">
                  <button>About Me</button>
                </Link>
                <Link href="/pricing">
                  <button>Pricing</button>
                </Link>
              </HStack>
              <HStack justify="right">
                <Link href="/signin">
                  <Button colorScheme="blue" variant="ghost" width="100px">
                    Login
                  </Button>
                </Link>
                <Link href="/signin">
                  <Button colorScheme="blue" width="100px">
                    Sign Up
                  </Button>
                </Link>
              </HStack>
            </div>
          </div>
        </nav>

        <h1 className={styles.title}>
          <span className={styles.heading}>The Maths and Physics Bay.</span>{" "}
          GCSE Maths and Physics through the eyes of a{" "}
          <i>PhD (Physics) Researcher.</i>
        </h1>

        <div className={styles.intro}>
          <iframe
            width="672"
            height="378"
            src="https://www.youtube.com/embed/MXs1cOlidWs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
          ></iframe>
        </div>

        <p className={styles.description}>
          Get started by choosing a{" "}
          <code className={styles.code}>/learning pathway</code>
        </p>

        <div className={styles.grid}>
          <a
            href="https://www.youtube.com/c/3blue1brown"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h2>Videos &rarr;</h2>
            <p>Follow my video courses for maths and physics deep-dives</p>
          </a>

          <a
            href="https://github.com/wbierbower/awesome-physics"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h2>Learn &rarr;</h2>
            <p>
              Understand physics with these interactive resources and quizzes!
            </p>
          </a>

          <a
            href="https://observablehq.com/@inesrezo/lorenz"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Examples &rarr;</h2>
            <p>
              Play with mathematical visualisations to solidify understanding
            </p>
          </a>

          <a
            href="https://mathforums.com/math/physics/"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Peer Review &rarr;</h2>
            <p>
              Post questions and answers for peers and learn collaboratively
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <VStack>
          <HStack>
            <span>
              <a
                href="https://en-gb.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/facebook.svg"
                  alt="Facebook Logo"
                  width={25}
                  height={25}
                />
              </a>
            </span>
            <span>
              <a
                href="https://www.instagram.com/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram Logo"
                  width={25}
                  height={25}
                />
              </a>
            </span>
          </HStack>
          <div>The Maths and Physics Bay &copy; {CURRENT_YEAR}</div>
        </VStack>
      </footer>
    </div>
  );
};

export default Home;
