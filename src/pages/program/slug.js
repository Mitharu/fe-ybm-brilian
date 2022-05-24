import React from 'react'
import { useParams } from 'react-router-dom'

export default function Program() {
  const params = useParams()
  return (
    <div>
      <p>Program : {params?.slug}</p>
    </div>
  )
}
