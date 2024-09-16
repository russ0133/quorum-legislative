import { Table, Container, Title } from "@mantine/core";
import { Bill, Legislator, Vote, VoteResult } from "shared";
import useBillsTable from "../components/bill/hooks/useBillsTable";

type Props = {
  bills: Bill[];
  legislators: Legislator[];
  votes: Vote[];
  voteResults: VoteResult[];
};
function BillsView({ bills, legislators, votes, voteResults }: Props) {
  const billsData = useBillsTable({ bills, legislators, votes, voteResults });

  return (
    <Container size="xl" p="xl">
      <Title order={2} mb="xl">
        Bills
      </Title>
      <Table striped highlightOnHover withColumnBorders withTableBorder>
        <Table.Thead>
          <Table.Tr>
            {billsData.columns.map((column) => (
              <Table.Th key={column.key}>{column.label}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {billsData.rows.map((bill) => (
            <Table.Tr key={bill.id}>
              {billsData.columns.map((column) => (
                <Table.Td key={`${bill.id}-${column.key}`}>
                  {bill[column.key as keyof Bill]}
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Container>
  );
}

export default BillsView;
