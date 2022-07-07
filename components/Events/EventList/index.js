import EventItem from "../EventItem";

import styles from "./index.module.css";

const EventList = ({ events }) => {
  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventList;
