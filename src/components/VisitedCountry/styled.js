import styled from 'styled-components'

export const VisitedItemContainer = styled.div`
  background-color: #1f1f2f;
  margin: 5px;
`

export const VisitedImage = styled.img`
  height: 200px;
  width: 300px;
`

export const PlaceContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
`

export const VisitedPlace = styled.p`
  font-family: roboto;
  font-size: 15px;
  font-weight: 500;
  color: #f1f5f9;
`

export const RemoveBtn = styled.button`
  border: 1px solid #f8fafc;
  color: #f1f5f9;
  outline: none;
  cursor: pointer;
  background: transparent;
  padding: 7px 20px;
  border-radius: 7px;
  font-family: roboto;
  font-size: 14px;
  font-weight: bold;
`
