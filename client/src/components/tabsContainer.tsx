import { Tabs, rem, Text } from "@mantine/core";
import { IconPhoto, IconMessageCircle, IconSettings } from "@tabler/icons-react";
import BillsView from "../views/bill-view";
import useBillsData from "./bill/hooks/useBillsData";
import useLegislatorsData from "./legislator/hooks/useLegislatorsData";
import useVoteResultsData from "./voteResults/hooks/useVoteResults";
import useVotesData from "./votes/hooks/useVotesData";

export default function TabsContainer() {
  const { bills, isLoading, error } = useBillsData();
  const {
    legislators,
    isLoading: isLegislatorsLoading,
    error: legislatorsError,
  } = useLegislatorsData();
  const { votes, isLoading: isVotesLoading, error: votesError } = useVotesData();
  const {
    voteResults,
    isLoading: isVoteResultsLoading,
    error: voteResultsError,
  } = useVoteResultsData();

  console.log(error, legislatorsError, votesError, voteResultsError);
  if (isLoading || isLegislatorsLoading || isVotesLoading || isVoteResultsLoading)
    return <Text>Loading...</Text>;

  if (error || legislatorsError || votesError || voteResultsError)
    return <Text c="red">Error. Reload the page.</Text>;

  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs defaultValue="bills" variant="pills">
      <Tabs.List grow>
        <Tabs.Tab value="bills" leftSection={<IconPhoto style={iconStyle} />}>
          Bills
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle style={iconStyle} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<IconSettings style={iconStyle} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="bills">
        <BillsView
          bills={bills}
          legislators={legislators}
          votes={votes}
          voteResults={voteResults}
        />
      </Tabs.Panel>

      <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

      <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
    </Tabs>
  );
}
