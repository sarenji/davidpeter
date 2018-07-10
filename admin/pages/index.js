import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate } from 'admin/resources/posts';
import { TagList, TagEdit, TagCreate } from 'admin/resources/tags';
import provider from 'admin/provider';
import NoSSR from 'react-no-ssr';

export default () => (
  <NoSSR>
    <Admin dataProvider={provider}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
      <Resource name="tags" list={TagList} edit={TagEdit} create={TagCreate} />
    </Admin>
  </NoSSR>
);
