import { Paper, Tab, Tabs } from '@material-ui/core';
import React from 'react';
import { ExploreTab } from './Explore';

export const ExploreTabs = ({
  tabs,
  currentTabIndex,
  handleChange,
}: {
  tabs: ExploreTab[];
  currentTabIndex: number;
  handleChange: (event: React.ChangeEvent<{}>, index: number) => void;
}) => {
  if (currentTabIndex === -1) {
    return null;
  }

  return (
    <Paper square>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={currentTabIndex}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        {tabs.map((tab, i) => (
          <Tab key={i} label={tab.label} />
        ))}
      </Tabs>
    </Paper>
  );
};
