import useSWR from "swr";
import Image from "next/image";
const fetcher = (url) => fetch(url).then((r) => r.json());

export default function HomePage() {
  const { data, isLoading, error } = useSWR("/api/random-character", fetcher);
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>An error occurred: {error.message}</h1>;
  return (
    <>
      <Image
        src={data.avatar}
        alt={"A random avatar image"}
        width={200}
        height={200}
      />
      <h1>{`${data.firstName} ${data.lastName}`}</h1>
      <p>Address: {data.address}</p>
      <p>Twittername: {data.twitter}</p>
      <p>Geohash: {data.geohash}</p>
    </>
  );
}
