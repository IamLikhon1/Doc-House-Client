import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Banner = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    fetch("http://localhost:5000/postData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          toast.success("Data inserted successfully");
          reset();
          refetch();
        }
      });
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey:["getData"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/getData");
      return res.json();
    },
  });
  // const filterData=data.filter(item=>item.role === "pending")
  // console.log(data);
  if (isLoading) {
    return <span className="loading loading-bars"></span>;
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteData/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Data deleted successfully");
          refetch();
        }
      });
  };


  const handleMakeAdmin=(user)=>{
    fetch(`http://localhost:5000/updateData/${user._id}`,{
        method:'PATCH'
    })
    .then(res=>res.json())
    .then(data=>{
        // console.log(data)
        if(data.modifiedCount){
            
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Admin Now`,
                showConfirmButton: false,
                timer: 1500
              })
              refetch();
        }
    })

}

  return (
    <div>
      <div className="bg-gray-300 px-10 py-10 gap-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="px-5 py-3 rounded-lg font-bold"
            type="text"
            name=""
            id="name"
            placeholder="Enter Name"
            {...register("name")}
          />
          <input
            className="px-5 py-3 rounded-lg ml-10 font-bold"
            type="number"
            id="number"
            placeholder="Enter Number"
            {...register("number")}
          />

          <input className="btn btn-info ml-10" type="submit" value="ADD" />
        </form>
      </div>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Number</th>
              <th>Delete</th>
              <th>Update</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((row, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{row.name}</td>
                  <td>{row.number}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(row._id)}
                      className="btn btn-warning"
                    >
                      Delete
                    </button>
                  </td>
                  <Link to={`/update/${row._id}`}>
                  <td>
                  <button

                      className="btn btn-success"
                    >
                      Update
                    </button>
                  </td>
                  </Link>

                  <td>
                  {
                  row.role==='pending'?<p className="text-green-500 font-semibold text-lg">Done</p> :<button onClick={()=>handleMakeAdmin(row)} className="btn btn-info btn-sm">Pending</button>
                  }
                
                  </td>
                  
                </tr>
              );
            })}
          </tbody>
  
        </table>
      </div>
      {/* table */}

      {
        data.map(item=><>
        {item.role==='pending'?<p>{item.name}</p>:""}
        </>)
      }

    </div>

  );
};

export default Banner;
