import {
  VisitedItemContainer,
  VisitedImage,
  VisitedPlace,
  RemoveBtn,
  PlaceContent,
} from './styled'

import './index.css'

const VisitedCountry = props => {
  const {visitedDetails, onRemoveButton} = props
  const {id, name, imageUrl} = visitedDetails

  const onClickRemove = () => {
    onRemoveButton(id)
  }
  return (
    <li>
      <VisitedItemContainer>
        <VisitedImage src={imageUrl} alt="thumbnail" />
        <PlaceContent>
          <VisitedPlace>{name}</VisitedPlace>
          <RemoveBtn type="button" onClick={onClickRemove} data-testid="delete">
            Remove
          </RemoveBtn>
        </PlaceContent>
      </VisitedItemContainer>
    </li>
  )
}

export default VisitedCountry
