'use client'
import React from 'react'
import { List, Avatar } from 'antd';
import {photos} from '../data';
import Link from 'next/link';

export default function page() {
  return (
    <List
    itemLayout="horizontal"
    dataSource={photos}
    renderItem={(item, index) => (
      <List.Item className='!items-center'>
        <List.Item.Meta
          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<Link href={`/blog/${item.id}`}>{item.alt}</Link>}
          description={item.price}
        />
      </List.Item>
    )}
  />
  )
}
