import {useState} from 'react';
import { addNewUser } from '../features/users/usersApi';

const AddUserForm=()=>{
    const [addUser] = addNewUser();
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        technology:""
    })

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            await addUser(formData).unwrap();
            setFormData({name:'',email:'',technology:''});
            alert('User added successfully');
        } catch(error){
            alert('Failed to add user!',error);
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{marginBottom:"20px"}}>
            <h2>Add New User</h2>
            <div>
                <input type="text" name="name" placeholder='Name' value={formData.name}
                onChange={handleChange} required/>
            </div>
            <div>
                <input type="text" name="email" placeholder='Email' value={formData.email}
                onChange={handleChange} required/>
            </div>
            
            <div>
                <input type="text" name="technology" placeholder='Technology' value={formData.technology}
                onChange={handleChange} required/>
            </div>
            <button type="submit">Add User</button>
        </form>
    )


}
export default AddUserForm;