import React from 'react'
import styled from 'styled-components'
import ImageWithFallback from '../image-with-fallback'
import { Link } from 'react-router-dom'

const CardNewsContainer = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #e0e0e0;
  &:hover {
    cursor: pointer;
  }
  color: #828282;
`

const CardNewsTitle = styled.p`
  font-size: 18px;
  margin: 5px 0;
  padding: 10px;
  font-weight: 400;
  color: #000;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 60px;
`

const CardNewsDate = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 10px;
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
        <CardNewsDate>{new Date(desc).toDateString()}</CardNewsDate>
      </CardNewsContainer>
    </Link>
  )
}
