import { Table, Container, Title } from "@mantine/core";
import { Bill, Legislator, VoteResult } from "shared";
import useLegislatorsTable from "../components/legislator/hooks/useLegislatorsTable";
import { renderLegislatorCell } from "../components/legislator/utils/legislatorTableUtils";

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
          {legislatorsTable.rows.map((legislator) => (
            <Table.Tr key={legislator.id}>
              {legislatorsTable.columns.map((column) => (
                <Table.Td key={`${legislator.id}-${column.key}`}>
                  {renderLegislatorCell(legislator, column)}
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
