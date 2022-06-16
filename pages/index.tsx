import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>M * A * P</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <nav className={styles.navbar}>
          <HStack spacing='28px'>
            <a>Home</a>
            <a>About Me</a>
            <a>Login</a>
            <Button colorScheme='blue'>Sign Up</Button>
          </HStack>
        </nav>
        
        <h1 className={styles.title}>
          <span className={styles.heading}>The Maths and Physics Bay.</span> GCSE Maths and Physics through the eyes of a PhD (Physics) Researcher.
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
          Get started by choosing a {" "}
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
            <p>Understand physics with these interactive resources and quizzes!</p>
          </a>

          <a
            href="https://observablehq.com/@inesrezo/lorenz"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Examples &rarr;</h2>
            <p>Play with mathematical visualisations to solidify understanding</p>
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
          <span className={styles.logo}>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
                <Image src="/facebook.svg" alt="Facebook Logo" width={80} height={33} />
            </a>
          </span>
          <span>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/instagram.svg" alt="Instagram Logo" width={80} height={28} />
            </a>
          </span>
      </footer>
    </div>
  );
};

export default Home;
