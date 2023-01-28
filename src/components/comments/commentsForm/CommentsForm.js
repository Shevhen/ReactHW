import {useForm} from "react-hook-form";
import {userServices} from "../../../services";

const CommentsForm = ({setComments}) => {
  const {register, handleSubmit, reset} = useForm({mode:'all'})

    const onSubmit = async (comment) =>{
       const {data} = await userServices.createComment(comment)
        console.log(comment)
        setComments(value=>[...value, data])
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="name" {...register('name')}/>
                <input type="text" placeholder="body" {...register('body')}/>
                <button>save comments</button>
            </form>
        </div>
    );
}

export {CommentsForm};