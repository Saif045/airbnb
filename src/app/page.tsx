import Container from "@/src/components/Container";
import ListingCard from "@/src/components/listings/ListingCard";
import EmptyState from "@/src/components/EmptyState";

import getListings from "@/src/actions/getListings";
import getCurrentUser from "@/src/actions/getCurrentUser";
import ClientOnly from "@/src/components/ClientOnly";



const Home = async ({ searchParams }: any) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div
          className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          ">
          {listings?.map((listing: any) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
