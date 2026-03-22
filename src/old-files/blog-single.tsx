import Layout from '@/components/layout/Layout';
import BlogSingleBanner from '@/components/layout/banner/BlogSingleBanner';
// import BlogDetailsMain from "@/components/containers/blog/BlogDetailsMain";

const BlogSingle = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <BlogSingleBanner slug='123' />
      {/* <BlogDetailsMain /> */}
    </Layout>
  );
};

export default BlogSingle;
