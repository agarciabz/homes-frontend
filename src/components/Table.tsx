import { Table } from "@mantine/core";
import { Home } from "../api/homes";
import styles from "./Table.module.css";

interface TableProps {
  homes?: Home[];
  isLoading?: boolean;
}

const HomesTable = (props: TableProps) => {
  const rows = props.homes?.map((home) => (
    <Table.Tr key={home.id}>
      <Table.Td>{home.titleEs}</Table.Td>
      <Table.Td>{home.descriptionEs}</Table.Td>
      <Table.Td className={styles.cell}>{home.city}</Table.Td>
      <Table.Td className={styles.cell}>{home.country}</Table.Td>
      <Table.Td>{home.priceAmount}</Table.Td>
      <Table.Td>{home.availableNow}</Table.Td>
      <Table.Td>
        {home.m2} m{<sup>2</sup>}
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table captionSide="top" highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Title</Table.Th>
          <Table.Th>Description</Table.Th>
          <Table.Th>City</Table.Th>
          <Table.Th>Country</Table.Th>
          <Table.Th>Price</Table.Th>
          <Table.Th>Available now</Table.Th>
          <Table.Th>Superficie</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <Table.Caption>A selection of our finest homes for rent.</Table.Caption>
    </Table>
  );
};

export default HomesTable;
