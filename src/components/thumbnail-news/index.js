import React from 'react'
import styled from 'styled-components'

const ThumbnailNewsContainer = styled.div`
  width: 100%;
  position: relative;
  height: auto;
  &:hover {
    cursor: pointer;
  }
`

const ThumbnailNewsImg = styled.img`
  width: 100%;
  height: ${(props) => props.imgHeight || '500px'};
  object-fit: cover;
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
  color: #F2994A;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export default function CardNews({ imgSrc, imgHeight, title, desc }) {
  return (
    <ThumbnailNewsContainer>
      <ThumbnailNewsImg src={imgSrc} alt="card-img" imgHeight={imgHeight} />
      <ThumbnailNewsTitleContainer>
        <ThumbnailNewsTitle>{title}</ThumbnailNewsTitle>
      </ThumbnailNewsTitleContainer>
    </ThumbnailNewsContainer>
  )
}
