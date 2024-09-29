import { Text, Title, useMantineColorScheme } from "@mantine/core";

const Home = () => {
  const { setColorScheme } = useMantineColorScheme();
  setColorScheme('auto')

  return (
    <>
      <Title ta="center" mt={100}>
        Spotahome
      </Title>
      <Text>Lorem ipsum</Text>
    </>
  );
};

export default Home;
