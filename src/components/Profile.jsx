import styles from "./Profile.module.css";
const Profile = ({
  username,
  tag,
  location,
  avatar = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats,
}) => {
  return (
    <div className={styles.profile}>
      <div>
        <img className={styles.img} src={avatar} alt={username} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.stat}>
          <span className={styles.text}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.stat}>
          <span className={styles.text}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.stat}>
          <span className={styles.text}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
