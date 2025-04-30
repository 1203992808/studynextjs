import React from 'react'
import { Card } from 'antd';
import { photos } from '../../data';

export default function Page({params}:{params:{id:string}}) {
    const photo = photos.find(item => item.id === params.id)!
  return (
    <Card title={photo.id}>
    <p>{photo.src}</p>

  </Card>
  )
}
