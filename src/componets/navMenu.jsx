import styles from "./navMenu.module.css";
let NavMenu = (props) => {
  return (
    <li className={styles.Categories} id={props.active ? styles.active : ""}>
      {props.content}
    </li>
  );
};

export default NavMenu;
