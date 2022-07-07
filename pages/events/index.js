import Head from "next/head";
import { useRouter } from "next/router";

import EventList from "../../components/Events/EventList";
import Filter from "../../components/Filter";
import { getAllEvents } from "../../helpers/fetchers";

const EventsPage = ({ filteredEvents }) => {
  const router = useRouter();

  const handleFindEvents = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <Head>
        <title>All events</title>
      </Head>
      <Filter onSearch={handleFindEvents} />
      <EventList events={filteredEvents} />
    </>
  );
};

export async function getStaticProps(context) {
  const allEvents = await getAllEvents();

  return {
    props: {
      filteredEvents: allEvents,
    },
    revalidate: 60,
  };
}

export default EventsPage;
