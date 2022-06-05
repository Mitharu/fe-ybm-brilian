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
  display: inline-block;
  font-size: 14px;
  line-height: 1.2;
  margin: 5px;
  padding: 5px;
  font-weight: 500;
  background: #00569c;
  color: #fff;
  border-radius: 4px;
`

const CardNewsLabel = styled.p`
  font-size: 12px;
  margin: 5px;
`

export default function CardBlog({
  linkTo,
  imageSrc,
  imageHeight,
  title,
  label,
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
        <CardNewsLabel>{label}</CardNewsLabel>
      </CardNewsContainer>
    </Link>
  )
}
