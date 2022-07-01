import styles from "./FriendListItem.module.css";

export const FriendListItem = ({ key, avatar, name, isOnline }) => {
  return (
    <li key={key} className={styles.item}>
      <span className={styles.status}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
</li>
  );
}