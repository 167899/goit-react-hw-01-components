import PropTypes from 'prop-types';
import styles from "./FriendList.module.css";
import { FriendListItem } from "../FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friend_list}>
      {friends.map((e) => <FriendListItem key={e.id.toString()} avatar={e.avatar} name={e.name} isOnline={e.isOnline} />)}
</ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired
    })
  )
}