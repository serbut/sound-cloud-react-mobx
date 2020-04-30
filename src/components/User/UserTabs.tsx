import { Tab, Tabs } from '@material-ui/core';
import React from 'react';
import { UserTab } from './UserView';

export const UserTabs = ({
  tabs,
  selectedTabIndex,
  handleTabChange,
}: {
  tabs: UserTab[];
  selectedTabIndex: number;
  handleTabChange: (event: React.ChangeEvent<{}>, index: number) => void;
}) => {
  if (selectedTabIndex === -1) {
    return null;
  }
  return (
    <Tabs
      value={selectedTabIndex}
      onChange={handleTabChange}
      variant="scrollable"
      scrollButtons="auto"
    >
      {tabs.map((tab, i) => (
        <Tab key={i} label={tab.label} />
      ))}
    </Tabs>
  );
};
