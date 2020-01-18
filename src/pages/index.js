import React,{Component} from "react"
import { Link } from "gatsby"
import FlightSearch from "../components/FlightSearch";
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
       <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    
    </div>
    <FlightSearch/>
 
    {/* <Link to="/../components/FlightSearch/">Flight Search</Link> */}
   
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
