import styles from "./FriendList.module.css";
import { FriendListItem } from "../FriendListItem/FriendListItem";

export const FriendList = ({ friends  }) => {
  return (
    <ul className={styles.friend_list}>
      {friends.map((e) => <FriendListItem key={e.id} avatar={e.avatar} name={e.name} isOnline={e.isOnline} />)}
</ul>
  );
}