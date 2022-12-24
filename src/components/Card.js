function Card() {
    return(
        <div className="card">
<div className="favorite">
    <img src="/img/unlike.png" alt="Unliked"/>
</div>
<img width={133} height={112} src="/img/sneakers/1.jpg " alt="" />
<h5>Nike Blazer Mid Suede Green</h5>
  <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Cost:</span>
          <b>300 $</b>
        </div>
        <button className="button"> <img width={11} height={11} src="/img/plus.svg" alt="" /></button>
    </div>
</div>
    )
}

export default Card;