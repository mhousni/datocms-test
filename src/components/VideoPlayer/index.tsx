import { type FragmentOf, graphql, readFragment } from '@/lib/datocms/graphql';

/**
 * VideoPlayerFragment is stubbed to RecordInterface because `VideoFileField`
 * does not exist in the active DatoCMS schema for this project.
 *
 * If you add a video field to your DatoCMS schema in the future, update this
 * fragment to point to the correct type (e.g. `on FileField`) and re-implement
 * the component body.
 */
export const VideoPlayerFragment = graphql(/* GraphQL */ `
  fragment VideoPlayerFragment on RecordInterface {
    id
  }
`);

type Props = {
  data: FragmentOf<typeof VideoPlayerFragment>;
};

export default function VideoPlayer({ data }: Props) {
  return null;
}
