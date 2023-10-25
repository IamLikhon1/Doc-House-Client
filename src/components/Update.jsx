import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const Update = () => {
    const loader=useLoaderData()
    const navigate=useNavigate()
    const{_id,name}=loader;
    // console.log(_id);

    const { register, handleSubmit, reset, } = useForm();

    const onSubmit = (data) => {
    //   console.log(data);
      fetch(`http://localhost:5000/updateDataPut/${_id}`,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then(res=>res.json())
      .then(data =>{
        // console.log(data);
        if(data.modifiedCount>0){
          toast.success("Data updated successfully");
          reset();
          navigate("/");
        }
      })  
    };
    return (
        <div>
            <div className="bg-gray-300 px-10 py-10 gap-10">
                <h2 className="text-center text-4xl py-5">Update Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            
          <input
            className="px-5 py-3 rounded-lg font-bold"
            type="text"
            name=""
            id="name"
            defaultValue={name}
            placeholder="Update Name"
            {...register("name")}
            required
          />
          <input
            className="px-5 py-3 rounded-lg ml-10 font-bold"
            type="number"
            id="number"
            placeholder="Update Number"
            {...register("number")}
            required
          />

          <input className="btn btn-info ml-10" type="submit" value="Update" />
        </form>
      </div>
        </div>
    );
};

export default Update;