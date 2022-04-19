import Layout from "../layout/Layout";
import { Container, SectionContent } from "../components/molecules";
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
//! contoh penulisan style build in dari next.js "className={styles.container}"

export default function Home() {
  return (
    <Layout>
      <Container>
        <SectionContent className="min-h-screen flex items-center flex-row box-border">
          <div className="section1 max-w-screen-md m-auto">
            <h1 className="title-section text-3xl my-5 pb-2 cursor-pointer relative inline-block">
              Introduction
            </h1>
            <div className="grid grid-cols-2">
              <div>img</div>
              <div>
                <p className="my-4 font-thin">
                  Halo, Aku{" "}
                  <span className="hover:font-semibold border-b-2 border-dotted cursor-pointer">
                    Rizqi
                  </span>{" "}
                  - saya suka membuat sesuatu mengunakan bahasa pemrograman
                </p>

                <p className="my-4 font-thin">
                  saya menyukai dibidang{" "}
                  <span className="hover:font-semibold border-b-2 border-dotted cursor-pointer">
                    frontend
                  </span>{" "}
                  dan terkadang saya juga mengambil bagian{" "}
                  <span className="hover:font-semibold border-b-2 border-dotted cursor-pointer">
                    backend
                  </span>{" "}
                  disebagian project saya.
                </p>
              </div>
            </div>
          </div>
        </SectionContent>
        <SectionContent className="min-h-screen flex items-center flex-row box-border">
          <div className="section1 max-w-screen-md w-full m-auto">
            <div className="text-center mb-14">
              <h1 className="title-section text-3xl  pb-2 cursor-pointer relative inline-block">
                Projects
              </h1>
            </div>

            <div className="grid grid-cols-4">
              <div>Project1</div>
              <div>Project2</div>
              <div>Project3</div>
              <div>Project4</div>
            </div>
          </div>
        </SectionContent>
      </Container>
    </Layout>
  );
}
