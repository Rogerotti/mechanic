import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import { Tab, Tabs as TabsMUI } from '@material-ui/core';

import { ITabsProps } from './tabs.types';
import { useStyles } from './tabs.styles';

export const Tabs: React.FC<ITabsProps> = ({ items }) => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <Box
      className={classes.test}
      borderTop={1}
      borderColor="primary.light"
      borderLeft={1}
      boxShadow={22}
      borderRadius={5}
    >
      <TabsMUI
        className={classes.test2}
        value={selectedTab}
        onChange={(_, value) => setSelectedTab(value)}
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
