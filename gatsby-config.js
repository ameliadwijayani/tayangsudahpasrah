let siteUrl='https://samijaya.netlify.app'
module.exports = {
    siteMetadata: {
        
    title: `Samijaya Probolinggo`,
    description: `Samijaya Probolinggo adalah toko yang menjual berbagai peralatan elektronik mulai dari lampu, kulkas, tv, blender bahkan HP. Kami berdiri pada tahun 2008 di Kota Probolinggo dan telah menjual produk-produk andalan yang telah digunakan di seluruh pelosok tanah air. Terima kasih telah mengunjungi website kami dan atas kepercayaan anda dalam memilih produk-produk kami.`,
    author: `@samijayaprobolinggo`,
    siteUrl:`https://samijaya.netlify.app`
    
    },
    plugins: [
 
        `gatsby-plugin-image`,
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-sharp`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `images`,
            path: `${__dirname}/src/images`,
          },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `images`,
            path: `${__dirname}/static`,
          },
        },
        {
          resolve: `gatsby-plugin-sitemap`,
          options: {
            query: `{
              allMarkdownRemark {
                nodes {
                  fields {
                    slug
                  }
                }
              }
              allSitePage {
                nodes {
                  path
                }
              }
            }`,
            resolveSiteUrl: () => siteUrl,
            resolvePages: ({
              allSitePage: { nodes: allPages },
              allMarkdownRemark: { nodes: md },
            }) => {
              const wpNodeMap = md.reduce((acc, node) => {
                const { slug } = node.fields
                acc[slug] = node
    
                return acc
              }, {})
    
              return allPages.map(page => {
                return { ...page, ...wpNodeMap[page.path] }
              })
            },
            serialize: ({ path }) => {
              return {
                url: path,
              }
            },
          },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `produk`,
            path: `${__dirname}/fileproduk`,
          },
        },
        // {
        //   resolve: "gatsby-plugin-prettier-eslint",
        //   options: {
        //     prettier: {
        //       patterns: [
        //         // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
        //         "**/*.{css,scss,less}",
        //         "**/*.{json,json5}",
        //         "**/*.{graphql}",
        //         "**/*.{md,mdx}",
        //         "**/*.{html}",
        //         "**/*.{yaml,yml}",
        //       ],
        //     },
        //     eslint: {
        //       patterns: "**/*.{js,jsx,ts,tsx}",
        //       customOptions: {
        //         fix: true,
        //         cache: true,
        //       },
        //     },
        //   },
        // },
    ]
}