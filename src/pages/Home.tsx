import { Title } from "@mantine/core";
import HomesTable from "../components/Table";
import { useQuery } from "@tanstack/react-query";
import { mapResponse, responseIsError, searchHomes } from "../api/homes";

const Home = () => {
  const amount = 10;
  const { data: queryRes, isLoading } = useQuery({
    queryKey: ["search", amount],
    queryFn: () => searchHomes(amount),
  });

  const homesData =
    queryRes &&
    (responseIsError(queryRes) ? undefined : queryRes.data.map(mapResponse));

  return (
    <>
      <Title ta="center" mt={100}>
        Spotahome
      </Title>
      <HomesTable homes={homesData} isLoading={isLoading} />
    </>
  );
};

export default Home;
