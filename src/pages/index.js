import React from "react"
import { graphql, StaticQuery } from "gatsby"
import _ from "lodash"
import { Link } from "gatsby"
//import Img from "../static/sx-logo.png"

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
        title="Designed By Serena"
        keywords={[`designer`, `UX`, `user experience`, `software design`]}
      />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <img className="mainLogo" src={`sx-logo.png`} />
          <h1 className="page-head-title">Designed By Serena</h1>

          <h4 style={{ margin: "0.1em 0", fontSize: "1.4em" }}>
            {data.site.siteMetadata.description}
          </h4>
        </header>
      )}
      {/*}
      <div className="tag-container">
        <Link
            style={{ textDecoration: "none", fontWeight: "700" }}
            to={`/`}
            >
            <div className="tag-item">All</div>
        </Link>
        <Link
            style={{ textDecoration: "none" }}
            to={`/tags/applications`}
            >
            <div className="tag-item">Applications</div>
        </Link>
        <Link
            style={{ textDecoration: "none" }}
            to={`/tags/websites`}
            >
            <div className="tag-item-last">Websites</div>
      </Link>
        {/* {tags.map( (tag, index) => {
          if (index === 2){
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
        </div>*/}
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
