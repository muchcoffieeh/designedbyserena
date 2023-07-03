const path = require("path")
const _ = require("lodash")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve("./src/templates/blog-post.js")
  const privateBlogPost = path.resolve(
    "./src/templates/private/private-blog-post.js"
  )
  const tagPage = path.resolve("./src/templates/tag-page.js")

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tags
              templateKey
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMarkdownRemark.edges
  const tagSet = new Set()

  posts.forEach((post, index) => {
    const { slug } = post.node.fields
    const { templateKey, tags } = post.node.frontmatter
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    if (templateKey === "private-blog-post") {
      createPage({
        path: slug,
        component: privateBlogPost,
        context: {
          slug,
          previous,
          next,
        },
      })
    } else {
      createPage({
        path: slug,
        component: blogPost,
        context: {
          slug,
          previous,
          next,
        },
      })
    }

    if (tags) {
      tags.forEach(tag => {
        tagSet.add(tag)
      })
    }
  })

  tagSet.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagPage,
      context: {
        tag,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      value,
    })
  }
}
