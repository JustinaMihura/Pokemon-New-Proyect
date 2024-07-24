const Card = ({name, img, type, type2,key,id}) => {

    return (
        <div key={key}>
            <p>{name}</p>
            <img src={img}></img>
            <p>{type} </p>
            <p>{type2} </p>
            <p>{id} </p>
        </div>
    )
};

export default Card;