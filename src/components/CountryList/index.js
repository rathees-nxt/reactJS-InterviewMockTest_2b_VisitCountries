import {CountryItemContent, CountryName, VisitBtn} from './styled'

const CountryList = props => {
  const {countryDetails, onVisitButton} = props
  const {id, name, isVisited} = countryDetails
  const countryText = isVisited ? 'Visited' : 'Visit'
  const onClickVisitBtn = () => {
    onVisitButton(id)
  }

  return (
    <CountryItemContent>
      <CountryName size="true">{name}</CountryName>
      {isVisited === true ? (
        <CountryName>{countryText}</CountryName>
      ) : (
        <VisitBtn onClick={onClickVisitBtn}>{countryText}</VisitBtn>
      )}
    </CountryItemContent>
  )
}

export default CountryList
