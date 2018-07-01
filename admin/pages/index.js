import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate, PostIcon } from 'admin/resources/posts';
import jsonServerProvider from 'ra-data-json-server';
import NoSSR from 'react-no-ssr';

// TODO: Find a way to not hardcode the port/address.
const provider = jsonServerProvider('http://localhost:3002');

export default () => (
  <NoSSR>
    <Admin dataProvider={provider}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    </Admin>
  </NoSSR>
);
