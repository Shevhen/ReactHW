const Comment = ({coments}) => {
    const {id, name} = coments
    return (
        <div>
            <div>{id} {name}</div>
        </div>
    );
}

export {Comment};