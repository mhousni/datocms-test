import { TagFragment } from '@/lib/datocms/commonFragments';
import { executeQuery } from '@/lib/datocms/executeQuery';
import { generateMetadataFn } from '@/lib/datocms/generateMetadataFn';
import { graphql, type ResultOf, type VariablesOf } from '@/lib/datocms/graphql';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

/**
 * Caching behavior:
 *
 * This page is dynamically rendered on each request (due to the `draftMode()`
 * call), but the GraphQL data is cached via `executeQuery()` using
 * `cache: 'force-cache'` with the tag 'datocms'. This means that regular
 * visitors won't generate additional calls to DatoCMS.
 *
 * Cache invalidation happens when DatoCMS sends a webhook that triggers
 * `revalidateTag('datocms')`. Note that on Vercel, the Data Cache persists
 * across deployments — new deploys alone won't invalidate cached data. If you
 * need fresh data after deploy, trigger the webhook or purge the cache manually.
 *
 * @see src/lib/datocms/executeQuery.ts for caching implementation details
 * @see src/app/api/invalidate-cache/route.tsx for webhook-based cache invalidation
 */

/**
 * The GraphQL query that will be executed for this route to generate the page
 * content and metadata.
 *
 * Thanks to gql.tada, the result will be fully typed!
 */
const query = graphql(
  /* GraphQL */ `
    query BasicPageQuery($slug: String!) {
      page(filter: { slug: { eq: $slug } }) {
        _seoMetaTags {
          ...TagFragment
        }
        label
        _firstPublishedAt
        sections {
          ... on RecordInterface {
            id
            __typename
          }
        }
      }
    }
  `,
  [TagFragment],
);

type PageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * We use a helper to generate function that fits the Next.js
 * `generateMetadata()` format, automating the creation of meta tags based on
 * the `_seoMetaTags` present in a DatoCMS GraphQL query.
 */
export const generateMetadata = generateMetadataFn<
  PageProps,
  ResultOf<typeof query>,
  VariablesOf<typeof query>
>({
  query,
  // A callback that picks the SEO meta tags from the result of the query
  pickSeoMetaTags: (data) => data.page?._seoMetaTags,
  buildQueryVariables: async ({ params }) => {
    const { slug } = await params;
    return { slug };
  },
});

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const { isEnabled: isDraftModeEnabled } = await draftMode();

  const { page } = await executeQuery(query, {
    variables: { slug },
    includeDrafts: isDraftModeEnabled,
  });

  if (!page) {
    notFound();
  }

  return (
    <>
      <h1>{page.label}</h1>
      <div
        style={{
          padding: '24px',
          border: '1px dashed #ccc',
          borderRadius: '8px',
          margin: '20px 0',
        }}
      >
        <p style={{ fontWeight: 'bold' }}>Modular Sections ({page.sections.length}):</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          {page.sections.map((section) => (
            <li key={section.id}>
              {section.__typename} (ID: {section.id})
            </li>
          ))}
        </ul>
      </div>
      <footer>Published at {page._firstPublishedAt}</footer>
    </>
  );
}
