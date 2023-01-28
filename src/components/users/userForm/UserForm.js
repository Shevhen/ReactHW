import {useForm} from "react-hook-form";
import {userServices} from "../../../services";

const UserForm = ({setUser}) => {
    const {register, handleSubmit, reset, formState:{errors}} = useForm({mode: 'all'})

    const onSubmit = async (user) =>{
        const {data} = await userServices.createUser(user)
        setUser(prev=>[...prev, data])
        reset()
    }
    return (
        <div className="userForm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="name" {...register('name', {required:true,
                    pattern:{value:/^[a-zA-Zа-яА-Я ]{1,30}$/ , message:'Use only letters'}})}/>
                {errors.name && <span>{errors.name.message}</span>}

                <input type="text" placeholder="age" {...register('age',
                    {pattern:{value:/^[0-9]{1,3}$/ , message:'Use only number and no more 3 symbols'},required:true})}/>
                {errors.age && <span>{errors.age.message}</span>}
                <button>create user</button>
            </form>
        </div>
    );
}

export {UserForm};