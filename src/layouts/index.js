import React from 'react'
import Helmet from 'react-helmet'
import './reset.css'
import 'material-components-web/material-components-web.scss'

import Header from '../components/Header'

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
