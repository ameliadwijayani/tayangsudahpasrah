import React from "react"
import {graphql} from "gatsby"
import SEO from "../component/Seo"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Container, Row, Col } from "react-bootstrap"

const FamousPeople = ({data}) => {
    const markdown = data.markdownRemark
    const image = getImage(data.markdownRemark.frontmatter.Images)
    return (
        <div>
            <SEO title={markdown.frontmatter.title} />
            <Container>
                <h1>{markdown.frontmatter.title}</h1>
                <Row>
                    <Col lg={4}>
                        <p>
                        <GatsbyImage image={image} alt={markdown.frontmatter.title} />
                        </p>
                    </Col>
                    <Col lg={8}>
                        <span dangerouslySetInnerHTML={{ __html: markdown.html}} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FamousPeople;

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug} }) {
            html
            frontmatter {
                Images {
                  childImageSharp {
                    
                    gatsbyImageData(
                      height : 220
                      width:300
                    )
                  }
                }
                
                deskripsi
                title
            }
        }
    }
`

