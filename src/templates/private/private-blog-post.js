import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { black } from "ansi-colors"

class PrivateBlogPostTemplate extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      password: "",
      isPasswordCorrect: false,
    }
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    // Check if the entered password is correct
    // You can replace the example password "mysecretpassword" with your actual password
    if (this.state.password === "canoes10") {
      this.setState({ isPasswordCorrect: true })
    } else {
      alert("Wrong password. Please try again.")
      this.setState({ isPasswordCorrect: false })
    }
  }

  render() {
    const { data } = this.props
    const post = data.markdownRemark
    const siteTitle = " "

    if (!this.state.isPasswordCorrect) {
      // Password form
      return (
        <Layout location={data.location} title={siteTitle}>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
          <div className="pw-form">
            <h2>Enter the password. Please.</h2>
            <form onSubmit={this.handleSubmit}>
              <label style={{ align: "center" }}>
                Password:
                <input
                  style={{
                    color: black,
                    marginTop: "5px",
                    marginBottom: "5px",
                  }}
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                />
              </label>
              <button className="pw-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </Layout>
      )
    } else {
      // Render the actual blog post content here
      return (
        <Layout location={data.location} title={siteTitle}>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
          <article
            className={`post-content ${post.frontmatter.thumbnail ||
              `no-image`}`}
          >
            {/*
        <div             
          data-sal="slide-right"
            data-sal-delay="100"
            data-sal-duration="300000ms"
            data-sal-easing="ease-out-cubic">
          <header className="post-content-header">
            <h2 className="post-content-title">Pantheon Edge</h2>
          </header>
          </div>

          <div             
            data-sal="slide-left"
            data-sal-delay="100"
            data-sal-duration="300000ms"
            data-sal-easing="ease-out-cubic">
          {post.frontmatter.description && (
            <h4 class="post-content-excerpt">{post.frontmatter.description}</h4>
          )}
          </div>
          */}

            {/* {post.frontmatter.thumbnail && (
            <div className="post-content-image">
              <Img
                className="kg-image"
                fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
                alt={post.frontmatter.title}
              />
            </div>
          )} */}
            <header className="post-content-header">
              <h2 style={{ margin: 0 }} className="post-content-title">
                Pantheon Edge
              </h2>
            </header>
            <div style={{ textAlign: "center" }}>
              <h4 style={{ marginTop: "0.2vw" }}>
                ROLE: PRODUCT DESIGN, UX RESEARCH
              </h4>
            </div>
            <div
              className="post-content-body"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <footer className="post-content-footer">
              {/* There are two options for how we display the byline/author-info.
        If the post has more than one author, we load a specific template
        from includes/byline-multiple.hbs, otherwise, we just use the
        default byline. */}
            </footer>
          </article>
        </Layout>
      )
    }
  }
}

export default PrivateBlogPostTemplate

export const pageQuery = graphql`
  query PrivateBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
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
`
