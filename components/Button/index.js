import Link from "next/link";

import styles from "./index.module.css";

const Button = ({ children, link }, ...props) => {
  return (
    <>
      {link ? (
        <Link href={link}>
          <a className={styles.btn}>{children}</a>
        </Link>
      ) : (
        <button onClick={props.onClick} className={styles.btn}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
