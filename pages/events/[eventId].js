import { getEventById, getFeaturedEvents } from "../../helpers/fetchers";

import EventSummary from "../../components/Events/event-detail/event-summary";
import EventLogistics from "../../components/Events/event-detail/event-logistics";
import EventContent from "../../components/Events/event-detail/event-content";
import Head from "next/head";

const EventDetailedPage = ({ event }) => {
  if (!event) {
    return <p className="center">Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export async function getStaticProps(context) {
  const event = await getEventById(context.params.eventId);

  return {
    props: {
      event: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export default EventDetailedPage;
