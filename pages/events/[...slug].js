import EventList from "../../components/Events/EventList";
import { getFilteredEvents } from "../../helpers/fetchers";
import Head from "next/head";

const EventsPage = (props) => {
  const pageHead = (
    <Head>
      <title>Filtered Events</title>
    </Head>
  );

  if (!props.filteredEvents || props.filteredEvents.length === 0) {
    return (
      <>
        {pageHead}
        <p className="center">No events found for a chosen filter</p>
      </>
    );
  }

  return (
    <>
      {pageHead}
      <EventList events={props.filteredEvents} />
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;

  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2300 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return {
      notFound: true,
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  return {
    props: {
      filteredEvents: filteredEvents,
    },
  };
}

export default EventsPage;
