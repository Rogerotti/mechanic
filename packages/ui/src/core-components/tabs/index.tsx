import React, { useState, useEffect } from 'react';

import Box from '@material-ui/core/Box';
import { Tab, Tabs as TabsMUI } from '@material-ui/core';

import { ITabsProps } from './tabs.types';

export const Tabs: React.FC<ITabsProps> = ({ items, selectedTabId, onChange }) => {
  const [selectedTab, setSelectedTab] = useState<string>(undefined);

  useEffect(() => {
    if (items.find((item) => item.id === selectedTabId)) {
      setSelectedTab(selectedTabId);
    }
  }, [selectedTabId]);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const onChangeCallback = (_: React.ChangeEvent<{}>, value: string) => {
    onChange?.(value);
    setSelectedTab(value);
  };

  return (
    <Box bgcolor="primary.main" borderColor="primary.light">
      <TabsMUI
        value={selectedTab}
        onChange={onChangeCallback}
        variant="fullWidth"
        color="red"
        textColor="secondary"
        indicatorColor="secondary"
      >
        {items && items.map((item) => <Tab key={item.id} value={item.id} icon={item.icon} label={item.value} />)}
      </TabsMUI>
    </Box>
  );
};
