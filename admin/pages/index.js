import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate, PostIcon } from 'admin/resources/posts';
import jsonServerProvider from 'ra-data-json-server';

export default () => (
  <div>{process.browser &&
    <Admin dataProvider={jsonServerProvider('http://localhost:3002')}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    </Admin>
  }</div>
);
