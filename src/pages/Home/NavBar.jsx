// import { useQuery } from "@tanstack/react-query";
import Banner from "./Banner";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const NavBar = () => {
  const [allDoc, setAllDoc] = useState([]);
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  const [acs, setAcs] = useState(true);

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

  useEffect(() => {
    fetch(
      `http://localhost:5000/allDoc?search=${search}&sort=${
        acs ? "asc" : "desc"
      }`
    )
      .then((res) => res.json())
      .then((data) => setAllDoc(data));
  }, [acs, search]);

  // const {data,isLoading:loading}=useQuery({
  //  queryKey:['allDoc'],
  //  queryFn:async()=>{
  //   const res=await fetch('http://localhost:5000/allDoc');
  //   return res.json();
  //  }
  // })
  // if (loading) {
  //   return <span className="loading loading-bars loading-lg flex justify-center items-center"></span>
  // }
  

    const handleHigh=()=>{
       
    }
  return (
    <div>
      <h2 className="text-4xl text-center my-5">All Doc</h2>

      <button className="btn btn-secondary my-5" onClick={() => setAcs(!acs)}>
        {acs ? "Price: Low to High" : "Price: High to Low"}
      </button>

      <button onClick={handleHigh} className="btn btn-info ml-5">High To Low</button>

      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            ref={searchRef}
            placeholder="Search…"
            className="input input-bordered"
          />
          <button onClick={handleSearch} className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10">
        {allDoc.map((doc, index) => {
          return (
            <div key={index}>
              <div className="card w-full bg-base-200 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{doc.name}</h2>
                  <p>{doc.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Banner allDoc={allDoc} handleSearch={handleSearch} searchRef={searchRef}/>

    </div>
  );
};

export default NavBar;
