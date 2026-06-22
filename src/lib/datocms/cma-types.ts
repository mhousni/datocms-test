import type { ItemTypeDefinition } from '@datocms/cma-client';

type EnvironmentSettings = {
  locales: 'en' | 'it' | 'de' | 'fr' | 'es';
};

export type DetailSection = ItemTypeDefinition<
  EnvironmentSettings,
  '2085695',
  {
    details: {
      type: 'structured_text';
    };
    image: {
      type: 'file';
    };
    image_position: {
      type: 'boolean';
    };
  }
>;
export const DetailSection = {
  ID: '2085695',
  REF: { type: 'item_type', id: '2085695' },
} as const;

export type ReviewSection = ItemTypeDefinition<
  EnvironmentSettings,
  '2085686',
  {
    display_options: {
      type: 'string';
    };
    review_section_header: {
      type: 'string';
    };
    review_section_subheader: {
      type: 'text';
    };
    reviews: {
      type: 'links';
    };
  }
>;
export const ReviewSection = {
  ID: '2085686',
  REF: { type: 'item_type', id: '2085686' },
} as const;

export type ImageBlock = ItemTypeDefinition<
  EnvironmentSettings,
  '2085698',
  {
    image: {
      type: 'file';
    };
  }
>;
export const ImageBlock = {
  ID: '2085698',
  REF: { type: 'item_type', id: '2085698' },
} as const;

export type FeatureListSection = ItemTypeDefinition<
  EnvironmentSettings,
  '2084698',
  {
    display_option: {
      type: 'string';
    };
    features_header: {
      type: 'string';
    };
    features_subheader: {
      type: 'text';
    };
    feature: {
      type: 'rich_text';
      blocks: Feature;
    };
  }
>;
export const FeatureListSection = {
  ID: '2084698',
  REF: { type: 'item_type', id: '2084698' },
} as const;

export type HeroSection = ItemTypeDefinition<
  EnvironmentSettings,
  '2084697',
  {
    display_options: {
      type: 'string';
    };
    hero_image: {
      type: 'file';
    };
    hero_title: {
      type: 'string';
    };
    hero_subtitle: {
      type: 'text';
    };
    buttons: {
      type: 'rich_text';
      blocks: Button;
    };
  }
>;
export const HeroSection = {
  ID: '2084697',
  REF: { type: 'item_type', id: '2084697' },
} as const;

export type CtaButtonWithImage = ItemTypeDefinition<
  EnvironmentSettings,
  '2143176',
  {
    image: {
      type: 'file';
    };
    title: {
      type: 'string';
    };
    subtitle: {
      type: 'text';
    };
    button_label: {
      type: 'string';
    };
  }
>;
export const CtaButtonWithImage = {
  ID: '2143176',
  REF: { type: 'item_type', id: '2143176' },
} as const;

export type TeamSection = ItemTypeDefinition<
  EnvironmentSettings,
  '2163261',
  {
    display_options: {
      type: 'string';
    };
    title: {
      type: 'string';
    };
    subtitle: {
      type: 'text';
    };
    showcased_members: {
      type: 'links';
    };
  }
>;
export const TeamSection = {
  ID: '2163261',
  REF: { type: 'item_type', id: '2163261' },
} as const;

export type VideoSection = ItemTypeDefinition<
  EnvironmentSettings,
  '2085165',
  {
    video_header: {
      type: 'string';
    };
    video_subheader: {
      type: 'text';
    };
    video: {
      type: 'video';
    };
    video_thumbnail: {
      type: 'file';
    };
  }
>;
export const VideoSection = {
  ID: '2085165',
  REF: { type: 'item_type', id: '2085165' },
} as const;

export type Statistic = ItemTypeDefinition<
  EnvironmentSettings,
  '2164363',
  {
    label: {
      type: 'string';
    };
    quantity: {
      type: 'integer';
    };
    icon: {
      type: 'file';
    };
  }
>;
export const Statistic = {
  ID: '2164363',
  REF: { type: 'item_type', id: '2164363' },
} as const;

export type AppCta = ItemTypeDefinition<
  EnvironmentSettings,
  '2282426',
  {
    title: {
      type: 'string';
    };
    text: {
      type: 'text';
    };
    appstore_url: {
      type: 'string';
    };
    google_play_url: {
      type: 'string';
    };
  }
>;
export const AppCta = {
  ID: '2282426',
  REF: { type: 'item_type', id: '2282426' },
} as const;

export type SocialMediaIcon = ItemTypeDefinition<
  EnvironmentSettings,
  '2110770',
  {
    name: {
      type: 'string';
    };
    url: {
      type: 'string';
    };
    icon: {
      type: 'file';
    };
  }
>;
export const SocialMediaIcon = {
  ID: '2110770',
  REF: { type: 'item_type', id: '2110770' },
} as const;

export type Post = ItemTypeDefinition<
  EnvironmentSettings,
  '2076700',
  {
    author: {
      type: 'link';
    };
    slug: {
      type: 'slug';
    };
    seo_tags: {
      type: 'seo';
      localized: true;
    };
    tags: {
      type: 'links';
    };
    title: {
      type: 'string';
      localized: true;
    };
    content: {
      type: 'structured_text';
      blocks: ImageBlock | NewsletterSubscription | CtaButtonWithImage | AppCta;
      localized: true;
    };
    seo_analysis: {
      type: 'json';
    };
  }
>;
export const Post = {
  ID: '2076700',
  REF: { type: 'item_type', id: '2076700' },
} as const;

export type Tag = ItemTypeDefinition<
  EnvironmentSettings,
  '2102353',
  {
    tag: {
      type: 'string';
      localized: true;
    };
    slug: {
      type: 'slug';
    };
  }
>;
export const Tag = {
  ID: '2102353',
  REF: { type: 'item_type', id: '2102353' },
} as const;

export type LegalPage = ItemTypeDefinition<
  EnvironmentSettings,
  '2124827',
  {
    title: {
      type: 'string';
      localized: true;
    };
    content: {
      type: 'structured_text';
      localized: true;
    };
    slug: {
      type: 'slug';
    };
  }
>;
export const LegalPage = {
  ID: '2124827',
  REF: { type: 'item_type', id: '2124827' },
} as const;

export type Page = ItemTypeDefinition<
  EnvironmentSettings,
  '2125262',
  {
    slug: {
      type: 'slug';
    };
    label: {
      type: 'string';
    };
    seo_meta: {
      type: 'seo';
      localized: true;
    };
    sections: {
      type: 'rich_text';
      blocks:
        | HeroSection
        | FeatureListSection
        | BrandSection
        | VideoSection
        | ReviewSection
        | PricingSection
        | FeaturedPostsSection
        | DetailSection
        | TeamSection
        | FaqSection
        | StatsSection
        | AboutIntro
        | AllPostsSection
        | RedirectSection
        | ChangelogSection;
      localized: true;
    };
    seo_analysis: {
      type: 'json';
    };
  }
>;
export const Page = {
  ID: '2125262',
  REF: { type: 'item_type', id: '2125262' },
} as const;

export type Testimonial = ItemTypeDefinition<
  EnvironmentSettings,
  '2178663',
  {
    reviewer_picture: {
      type: 'file';
    };
    rating: {
      type: 'integer';
    };
    reviewer_name: {
      type: 'string';
    };
    review: {
      type: 'structured_text';
      localized: true;
    };
    reviewer_title: {
      type: 'string';
    };
  }
>;
export const Testimonial = {
  ID: '2178663',
  REF: { type: 'item_type', id: '2178663' },
} as const;

export type DocumentationHome = ItemTypeDefinition<
  EnvironmentSettings,
  '2193656',
  {
    logo: {
      type: 'file';
    };
    footer_text: {
      type: 'string';
    };
    title: {
      type: 'string';
    };
    subheader: {
      type: 'string';
    };
    featured_pages: {
      type: 'links';
    };
  }
>;
export const DocumentationHome = {
  ID: '2193656',
  REF: { type: 'item_type', id: '2193656' },
} as const;

export type Layout = ItemTypeDefinition<
  EnvironmentSettings,
  '2178991',
  {
    footer_logo: {
      type: 'file';
    };
    logo: {
      type: 'file';
    };
    main_color: {
      type: 'color';
    };
    notification: {
      type: 'structured_text';
    };
    footer_subtitle: {
      type: 'text';
      localized: true;
    };
    menu: {
      type: 'rich_text';
      blocks: MenuDropdown | MenuItem;
    };
    social_media_links: {
      type: 'rich_text';
      blocks: SocialMediaIcon;
    };
    footer_links: {
      type: 'links';
    };
  }
>;
export const Layout = {
  ID: '2178991',
  REF: { type: 'item_type', id: '2178991' },
} as const;

export type Feature = ItemTypeDefinition<
  EnvironmentSettings,
  '2073609',
  {
    feature_title: {
      type: 'string';
    };
    feature_description: {
      type: 'text';
    };
    feature_icon: {
      type: 'file';
    };
  }
>;
export const Feature = {
  ID: '2073609',
  REF: { type: 'item_type', id: '2073609' },
} as const;

export type Brand = ItemTypeDefinition<
  EnvironmentSettings,
  '2084446',
  {
    brand_name: {
      type: 'string';
    };
    brand_url: {
      type: 'string';
    };
    brand_logo: {
      type: 'file';
    };
  }
>;
export const Brand = {
  ID: '2084446',
  REF: { type: 'item_type', id: '2084446' },
} as const;

export type BrandSection = ItemTypeDefinition<
  EnvironmentSettings,
  '2084959',
  {
    display_options: {
      type: 'string';
    };
    brand: {
      type: 'rich_text';
      blocks: Brand;
    };
  }
>;
export const BrandSection = {
  ID: '2084959',
  REF: { type: 'item_type', id: '2084959' },
} as const;

export type PricingSection = ItemTypeDefinition<
  EnvironmentSettings,
  '2085688',
  {
    display_option: {
      type: 'string';
    };
    pricing_section_header: {
      type: 'string';
    };
    pricing_section_subheader: {
      type: 'text';
    };
    plans: {
      type: 'links';
    };
  }
>;
export const PricingSection = {
  ID: '2085688',
  REF: { type: 'item_type', id: '2085688' },
} as const;

export type FeaturedPostsSection = ItemTypeDefinition<
  EnvironmentSettings,
  '2085691',
  {
    display_options: {
      type: 'string';
    };
    featured_posts_header: {
      type: 'string';
    };
    featured_posts_subheader: {
      type: 'text';
    };
    featured_posts: {
      type: 'links';
    };
  }
>;
export const FeaturedPostsSection = {
  ID: '2085691',
  REF: { type: 'item_type', id: '2085691' },
} as const;

export type Author = ItemTypeDefinition<
  EnvironmentSettings,
  '2085697',
  {
    bio: {
      type: 'string';
      localized: true;
    };
    description: {
      type: 'text';
      localized: true;
    };
    name: {
      type: 'string';
      localized: true;
    };
    area_of_interest: {
      type: 'string';
      localized: true;
    };
    picture: {
      type: 'file';
    };
    slug: {
      type: 'slug';
    };
  }
>;
export const Author = {
  ID: '2085697',
  REF: { type: 'item_type', id: '2085697' },
} as const;

export type Button = ItemTypeDefinition<
  EnvironmentSettings,
  '2109349',
  {
    label: {
      type: 'string';
    };
    url: {
      type: 'string';
    };
    primary: {
      type: 'boolean';
    };
  }
>;
export const Button = {
  ID: '2109349',
  REF: { type: 'item_type', id: '2109349' },
} as const;

export type NewsletterSubscription = ItemTypeDefinition<
  EnvironmentSettings,
  '2142994',
  {
    title: {
      type: 'string';
    };
    subtitle: {
      type: 'text';
    };
    button_label: {
      type: 'string';
    };
  }
>;
export const NewsletterSubscription = {
  ID: '2142994',
  REF: { type: 'item_type', id: '2142994' },
} as const;

export type FaqSection = ItemTypeDefinition<
  EnvironmentSettings,
  '2163794',
  {
    display_options: {
      type: 'string';
    };
    title: {
      type: 'string';
    };
    subtitle: {
      type: 'text';
    };
    questions: {
      type: 'rich_text';
      blocks: Question;
    };
  }
>;
export const FaqSection = {
  ID: '2163794',
  REF: { type: 'item_type', id: '2163794' },
} as const;

export type Question = ItemTypeDefinition<
  EnvironmentSettings,
  '2163795',
  {
    question: {
      type: 'string';
    };
    answer: {
      type: 'structured_text';
      blocks: NewsletterSubscription | CtaButtonWithImage;
    };
  }
>;
export const Question = {
  ID: '2163795',
  REF: { type: 'item_type', id: '2163795' },
} as const;

export type StatsSection = ItemTypeDefinition<
  EnvironmentSettings,
  '2164362',
  {
    title: {
      type: 'string';
    };
    subtitle: {
      type: 'text';
    };
    statistic: {
      type: 'rich_text';
      blocks: Statistic;
    };
  }
>;
export const StatsSection = {
  ID: '2164362',
  REF: { type: 'item_type', id: '2164362' },
} as const;

export type AboutIntro = ItemTypeDefinition<
  EnvironmentSettings,
  '2168427',
  {
    pre_header: {
      type: 'string';
    };
    header: {
      type: 'string';
    };
    subheader: {
      type: 'text';
    };
    introduction_text: {
      type: 'structured_text';
    };
    images: {
      type: 'gallery';
    };
  }
>;
export const AboutIntro = {
  ID: '2168427',
  REF: { type: 'item_type', id: '2168427' },
} as const;

export type PricingTier = ItemTypeDefinition<
  EnvironmentSettings,
  '2178662',
  {
    monthly_price: {
      type: 'integer';
    };
    tier_name: {
      type: 'string';
    };
    yearly_price: {
      type: 'float';
    };
    tier_description: {
      type: 'structured_text';
      localized: true;
    };
    plan_features: {
      type: 'string';
    };
    slug: {
      type: 'slug';
    };
  }
>;
export const PricingTier = {
  ID: '2178662',
  REF: { type: 'item_type', id: '2178662' },
} as const;

export type DocumentationPage = ItemTypeDefinition<
  EnvironmentSettings,
  '2178935',
  {
    slug: {
      type: 'slug';
    };
    seo_meta: {
      type: 'seo';
    };
    title: {
      type: 'string';
    };
    subtitle: {
      type: 'string';
    };
    content: {
      type: 'structured_text';
    };
    position: {
      type: 'integer';
    };
    parent_id: {
      type: 'string';
    };
  }
>;
export const DocumentationPage = {
  ID: '2178935',
  REF: { type: 'item_type', id: '2178935' },
} as const;

export type ChangeLog = ItemTypeDefinition<
  EnvironmentSettings,
  '2179046',
  {
    version_name: {
      type: 'string';
    };
    time_of_release: {
      type: 'date_time';
    };
    content: {
      type: 'structured_text';
    };
    slug: {
      type: 'slug';
    };
  }
>;
export const ChangeLog = {
  ID: '2179046',
  REF: { type: 'item_type', id: '2179046' },
} as const;

export type AllPostsSection = ItemTypeDefinition<
  EnvironmentSettings,
  '2185423',
  {}
>;
export const AllPostsSection = {
  ID: '2185423',
  REF: { type: 'item_type', id: '2185423' },
} as const;

export type RedirectSection = ItemTypeDefinition<
  EnvironmentSettings,
  '2204737',
  {
    slug_to_redirect_to: {
      type: 'string';
    };
  }
>;
export const RedirectSection = {
  ID: '2204737',
  REF: { type: 'item_type', id: '2204737' },
} as const;

export type ChangelogSection = ItemTypeDefinition<
  EnvironmentSettings,
  '2219198',
  {
    title: {
      type: 'string';
    };
    subtitle: {
      type: 'text';
    };
    featured_versions: {
      type: 'links';
    };
  }
>;
export const ChangelogSection = {
  ID: '2219198',
  REF: { type: 'item_type', id: '2219198' },
} as const;

export type MenuDropdown = ItemTypeDefinition<
  EnvironmentSettings,
  '2263907',
  {
    title: {
      type: 'string';
    };
    items: {
      type: 'rich_text';
      blocks: MenuItem;
    };
  }
>;
export const MenuDropdown = {
  ID: '2263907',
  REF: { type: 'item_type', id: '2263907' },
} as const;

export type MenuItem = ItemTypeDefinition<
  EnvironmentSettings,
  '2263908',
  {
    title: {
      type: 'string';
    };
    page: {
      type: 'link';
    };
  }
>;
export const MenuItem = {
  ID: '2263908',
  REF: { type: 'item_type', id: '2263908' },
} as const;

export type AnyBlock =
  | DetailSection
  | ReviewSection
  | ImageBlock
  | FeatureListSection
  | HeroSection
  | CtaButtonWithImage
  | TeamSection
  | VideoSection
  | Statistic
  | AppCta
  | SocialMediaIcon
  | Feature
  | Brand
  | BrandSection
  | PricingSection
  | FeaturedPostsSection
  | Button
  | NewsletterSubscription
  | FaqSection
  | Question
  | StatsSection
  | AboutIntro
  | AllPostsSection
  | RedirectSection
  | ChangelogSection
  | MenuDropdown
  | MenuItem;
export type AnyModel =
  | Post
  | Tag
  | LegalPage
  | Page
  | Testimonial
  | DocumentationHome
  | Layout
  | Author
  | PricingTier
  | DocumentationPage
  | ChangeLog;
export type AnyBlockOrModel = AnyBlock | AnyModel;
