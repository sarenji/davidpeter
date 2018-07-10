import React from 'react';
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  // Fields
  TextField,
  // Buttons
  EditButton,
  // Inputs
  DisabledInput,
  TextInput,
  // validators
  required
} from 'react-admin';

/**
 * VALIDATIONS
 */
const validateTitle = [required()];
const validateSlug = [required()];

/**
 * FORMS
 */
export const TagList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="slug" />
      <EditButton basePath="/tags" />
    </Datagrid>
  </List>
);

export const TagEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" validate={validateTitle} />
      <TextInput source="slug" validate={validateSlug} />
    </SimpleForm>
  </Edit>
);

export const TagCreate = (props) => (
  <Create title="Create a Tag" {...props}>
    <SimpleForm>
      <TextInput source="title" validate={validateTitle} />
      <TextInput source="slug" validate={validateSlug} />
    </SimpleForm>
  </Create>
);
