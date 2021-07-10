import React from 'react';
import { Create, Datagrid, List, SimpleForm, TextField, TextInput } from 'react-admin';

export const CityCreate: React.FC<any> = (props) => (
  <Create title="Create a City" {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

export const CityList: React.FC<any> = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
    </Datagrid>
  </List>
);
