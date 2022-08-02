import React from "react"
import "./style.css"


const Wrapper = () => {
  const data = [
    {
      cover: <i class="fa-solid fa-truck fa-5x text-dark"  ></i>,
      title: "Worldwide Delivery",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
    {
      cover: <i class="fa-solid fa-headset fa-5x text-dark"></i>,
      title: "24/7 Support ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
   
    {
      cover: <i class="fa-solid fa-shield fa-7x text-dark"></i>,
      title: "Shop Confidence ",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  
    {
      cover: <i class="fa-solid fa-credit-card fa-7x text-dark"></i>,
      title: "Safe Payment",
      decs: "We offer competitive prices on our 100 million plus product any range.",
    },
  ]
  return (
    <>
      <section className='wrapper card-group d-flex flex-row mb-2'>
        <div className='container d-flex flex-row mb-4'>
          {data.map((val, index) => {
            return (
              <div className='product card' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h4>{val.title}</h4>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
