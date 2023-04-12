const Simpson = ({simpson}) => {
    const {id, itemName, picture, age, info} = simpson;
    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {itemName}</div>
            <img src={picture} alt={itemName}/>
            <div>Age: {age}</div>
            <div>Info: {info}</div>
            <br/>
        </div>
    );
};

export {Simpson};