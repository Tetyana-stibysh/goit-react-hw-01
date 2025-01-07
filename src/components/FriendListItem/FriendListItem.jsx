import clsx from 'clsx';
import css from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.div}>
      <img src={avatar} alt={name} width="120" />
      <p className={css.name}>{name}</p>
      <p className={clsx(isOnline && css.online, !isOnline && css.offline)}>
        {isOnline ? `Online` : `Offline`}
      </p>
    </div>
  );
}

export default FriendListItem;
