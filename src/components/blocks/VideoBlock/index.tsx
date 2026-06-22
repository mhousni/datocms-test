import { type FragmentOf, graphql } from '@/lib/datocms/graphql';

/**
 * Stubbed VideoBlockFragment pointing to RecordInterface because VideoBlockRecord
 * does not exist in the active DatoCMS schema.
 */
export const VideoBlockFragment = graphql(/* GraphQL */ `
  fragment VideoBlockFragment on RecordInterface {
    id
  }
`);

type Props = {
  data: FragmentOf<typeof VideoBlockFragment>;
};

export default function VideoBlock({ data }: Props) {
  return null;
}
