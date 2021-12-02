import * as React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

const Title = styled.h1`
  display: inline-block;
`

const BlogBody = styled.div`
  margin-bottom: 50px;
`

const BlogLink =styled(Link)`
text-decoration:none;
`
const Blogtitle = styled.h3`
margin-botton:20px;
color:blue;
`

export default  ({data}) => {
  console.log("this is the Query Data",data)
  return(
  <Layout>
    <Seo title="Home" />
    <Title>Hi people</Title>
    <p>Welcome to your new Gaurav Blog site.</p>
   <div>
  <span>   Blogs Posts -  {data.allMarkdownRemark.totalCount}</span>
  <br/>
  {
    data.allMarkdownRemark.edges.map(({node})=>
    (
      <BlogBody key={node.id}>
      <BlogLink to={node.fields.slug}>
      <Blogtitle>{node.frontmatter.title} - {node.frontmatter.date}</Blogtitle>
      </BlogLink>
      
        <p>{node.excerpt}</p>
      </BlogBody>
    ))
  }
  
   </div>
 
  </Layout>
)}


export const query = graphql`
query{
  allMarkdownRemark(sort: {fields:[frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          description
          date
          title
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}

`
