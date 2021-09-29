const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
})

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        const blogPost = path.resolve('./src/templates/blog-post.jsx')
        const tagTemplate = path.resolve('src/templates/tags.jsx')

        resolve(
            graphql(
                `
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
                                        image {
                                            id
                                        }
                                    }
                                }
                            }
                        }
                        tagsGroup: allMarkdownRemark(limit: 2000) {
                            group(field: frontmatter___tags) {
                                fieldValue
                            }
                        }
                    }
                `
            ).then((result) => {
                if (result.errors) {
                    console.log(result.errors)
                    reject(result.errors)
                }

                // Create blog posts pages.
                const posts = result.data.allMarkdownRemark.edges

                _.each(posts, (post, index) => {
                    const previous =
                        index === posts.length - 1
                            ? null
                            : posts[index + 1].node
                    const next = index === 0 ? null : posts[index - 1].node

                    createPage({
                        path: post.node.fields.slug,
                        component: blogPost,
                        context: {
                            slug: post.node.fields.slug,
                            previous,
                            next
                        }
                    })
                })

                // Extract tag data from query
                const tags = result.data.tagsGroup.group

                // Make tag pages
                tags.forEach((tag) => {
                    createPage({
                        path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
                        component: tagTemplate,
                        context: {
                            tag: tag.fieldValue
                        }
                    })
                })
            })
        )
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value
        })
    }
}
