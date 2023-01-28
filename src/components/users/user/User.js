const User = ({user}) => {
    const {name} = user
    return (
        <div>
            <div>{name}</div>
        </div>
    );
}

export {User};