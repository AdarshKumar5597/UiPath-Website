import { galleryData } from "./../../data/gallery_data";
import { useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";
export const AdminGallery = () => {
  const [galleries, setGalleries] = useState([]);
  const navigate = useNavigate();
  const handleAddGallery = () => {
    navigate("/admin/gallery/add");
  };
  const handleDelete = async (id) => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_BASE_URL}gallery?id=${id}`,
      {
        method: "DELETE",
        header: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.ok) {
      const filterGallery = galleries.filter((gallery) => gallery._id !== id);
      setGalleries(filterGallery);
    }
  };
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}gallery`, {
      method: "GET",
      header: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((resp) => setGalleries(resp.data));
  }, []);
  return (
    <div className="h-full w-full overflow-scroll flex gap-2 p-2 overflow-x-hidden flex-wrap">
      <div className="w-full flex p-4">
        <h1 className="w-full p-4">Gallery</h1>
        <button>
          <IoMdAdd size={25} onClick={() => handleAddGallery()} />
        </button>
      </div>
      <div className=" h-full w-full flex p-4 flex-wrap">
        {galleries.map((gallery) => {
          return (
            <div className=" shadow-lg flex flex-col pb-4 h-1/3 w-1/3">
              <div className=" h-3/4 w-full">
                <img
                  src={gallery.photos[0]}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-1/4 w-full">
                <h1 className="w-full text-center p-4">{gallery.title}</h1>
                <div className="w-full h-fit p-4">
                  <button
                    className=" w-full bg-red-500 rounded-lg border p-4"
                    onClick={() => handleDelete(gallery._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// return (
//     <div className=" shadow-lg flex flex-col gap-4 h-1/2 w-1/3">
//       <div className=" h-3/4 w-full">
//         <img
//           src={gallery.photos[0]}
//           className="h-full w-full object-contain"
//         />
//       </div>
//       <div className=" h-1/4 w-full">
//         <h1 className="w-full text-center">{gallery.title}</h1>
//         <div className="w-full h-fit p-4">
//             <button className="">Delete</button>
//       </div>
//     </div>
//     );
