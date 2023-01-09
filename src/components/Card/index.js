import styles from './Card.module.scss'
import React from 'react'

function Card({onFavorite, title,imageUrl,price,onPlus}) {
    
    const [isFavorite,SetIsFavorite] = React.useState(false);
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () =>
    {
        onPlus({title,imageUrl,price});
        setIsAdded (!isAdded);
    }
 
    const onClickFavorite = () => {
        onFavorite({title,imageUrl,price}); 
        SetIsFavorite(!isFavorite);
    }

    return(
        <div className={styles.card}>
            <div className="favorite cu-p" onClick={onClickFavorite}>
                <img src={isFavorite ? "img/like.svg": "img/unlike.svg" } alt="Unliked"/>
            </div>
            <img width={133} height={112} src={imageUrl} alt="" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Cost:</span>
                    <b>{price}</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "img/checked.svg": "img/plus.svg" } alt="Plus" />
            </div>
        </div>
    )
}

export default Card;
