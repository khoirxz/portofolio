import Layout from "../layout/Layout";
import { Card, Container, SectionContent } from "../components/molecules";
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
//! contoh penulisan style build in dari next.js "className={styles.container}"

export default function Home() {
  return (
    <Layout>
      <Container>
        <SectionContent className="min-h-screen flex items-center flex-row box-border">
          <div className="section1 max-w-screen-lg m-auto p-0 md:p-10 text-center md:text-left">
            <h1 className="title-section text-3xl my-5 pb-2 cursor-pointer relative inline-block">
              Introduction
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>img</div>
              <div>
                <p className="my-4 font-thin">
                  Halo, Aku{" "}
                  <span className="hightlight-text hover:font-semibold border-b-2 border-dotted cursor-pointer">
                    Rizqi
                  </span>{" "}
                  - saya suka membuat sesuatu mengunakan bahasa pemrograman
                </p>

                <p className="my-4 font-thin">
                  saya menyukai dibidang{" "}
                  <span className="hightlight-text hover:font-semibold border-b-2 border-dotted cursor-pointer">
                    frontend
                  </span>{" "}
                  dan terkadang saya juga mengambil bagian{" "}
                  <span className="hightlight-text hover:font-semibold border-b-2 border-dotted cursor-pointer">
                    backend
                  </span>{" "}
                  disebagian project saya.
                </p>
              </div>
            </div>
          </div>
        </SectionContent>
        <SectionContent className="min-h-screen flex items-center flex-row box-border">
          <div className="section1 max-w-screen-lg w-full m-auto p-0 md:p-10">
            <div className="mb-5">
              <h1 className="title-section text-3xl my-5 pb-2 cursor-pointer relative inline-block">
                Projects
              </h1>
              <p className="text-gray-500">daftar project dari github</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 p-0 md:p-10">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </SectionContent>
      </Container>
    </Layout>
  );
}
