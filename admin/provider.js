import jsonServerProvider from 'ra-data-json-server';
import { CREATE } from 'react-admin';

/**
 * HELPERS
 */
const slugify = (val) =>
  val && val.toLowerCase() // Lowercase everything.
    .replace(/[^a-zA-Z0-9_-]/g, '-') // Replace invalid characters with dashes
    .replace(/\-+/g, '-'); // Limit to one dash.

/**
 * PROVIDERS
 */

// TODO: Find a way to not hardcode the port/address.
const provider = jsonServerProvider('http://localhost:3002');

// Creating a new post should automatically generate a slug.
const wrappedProvider = (type, resource, params) => {
  if (type === CREATE && resource === 'posts') {
    const { data } = params;
    // FIXME: Use a non-confusing way to create an immutable clone of params.
    // Since it's local only and only for my use, it's fine to mutate `params`.
    data.slug = slugify(data.title);
    return provider(type, resource, { ...params, data });
  }
  return provider(type, resource, params);
};

export default wrappedProvider;
