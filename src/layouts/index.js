import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'
// import './index.css'

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet
        title=""
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header />
      <div
      >
        {children()}
      </div>
    </div>
  )
}

export default TemplateWrapper
