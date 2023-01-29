import css from './album.module.css'

const Album = ({albums}) => {
    const {userId,title} = albums
    return (
        <div className={css.album}>
            <div> <h2><b>User: {userId}</b> <i>Title: {title}</i></h2> </div>
            <hr/>
        </div>
    );
}

export {Album};