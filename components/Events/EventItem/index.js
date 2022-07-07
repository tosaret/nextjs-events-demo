import Button from "../../Button";
import DateIcon from "../../icons/date-icon";
import AddressIcon from "../../icons/address-icon";
import ArrowRightIcon from "../../icons/arrow-right-icon";

import styles from "./index.module.css";
import Image from "next/image";

const EventItem = ({ event }) => {
  const readableDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = event.location.replace(", ", "\n");

  const exploreLink = `/events/${event.id}`;

  return (
    <li className={styles.item}>
      <Image
        src={"/" + event.image}
        alt={event.title}
        width={250}
        height={160}
      />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{event.title}</h2>
          <div className={styles.date}>
            <time>
              <DateIcon />
              {readableDate}
            </time>
          </div>
          <div className={styles.address}>
            <address>
              <AddressIcon />
              {formattedAddress}
            </address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
