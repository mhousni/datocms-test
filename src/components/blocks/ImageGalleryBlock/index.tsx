import { type FragmentOf, graphql } from '@/lib/datocms/graphql';

/**
 * Stubbed ImageGalleryBlockFragment pointing to RecordInterface because ImageGalleryBlockRecord
 * does not exist in the active DatoCMS schema.
 */
export const ImageGalleryBlockFragment = graphql(/* GraphQL */ `
  fragment ImageGalleryBlockFragment on RecordInterface {
    id
  }
`);

type Props = {
  data: FragmentOf<typeof ImageGalleryBlockFragment>;
};

export default function ImageGalleryBlock({ data }: Props) {
  return null;
}
