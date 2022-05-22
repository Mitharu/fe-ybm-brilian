import React from 'react'
import styled from 'styled-components'
import ImageWithFallback from '../image-with-fallback'
import { Link } from 'react-router-dom'

const CardNewsContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  background: #f6f6f6;
  &:hover {
    cursor: pointer;
  }
  color: #828282;
`

const CardNewsTitle = styled.p`
  font-size: 18px;
  margin: 5px 0;
  padding: 0;
  font-weight: 600;
  color: #000;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const CardNewsDesc = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 0;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

export default function CardNews({
  linkTo,
  imageSrc,
  imageHeight,
  title,
  desc,
}) {
  return (
    <Link to={linkTo}>
      <CardNewsContainer>
        <ImageWithFallback
          src={imageSrc}
          alt="card-img"
          imageHeight={imageHeight}
        />
        <CardNewsTitle>{title}</CardNewsTitle>
        <CardNewsDesc>{desc}</CardNewsDesc>
      </CardNewsContainer>
    </Link>
  )
}
