import React from "react"
import { graphql, Link } from "gatsby"
import _ from "lodash"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

class TagPageTemplate extends React.Component {
  render() {
    const props = this.props
    const tag = this.props.pageContext.tag
    const tagStr = tag.toString()
    const tagCheck = this.props.pageContext.tag == "Applications"
    console.log(tag)
    console.log(this.props.pageContext.type)
    const posts = this.props.data.allMarkdownRemark.edges
    const data = this.props.data
    const tags = this.props.data.allMarkdownRemark.distinct
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          // title={`#${tag}`}
          title={`Designed By Serena - ${tag.charAt(0).toUpperCase() +
            tag.slice(1)}`}
          keywords={[`${tag}`, `blog`, `gatsby`, `javascript`, `react`]}
        />
        {data.site.siteMetadata.description && (
          <header className="page-head">
            <img className="mainLogo" src={`sx-logo.png`} />
            <h1 className="page-head-title">Designed By Serena</h1>

            <h4 style={{ margin: "0.1em 0", fontSize: "1.4em" }}>
              {data.site.siteMetadata.description}
            </h4>
          </header>
        )}

        {tagCheck ? (
          <div className="tag-container">
            <Link style={{ textDecoration: "none" }} to={`/`}>
              <div className="tag-item">All</div>
            </Link>
            <Link
              style={{ textDecoration: "none", fontWeight: "700" }}
              to={`/tags/applications`}
            >
              <div className="tag-item">Applications</div>
            </Link>
            <Link style={{ textDecoration: "none" }} to={`/tags/websites`}>
              <div className="tag-item-last">Websites</div>
            </Link>
          </div>
        ) : (
          <div className="tag-container">
            <Link style={{ textDecoration: "none" }} to={`/`}>
              <div className="tag-item">All</div>
            </Link>
            <Link style={{ textDecoration: "none" }} to={`/tags/applications`}>
              <div className="tag-item">Applications</div>
            </Link>
            <Link
              style={{ textDecoration: "none", fontWeight: "700" }}
              to={`/tags/websites`}
            >
              <div className="tag-item-last">Websites</div>
            </Link>
          </div>
        )}

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
          })} */}
        <div className="post-feed">
          {posts.map(({ node }) => {
            return (
              <PostCard key={node.fields.slug} node={node} postClass={`post`} />
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default TagPageTemplate

export const pageQuery = graphql`
  query PostByTag($tag: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      distinct(field: frontmatter___tags)
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
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
