import React from 'react'

export default function Card() {
  return (
    <div className="div" style={{backgroundColor:'#ECECEC',height:'80vh'}}>
        <h2 style={{textAlign:'center',padding:'30px',fontWeight:'700'}}>FUN SHOP</h2>
    <div className='container mb-5' style={{display:'flex',gap:'20px',justifyContent:'center', alignItems:'center'}}>
      
      <div className=" card" style={{width: '18rem'}}>
  <img src="https://soccerclub.axiomthemes.com/wp-content/uploads/2016/04/ball.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">£425.00</h5>
    <p className="card-text">England Vapor Match Home </p>
    <a href="#" className="btn btn-primary">ADD TO CARD</a>
  </div>
</div>

<div className="card" style={{width: '18rem'}}>
  <img src="https://soccerclub.axiomthemes.com/wp-content/uploads/2016/04/product-1.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">£425.00</h5>
    <p className="card-text">Nike Hupervenom Phantom 2 FG</p>
    <a href="#" className="btn btn-primary">ADD TO CARD</a>
  </div>
</div>

<div className="card" style={{width: '18rem'}}>
  <img src="https://soccerclub.axiomthemes.com/wp-content/uploads/2016/04/t-shirt.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">£425.00</h5>
    <p className="card-text ">Prestige Soccer T-Shirt</p>
    <a href="#" className="btn btn-primary">ADD TO CARD</a>
  </div>
</div>
    </div>
    </div>
  )
}
