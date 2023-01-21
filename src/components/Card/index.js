import styles from './Card.module.scss';
import React from 'react';
import ContentLoader from "react-content-loader";


function Card({id,onFavorite, title,imageUrl,price,onPlus,favorite = false, checked = false,loading = false}) {
    
    const [isFavorite,SetIsFavorite] = React.useState(favorite);
    const [isAdded, setIsAdded] = React.useState(checked);

    const onClickPlus = () =>
    {
        onPlus({id,title,imageUrl,price});
        setIsAdded (!isAdded);
    }
 
    const onClickFavorite = () => {
        onFavorite({id,title,imageUrl,price}); 
        SetIsFavorite(!isFavorite);
    }

    return(
        <div className={styles.card}>
            {
                loading ? 
                (<ContentLoader 
                    speed={2}
                    width={165}
                    height={250}
                    viewBox="0 0 150 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="91" /> 
                    <rect x="0" y="177" rx="10" ry="10" width="150" height="15" /> 
                    <rect x="0" y="196" rx="10" ry="10" width="93" height="15" /> 
                    <rect x="0" y="237" rx="10" ry="10" width="80" height="24" /> 
                    <rect x="115" y="235" rx="10" ry="10" width="32" height="32" />
                </ContentLoader>)
                :(
                <>
                <div className="favorite cu-p" onClick={onClickFavorite}>
                <img src={isFavorite ? "img/like.svg": "img/unlike.svg" } alt="Unliked"/>
            </div>
            <img width='100%' height={135} src={imageUrl} alt="" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Cost:</span>
                    <b>{price}</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "img/checked.svg": "img/plus.svg" } alt="Plus" />
            </div>
            </>)
            }
        </div>
    )
}

export default Card;
