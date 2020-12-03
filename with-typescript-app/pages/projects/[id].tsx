import React from "react";
import { useRouter } from "next/router";
// import { GetStaticProps, GetStaticPaths } from 'next'
import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw Error("error! :( ");
  }

  const data = await res.json();
  console.log("fetched data", data);
  return data;
};
export default function project() {
  const router = useRouter();
  const { id, ...rest } = router.query;
  const { data, error } = useSWR(`/api/projects/${id}`, fetcher);

  console.log("data", data);
  console.log("error", error);

  if (error) {
    return <div>Error</div>
  }

  if (!data) {
    return <div>loading</div>
  }

  return (
    <div>
      <h2>user id= {id} </h2>
      <pre> {JSON.stringify(rest)} </pre>
    </div>
  );
}

// const getStaticProps: GetStaticProps = async ({params}) => {

//  // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1

//   const res = await fetch(`api/projects/${params.id}`)

//   const post = await res.json()
//   console.log('params', params)
//   // Pass post data to the page via props
//   return { props: { post } }
// }

// // const getStaticPaths: GetStaticPaths = async () => {

// //   const res = await fetch('https://.../posts')
// //   const props = await res.json()

// //   // Get the paths we want to pre-render based on posts
// //   const paths = posts.map((post) => ({
// //     params: { id: post.id },
// //   }))

// //   // We'll pre-render only these paths at build time.
// //   // { fallback: false } means other routes should 404.
// //   return { paths, fallback: false }
// // }
