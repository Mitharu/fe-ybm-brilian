import React from 'react'
import styled from 'styled-components'
import ImageWithFallback from '../image-with-fallback'
import { Link } from 'react-router-dom'

const ThumbnailNewsContainer = styled.div`
  width: 100%;
  position: relative;
  height: auto;
  &:hover {
    cursor: pointer;
  }
`

const ThumbnailNewsTitleContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 15px 15px 15px;
  padding: 10px 20px;
  background: #fff;
`

const ThumbnailNewsTitle = styled.p`
  font-size: 20px;
  margin: 5px 0;
  padding: 0;
  font-weight: 600;
  word-break: break-word;
  text-align: center;
  color: #f2994a;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export default function CardNews({
  imageSrc,
  imageHeight,
  title,
  linkTo,
}) {
  return (
    <Link to={linkTo}>
      <ThumbnailNewsContainer>
        <ImageWithFallback
          src={imageSrc}
          alt="card-img"
          imageHeight={imageHeight}
        />
        <ThumbnailNewsTitleContainer>
          <ThumbnailNewsTitle>{title}</ThumbnailNewsTitle>
        </ThumbnailNewsTitleContainer>
      </ThumbnailNewsContainer>
    </Link>
  )
}
