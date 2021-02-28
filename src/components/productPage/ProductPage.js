import React, { useEffect } from 'react'
import mockListing from '../../mockData/mockListing.js'
import Form from '../form/Form.js'
import { updateProductPageData, createOffer } from '../../redux/actions/actions.js'
import { connect, useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

const ProductPage = ({ id, theUser, product }) => {

  const { user } = useAuth0();

  const dispatch = useDispatch()

  useEffect(() => {
    const parsedId = parseInt(id)
    dispatch(updateProductPageData(parsedId))
  }, [])

  const capitalizeLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  const makeOffer = (offer) => {
    const formattedOffer = {
      itemName: offer.itemName,
      itemType: offer.itemType,
      description: offer.description,
      quantity: parseInt(offer.quantity),
      unit: offer.unit,
      date: offer.date
    }
    console.log(parseInt(id), theUser.id, formattedOffer)
    dispatch(createOffer(parseInt(id), theUser.id, formattedOffer))
  }

  if (product.produceType) {
    return (
      <div>
        <h2>{capitalizeLetter(product.produceType)} {product.produceName}</h2>
        <div>
          <p>{ product.quantity } { product.unit }</p>
          <p>{ product.description }</p>
          <p><b>Grown by:</b> { product.user.firstName }</p>
          <p>Harvested on: { product.dateHarvested }</p>
          <p>Zip Code: { product.zipCode }</p>
        </div>
        <h3>Complete the form to make an Offer</h3>
        <Form
          submitFunc={ makeOffer }
        />

      </div>
    )
  } else {
    return null
  }
}

const mapDispatchToProps = dispatch => ({
  updateProductPageData: text => dispatch(updateProductPageData(text)),
  createOffer: text => dispatch(createOffer(text))
})

function productPageState(state) {
  return {
    product: state.productPage.productPageData,
    theUser: state.user.user
  }
}

export default connect( productPageState, mapDispatchToProps )(ProductPage);
