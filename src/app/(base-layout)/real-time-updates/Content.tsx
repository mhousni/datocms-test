import type { ResultOf } from '@/lib/datocms/graphql';
import type { ContentComponentType } from '@/lib/datocms/realtime/generatePageComponent';
import { notFound } from 'next/navigation';
import type { PageProps, query } from './common';

/**
 * This component is responsible for defining the actual content of the route,
 * and will be incorporated into the final page by the page.tsx component.
 *
 * Besides the standard props that you can typically use in your page components
 * (https://nextjs.org/docs/app/api-reference/file-conventions/page#props), a
 * `data` prop is also available, which already contains the result of the
 * GraphQL query to DatoCMS.
 */
const Content: ContentComponentType<PageProps, ResultOf<typeof query>> = ({ data }) => {
  if (!data.page) {
    notFound();
  }

  return (
    <>
      <h1>{data.page.label}</h1>
      <div style={{ padding: '24px', border: '1px dashed #ccc', borderRadius: '8px', margin: '20px 0' }}>
        <p style={{ fontWeight: 'bold' }}>Modular Sections ({data.page.sections.length}):</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          {data.page.sections.map((section) => (
            <li key={section.id}>
              {section.__typename} (ID: {section.id})
            </li>
          ))}
        </ul>
      </div>
      <footer>Published at {data.page._firstPublishedAt}</footer>
    </>
  );
};

export default Content;
