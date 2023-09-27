import React from 'react'
import GlobalStyles from '../src/styles/global'

export const decorators = [
  (Story: any) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
