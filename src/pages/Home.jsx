import { doc, deleteDoc } from "firebase/firestore";
import { useCollection } from "../hooks/useCollection";
import { db } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";
import AddBooks from "../components/AddBooks";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useState } from "react";

function Home() {
  const { user } = useGlobalContext();
  const { documents } = useCollection("books", ["userId", "==", user.uid]);
  const [show, setShow] = useState(true);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "books", id));
    toast.error("You delete a data");
  };
  return (
    <div>
      <AddBooks userId={user.uid} />
      {documents && (
        <div className="mt-10">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 sm:gap-5 md:grid-cols-3 md:gap-14 lg:grid-cols-4 lg:gap-14">
            {documents.map((doc) => {
              return (
                <div
                  className="card w-[320px] sm:w-[280px] md:w-[250px] bg-base-100 shadow-xl"
                  key={doc.id}
                >
                  <figure>
                    <img src={doc.img} alt="Book image" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Kitobning nomi: {doc.title}</h2>
                    <p>Muallif: {doc.author}</p>
                    <p className="mb-5">Kitobning hajmi: {doc.pages} bet</p>
                    <div className="card-actions self-end">
                      <button
                        onClick={() => handleDelete(doc.id)}
                        className="py-2 px-3 bg-red-500 text-white rounded-md"
                      >
                        O'chirish
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Home;
