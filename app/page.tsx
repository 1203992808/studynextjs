import { createMetadataComponents, MetadataBoundary } from 'next/dist/server/app-render/entry-base'
import React from 'react'
import { metadata } from './layout'
import { Button } from 'antd'

export default function hello () {
  return (
    
    <div>
<Button type="primary">Button</Button>

    </div>
  )
}


