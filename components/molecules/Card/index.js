import React from "react";
import { motion } from "framer-motion";
import styles from "../../../styles/Card.module.css";

const index = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
      className={`${styles.card} my-3 flex flex-col m-3 p-4 cursor-pointer`}
    >
      <div>
        <h1 className="text-lg font-bold">Card title</h1>
      </div>
      <div>
        <p className="text-sm font-normal py-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </motion.div>
  );
};

export default index;
