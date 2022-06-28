import React from "react";
import Layout from "../../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql, Link } from "gatsby";

// function BlogPage() {
//     const data = useStaticQuery(graphql`
//         query {
//             allMdx(sort: { fields: frontmatter___date, order: DESC }) {
//                 nodes {
//                     frontmatter {
//                         date(formatString: "MMMM D, YYYY")
//                         title
//                     }
//                     id
//                     body
//                 }
//             }
//         }
//     `);
//     return (
//         <Layout pageTitle="My Blog Posts">
//         {data.allMdx.nodes.map((node) => (
//             <article key={node.id}>
//                 <h2>{node.frontmatter.title}</h2>
//                 <p>Posted: {node.frontmatter.date}</p>
//                 <MDXRenderer>{node.body}</MDXRenderer>
//             </article>
//         ))}
//         </Layout>
//     );
// }

const BlogPage = ({ data }) => {
    return (
      <Layout pageTitle="My Blog Posts">
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))}
      </Layout>
    );
  };
  
  export const query = graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          id
          slug
        }
      }
    }
  `;
  

export default BlogPage;