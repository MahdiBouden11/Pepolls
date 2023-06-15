import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { POST_TITLE_FIELD } from "../post/PostTitle";
import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="birthdate" source="birthdate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="image" source="image" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="Comment"
          target="UserId"
          label="Comments"
        >
          <Datagrid rowClick="show">
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="parentPost"
              source="post.id"
              reference="Post"
            >
              <TextField source={POST_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Post" target="UserId" label="posts">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="dislikes" source="dislikes" />
            <TextField label="ID" source="id" />
            <TextField label="likes" source="likes" />
            <ReferenceField
              label="sharing users"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="topic" source="topic" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Post" target="UserId" label="posts">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="dislikes" source="dislikes" />
            <TextField label="ID" source="id" />
            <TextField label="likes" source="likes" />
            <ReferenceField
              label="sharing users"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="topic" source="topic" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
