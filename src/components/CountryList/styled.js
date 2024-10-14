import styled from 'styled-components'

export const CountryItemContent = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f8fafc;
`

export const CountryName = styled.p`
  padding-left: ${props => (props.size ? '40px' : '')};
  padding-right: ${props => (props.size ? '' : '40px')};
  font-family: roboto;
  font-size: 17px;
  font-weight: 500;
  color: ${props => (props.size ? '#f1f5f9' : '#94a3b8')};
`

export const VisitBtn = styled.button`
  margin-right: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 7px 20px;
  color: #ffffff;
  background-color: #3b82f6;
  border-radius: 7px;
  font-family: roboto;
  font-size: 14px;
  font-weight: bold;
`
