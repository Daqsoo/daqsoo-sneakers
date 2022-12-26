import styles from './Card.module.scss'

function Card(props) {
    const onClickButton = () => {
        alert(props.title)
    }
    return(
        <div className={styles.card}>
<div className="favorite">
    <img src="/img/unlike.png" alt="Unliked"/>
</div>
<img width={133} height={112} src="/img/sneakers/1.jpg " alt="" />
<h5>{props.title}</h5>
  <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Cost:</span>
          <b>{props.price}</b>
        </div>
        <button className="button" onClick={() => onClickButton() }> <img width={11} height={11} src="/img/plus.svg" alt="" /></button>
    </div>
</div>
    )
}

export default Card;