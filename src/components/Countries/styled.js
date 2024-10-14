import styled from 'styled-components'

export const Heading = styled.h1`
  font-family: roboto;
  font-size: 32px;
  font-weight: 600;
  color: #ffffff;
`
export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #161624;
  color: #ffffff;
  padding: 10px 30px;
`
export const CountryListContainer = styled.ul`
  list-style-type: none;
  overflow-y: scroll;
  height: 273px;
  border-radius: 10px;
  border: 1px solid #94a3b8;
  padding: 0px;
  background-color: #1f1f2f;
`
export const VisitedCountryList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px;
`
export const NovisitedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35vh;
`
export const NoVisitedPara = styled.p`
  font-family: roboto;
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
`
