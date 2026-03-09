import Agency from '@/components/containers/home/Agency';
import HomeBlog from '@/components/containers/home/HomeBlog';
import HomeOffer from '@/components/containers/home/HomeOffer';
import HomeSponsor from '@/components/containers/home/HomeSponsor';
import HomeTestimonial from '@/components/containers/home/HomeTestimonial';
import PortfolioText from '@/components/containers/home/PortfolioText';
import HomeOneBanner from '@/components/layout/banner/HomeOneBanner';
import Layout from '@/components/layout/Layout';

export default function Home() {
  return (
    <>
      <Layout header={1} footer={1} video={true}>
        <HomeOneBanner />
        <Agency />
        <PortfolioText />
        <HomeOffer />
        <HomeTestimonial />
        <HomeBlog />
        <HomeSponsor />
        {/* <NextPage /> */}
      </Layout>
    </>
  );
}
