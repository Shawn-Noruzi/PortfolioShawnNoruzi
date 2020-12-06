import Layout from "../components/Layout";


const IndexPage = () => <Layout title="Noruzi | Front End Developer" />;

//If we werent using statically generate pages we would use this to preload props but it disables Automatic Static Optimization
//in the future - sticking to pages and having getStaticProps + Context will yield better loading times being able to take adventage of the ASO 
//this app didnt benefit much from faster loading because its all local data (and not much of it)
// IndexPage.getInitialProps = async (ctx) => {
//     const res = await fetch('/api/projects/')
//     const json = await res.json()
//     return { stars: json.stargazers_count }
//   }

export default IndexPage;
