import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/logo/WTM-Main.svg"
import SM from "../components/socialmedia"
import About from "../components/about_us"

const IndexPage = () => (
  <Layout>
    <SEO description="Women TechMakers Algiers / WTM Algiers Official Website" title="WTM Algiers Website Main Home" />
    <div style={{ maxWidth: `400px`, marginBottom: `0.5rem` }}>
      <img src={logo} alt={"WTM Logo"} />
    </div>
    <p>Welcome to WTM Algiers Official Website.</p>
    <p>We are still working on it cuerrently, See you Soon ;)</p>

    <SM direction="" />

    <About/>

  </Layout>
)

export default IndexPage
