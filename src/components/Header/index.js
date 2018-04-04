import React from 'react'
import { Toolbar, ToolbarRow } from 'rmwc/Toolbar'
import { Button } from 'rmwc/Button';

const Header = () => (
  <Toolbar>
    <ToolbarRow>
      <Button dense theme="primary-bg text-primary-on-primary">Home</Button>
      <Button dense theme="primary-bg text-primary-on-primary">Categories</Button>
      <Button dense theme="primary-bg text-primary-on-primary">About</Button>
    </ToolbarRow>
  </Toolbar>
)

export default Header
