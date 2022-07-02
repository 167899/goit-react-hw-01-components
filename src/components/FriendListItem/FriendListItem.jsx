import styles from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.status : styles.status_off}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
</li>
  );
}