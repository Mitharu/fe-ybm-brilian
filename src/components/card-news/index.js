import React from 'react'
import styled from 'styled-components'

const CardNewsContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  background: #f6f6f6;
  &:hover {
    cursor: pointer;
  }
`

const CardNewsImg = styled.img`
  width: 100%;
  height: ${(props) => props.imgHeight || '200px'};
  object-fit: cover;
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

export default function CardNews({ imgSrc, imgHeight, title, desc }) {
  return (
    <CardNewsContainer>
      <CardNewsImg src={imgSrc} alt="card-img" imgHeight={imgHeight} />
      <CardNewsTitle>{title}</CardNewsTitle>
      <CardNewsDesc>{desc}</CardNewsDesc>
    </CardNewsContainer>
  )
}
