import React from "react"
import { graphql, StaticQuery } from "gatsby"
import _ from "lodash";
import { Link } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Bio from "../components/bio"
import PostCard from "../components/postCard"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const tags = data.allMarkdownRemark.distinct
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Posts"
        keywords={[`designer`, `UX`, `user experience`, `software design`]}
      />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h1 className="page-head-title">
            {data.site.siteMetadata.description}
          </h1>
          <h3 style={{
            margin: '.3em 0 1em 0'
            }}>Passion for emerging tech.</h3>
        </header>
      )}
      <div className="tag-container">
        {tags.map( (tag, index) => {
          if (index == 3){
            return(
              <Link
              key={tag}
              style={{ textDecoration: "none" }}
              to={`/tags/${_.kebabCase(tag)}`}
              >
              <div className="tag-item-last">{tag}</div>
              </Link>
            )
          }
          else{
            return(
                <Link
                key={tag}
                style={{ textDecoration: "none" }}
                to={`/tags/${_.kebabCase(tag)}`}
                >
                <div className="tag-item">{tag}</div>
                </Link>
            )}
          })}
        </div>
      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { 
      fields: [frontmatter___date], 
      order: DESC }) {
        distinct(field: frontmatter___tags)
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
            tags
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <div>
        <BlogIndex location={props.location} props data={data} {...props} />
      </div>
    )}
  />
)
