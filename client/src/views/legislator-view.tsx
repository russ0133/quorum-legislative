import { Table, Container, Title } from "@mantine/core";
import { Bill, Legislator, VoteResult } from "shared";
import useLegislatorsTable from "../components/legislator/hooks/useLegislatorsTable";

type Props = {
  bills: Bill[];
  legislators: Legislator[];
  voteResults: VoteResult[];
};
function LegislatorsView({ bills, legislators, voteResults }: Props) {
  const legislatorsTable = useLegislatorsTable({ bills, legislators, voteResults });

  return (
    <Container size="xl" p="xl">
      <Title order={2} mb="xl">
        Legislators
      </Title>
      <Table striped highlightOnHover withColumnBorders withTableBorder>
        <Table.Thead>
          <Table.Tr>
            {legislatorsTable.columns.map((column) => (
              <Table.Th key={column.key}>{column.label}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {legislatorsTable.rows.map((bill) => (
            <Table.Tr key={bill.id}>
              {legislatorsTable.columns.map((column) => (
                <Table.Td key={`${bill.id}-${column.key}`}>
                  {bill[column.key as keyof Legislator]}
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Container>
  );
}

export default LegislatorsView;
