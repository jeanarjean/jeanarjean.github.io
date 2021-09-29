module.exports = {
    siteMetadata: {
        title: 'jean.arjean',
        author: 'jean.arjean',
        description: `jean.arjean's personal webiste!!! Hooray!`,
        siteUrl: 'https://jeanarjean.com'
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Roboto Mono`]
            }
        },
        {
            resolve: `gatsby-plugin-sitemap`
        },
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages'
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590
                        }
                    },
                    {
                        resolve: `gatsby-transformer-remark`,
                        options: {
                            plugins: [
                                {
                                    resolve: `gatsby-remark-highlight-code`,
                                    options: {
                                        terminal: 'none'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`
                        }
                    },
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants'
                ]
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-feed`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`
    ]
}
