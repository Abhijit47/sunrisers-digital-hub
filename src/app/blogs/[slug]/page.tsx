import BlogDetailsMain from '@/components/containers/blog/BlogDetailsMain';
import BlogSingleBanner from '@/components/layout/banner/BlogSingleBanner';
import { allBlogs } from 'content-collections';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const { slug } = await params;

  const blog = allBlogs.find((blog) => blog.slug === slug);

  if (!blog) {
    notFound();
  }

  const parentContent = await parent;
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${blog.title} | Sunrisers Digital Hub`,
    description: blog.description,
    applicationName: parentContent.applicationName,
    generator: parentContent.generator,
    referrer: parentContent.referrer,
    creator: blog.author,
    publisher: parentContent.publisher,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    alternates: {
      canonical: `${BASE_URL}/blogs/${blog.slug}`,
    },
    icons: parentContent.icons,
    keywords: blog.categories.join(', '),
    metadataBase: new URL(BASE_URL),
    openGraph: {
      type: 'article',
      title: blog.title,
      description: blog.description,
      emails: parentContent.openGraph?.emails,
      phoneNumbers: parentContent.openGraph?.phoneNumbers,
      siteName: parentContent.openGraph?.siteName,
      locale: parentContent.openGraph?.locale,
      countryName: parentContent.openGraph?.countryName,
      images: [
        {
          url: blog.cover,
          width: 1200,
          height: 630,
          alt: 'Sunrisers Digital Hub - Building Powerful Brands',
        },
      ],
      publishedTime: blog
        ? new Date(blog.lastModified).toISOString()
        : undefined,
      modifiedTime: blog
        ? new Date(blog.lastModified).toISOString()
        : undefined,
      authors: [blog.avatar],
      section: blog.categories[0],
      tags: blog.categories,
    },
    authors: {
      url: blog.avatar,
      name: blog.author,
    },
    verification: parentContent.verification!,
    category: parentContent.category,
    classification: parentContent.classification,
  };
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const blogs = allBlogs;

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPage(props: PageProps<'/blogs/[slug]'>) {
  const params = await props.params;

  if (!params.slug) {
    notFound();
  }

  return (
    <>
      <BlogSingleBanner slug={params.slug} />
      <BlogDetailsMain slug={params.slug} />
    </>
  );
}
