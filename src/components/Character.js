const Character = ({character}) => {
    const{name, id, status, image} = character;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>status: {status}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};