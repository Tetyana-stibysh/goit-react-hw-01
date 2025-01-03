import clsx from 'clsx';
import css from './FriendList.module.css';
function FriendListItem({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id}>
            <div className={css.div}>
              <img src={avatar} alt={name} width="120" />
              <p className={css.name}>{name}</p>
              <p
                className={clsx(
                  isOnline && css.online,
                  !isOnline && css.offline
                )}
              >
                {isOnline ? `Online` : `Offline`}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
export default FriendListItem;
