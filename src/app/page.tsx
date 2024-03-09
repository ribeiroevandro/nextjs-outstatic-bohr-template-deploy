import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://www.linkedin.com/in/ribeiroevandro"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/images/by-evandro-ribeiro.svg"
              alt="Evandro Ribeiro logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          // className={styles.logo}
          src="/images/bohr-white-beta.svg"
          alt="Bohr.io Logo"
          width={280}
          height={200}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://docs.bohr.io/docs/start"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Bohr.io features and API.
          </p>
        </a>

        <a
          href="https://docs.bohr.io/docs/templates"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Explore the Bohr.io templates playground.
          </p>
        </a>

        <a
          href="https://bohr.io/createRepository?sampleUrl=https://github.com/ribeiroevandro/nextjs-outstatic-bohr-template-deploy"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Bohr.
          </p>
        </a>
      </div>
    </main>
  );
}
