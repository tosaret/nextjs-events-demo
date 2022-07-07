import Head from "next/head";

import EventList from "../components/Events/EventList";
import { getFeaturedEvents } from "../helpers/fetchers";

const HomePage = ({ events }) => {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="A lot of great events" />
      </Head>
      <EventList events={events} />
    </div>
  );
};

export async function getStaticProps() {
  const events = await getFeaturedEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 1800,
  };
}

export default HomePage;
