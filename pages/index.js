import Head from 'next/head';
import {PostCard, Categories, PostWidget, AboutSection} from '../components';
import {getPosts} from '../services';


export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-15 mb-8 max-w-screen-xl">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.icon" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post)=> <PostCard post={post.node} key={post.title}/>)}
          </div>
            <div className="lg:col-span-4 col-span-2">
              <div className="lg:sticky relative top-8 shadowlayered rounded-lg">
                <AboutSection />
                <PostWidget />
                <Categories />

              </div>

            </div>
      </div>
      
    </div>
  )
}

export async function getStaticProps() { //fetch static posts from GraphCMS, to be used as props in function
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}