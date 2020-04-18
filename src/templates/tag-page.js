import React from "react"
import { graphql, Link } from "gatsby"
import _ from "lodash";
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

class TagPageTemplate extends React.Component {
  render() {
    const props = this.props
    const tag = this.props.pageContext.tag
    const posts = this.props.data.allMarkdownRemark.edges
    const data = this.props.data
    const tags = this.props.data.allMarkdownRemark.distinct
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          // title={`#${tag}`}
          title={`Designed By Serena - ${tag.charAt(0).toUpperCase() + tag.slice(1)}`}
          keywords={[`${tag}`, `blog`, `gatsby`, `javascript`, `react`]}
        />
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
          return (
            <PostCard
              key={node.fields.slug}
              node={node}
              postClass={`post`}
            />
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
    allMarkdownRemark(filter: { frontmatter: { tags: { in: [$tag] } } }, sort: { fields: [frontmatter___date], order: DESC }) {
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
