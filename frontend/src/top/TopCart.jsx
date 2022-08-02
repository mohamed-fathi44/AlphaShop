import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { listTopProducts } from '../actions/productActions'

const TopCart = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  }
  const dispatch = useDispatch()

  const productTopRated = useSelector(state => state.productTopRated)
  const { products } = productTopRated

  useEffect(() => {
      dispatch(listTopProducts())
  }, [dispatch])
  return (
    <>
      <Slider {...settings}>
        {products.map((value, index) => {
          return (
            <>
              <div className='box product' key={index}>
                <div className='nametop d_flex'>
                  <span className='tleft bg-dark'>{value.name}</span>
                  <span className='tright'>{value.rating}</span>
                </div>
                <Link to={`/product/${value._id}`}>

                <div className='img'>
                  <img src={value.image} alt='' height='40px' />
                </div>
                </Link>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default TopCart
