import React from 'react';
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  // Fields
  ChipField,
  DateField,
  ReferenceField,
  TextField,
  // Buttons
  EditButton,
  // Inputs
  DateInput,
  DisabledInput,
  LongTextInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  // validators
  required,
  regex
} from 'react-admin';
import format from 'date-fns/format'

/**
 * VALIDATIONS
 */
const validateTitle = [required()];
const validateBody = [required()];
const validateSlug = [required(), regex(/^[a-zA-Z0-9_-]*$/, 'Must be a URL-friendly slug')];
const validateTag = [required()];

/**
 * LIST
 */
export const PostList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField
        reference="tags"
        source="tagId"
      >
        <ChipField source="title" />
      </ReferenceField>
      <DateField source="publishedAt" />
      <EditButton basePath="/posts" />
    </Datagrid>
  </List>
);

const PostTitle = ({ record }) => (
  <>Editing {record ? `"${record.title}"` : ''}</>
);

export const PostEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
      <TextInput source="slug" validate={validateSlug} />
      <LongTextInput source="body" />
      <ReferenceInput label="Tag" source="tagId" reference="tags" validate={validateTag}>
        <SelectInput optionText="title" />
      </ReferenceInput>
      <DateInput label="Publication date" source="publishedAt" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = (props) => {
  const defaultPost = {
    publishedAt: format(new Date(), 'YYYY-MM-DD')
  };
  return (
    <Create title="Create a Post" {...props} record={defaultPost}>
      <SimpleForm>
        <TextInput source="title" validate={validateTitle} />
        <LongTextInput source="body" validate={validateBody} />
        <ReferenceInput label="Tag" source="tagId" reference="tags" validate={validateTag}>
          <SelectInput optionText="title" />
        </ReferenceInput>
        <DateInput label="Publication date" source="publishedAt" />
      </SimpleForm>
    </Create>
  );
};
