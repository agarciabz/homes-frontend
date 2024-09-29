import { Text, Title } from "@mantine/core";
import { API } from "../utils/consts";
import Table from "../components/Table";

const Home = () => {
  let homes;
  fetch(`${API}/search`, {
    method: "POST",
    body: JSON.stringify({ amount: 10 }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      res.json().then((json) => {
        console.log(json);
        homes = json.data;
      });
    })
    .catch(console.error);

  return (
    <>
      <Title ta="center" mt={100}>
        Spotahome
      </Title>
      <Text>Lorem ipsum</Text>
      <Table homes={homes} />
    </>
  );
};

export default Home;
