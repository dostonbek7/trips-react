import { useRef} from "react";
import { doc, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

function AddBooks({ userId }) {
  const pages = useRef();
  const author = useRef();
  const title = useRef();
  const img = useRef();
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      img: img.current.value,
      title: title.current.value,
      author: author.current.value,
      pages: +pages.current.value,
      userId,
    };

    addDoc(collection(db, "books"), data);
    toast.success("You add a data");

    form.current.reset();
  };
  return (
      <div className="flex ite justify-center">
      <div className="flex flex-col items-center px-10 py-5 bg-[#87C4FF] rounded-lg">
        <h2 className="mb-5">Add new books</h2>
        <form
          onSubmit={handleSubmit}
          ref={form}
          className="flex flex-col gap-3"
        >
          <label>
            <span className="block mb-2">Book image:</span>
            <input
              className="py-1 rounded-md indent-2"
              ref={img}
              type="text"
              placeholder="Enter url"
            />
          </label>
          <label>
            <span className="block mb-2">Book name:</span>
            <input
              className="py-1 rounded-md indent-2"
              ref={title}
              type="text"
              placeholder="Enter book name"
            />
          </label>
          <label>
            <span className="block mb-2">Author:</span>
            <input
              className="py-1 rounded-md indent-2"
              ref={author}
              type="text"
              placeholder="Enter author"
            />
          </label>
          <label>
            <span className="block mb-2">pages:</span>
            <input
              className="py-1 rounded-md indent-2"
              ref={pages}
              type="number"
              placeholder="Enter book's page"
            />
          </label>
          <button
            className="mt-5 py-2 px-4 bg-slate-50 rounded-lg"
            onClick={handleSubmit}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBooks;
