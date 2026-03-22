import { allBlogs } from 'content-collections';
import Image from 'next/image';
import Link from 'next/link';

// const isDev = process.env.NODE_ENV === 'development';

const HomeBlog = () => {
  return (
    <section id='blogs' className='section blog fade-wrapper'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-8'>
            <div className='section__header text-center'>
              <span className='sub-title'>
                news & Blog
                <i className='fa-solid fa-arrow-right'></i>
              </span>
              <h2 className='title title-anim'>what&apos;s new in blog</h2>
            </div>
          </div>
        </div>
        <div className='row gaper'>
          {allBlogs.map((post) => (
            <div className='col-12 col-md-6' key={post._meta.path}>
              <div className='blog__single fade-top'>
                <div className='blog__single-thumb topy-tilt'>
                  <Link href={`/blogs/${post._meta.path}`}>
                    <Image
                      src={post.cover}
                      alt={post.coverAlt}
                      width={1920}
                      height={1080}
                    />
                  </Link>
                </div>
                <div className='blog__single-content'>
                  <h4>
                    <Link href={`/blogs/${post._meta.path}`}>{post.title}</Link>
                  </h4>
                  <div className='blog__single-meta'>
                    {/* <Link
                      href={`/blogs/${post._meta.path}`}
                      className='sub-title'>
                      creative
                      <i className='fa-solid fa-arrow-right'></i>
                    </Link> */}
                    {post.categories.slice(0, 3).map((category) => (
                      <Link
                        key={category}
                        href={`/blogs/${post._meta.path}`}
                        className='sub-title'>
                        {category}
                        <i className='fa-solid fa-arrow-right'></i>
                      </Link>
                    ))}
                    <p>{new Date(post.lastModified).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* <div className='col-12 col-md-6'>
            <div className='blog__single fade-top'>
              <div className='blog__single-thumb topy-tilt'>
                <Link href='blog-single'>
                  <Image
                    src={'/blogs/one.webp'}
                    alt='Image'
                    width={1920}
                    height={1080}
                  />
                </Link>
              </div>
              <div className='blog__single-content'>
                <h4>
                  <Link href='#'>
                    A Simple Social Media Marketing Checklist
                  </Link>
                </h4>
                <div className='blog__single-meta'>
                  <Link href='#' className='sub-title'>
                    creative
                    <i className='fa-solid fa-arrow-right'></i>
                  </Link>
                  <p>MARCH 23, 2023</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6'>
            <div className='blog__single fade-top'>
              <div className='blog__single-thumb topy-tilt'>
                <Link href='blog-single'>
                  <Image
                    src={'/blogs/two.webp'}
                    alt='Image'
                    width={1920}
                    height={1080}
                  />
                </Link>
              </div>
              <div className='blog__single-content'>
                <h4>
                  <Link href='#'>
                    Transforming Challenges into Opportunities
                  </Link>
                </h4>
                <div className='blog__single-meta'>
                  <Link href='#' className='sub-title'>
                    creative
                    <i className='fa-solid fa-arrow-right'></i>
                  </Link>
                  <p>MARCH 23, 2023</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
