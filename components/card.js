import Image from "next/image";
import styles from "../styles/Card.module.css";

const Card = ({image, title, price }) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={image}  />
        <h1 className={styles.title}>
            {title}
        </h1>
        <h3 className={styles.price}>
            {price}
        </h3>
    </div>
  );
};

export default Card;
