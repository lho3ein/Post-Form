import { useState } from "react";
import Alert from "./shared/Alert";
// import axios from "axios";

export default function CreatePostForm() {
   const [titleInput, setTitleInput] = useState("");
   const [categoryInput, setCategoryInput] = useState("");
   const [textAreaInput, setTextAreaInput] = useState("");

   const [showAlert, setShowAlert] = useState(false);

   const SubmitHandler = async (e) => {
      e.preventDefault();
      let dataForm = { Title: titleInput, Category: categoryInput, TextArea: textAreaInput };
      //=================================================================================== Async fetch
      try {
         let resPost = await fetch("Set Api Adress", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(dataForm),
         });

         resPost = await resPost.json();
         console.log(resPost);
         setShowAlert(true);
      } catch (err) {
         console.log(err);
      }
      //........................................................................ Async Axios
      // try {
      //   let resPost = await axios.post("", dataForm);
      //   setShowAlert(true);
      // } catch (err) {}

      //=================================================================================== Promiss fetch  (پرامیس ها نباید داخل فانکشن ایسینک باشند)
      // fetch("", {
      //   method: "POST",
      //   headers: { "content-type": "application/json" },
      //   body: JSON.stringify(dataForm),
      // })
      //   .then((res) => Handle(res))
      //   .catch((err) => console.log(err));
      //.............................................. Promiss Axios
      // axios
      //   .post("", dataForm)
      //   .then((res) => Handle(res))
      //   .catch((err) => console.log(err));
      //************************************************************************************** */
      setTitleInput("");
      setCategoryInput("");
      setTextAreaInput("");

      setTimeout(() => {
         setShowAlert(false);
      }, 5000);
   };

   return (
      <>
         {showAlert && <Alert message="Post Sucessfuly Send" closeHandler={() => setShowAlert(false)} />}
         <form onSubmit={SubmitHandler} action="" className="w-full bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
            <div className="px-4 py-6 sm:p-8">
               <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                     <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                        Title
                     </label>
                     <div className="mt-2">
                        <input
                           id="title"
                           value={titleInput}
                           onChange={(e) => setTitleInput(e.target.value)}
                           name="title"
                           type="text"
                           autoComplete="title"
                           className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  <div className="sm:col-span-4">
                     <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                        Category
                     </label>
                     <div className="mt-2">
                        <input
                           id="category"
                           value={categoryInput}
                           onChange={(e) => setCategoryInput(e.target.value)}
                           name="category"
                           type="text"
                           className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  <div className="col-span-full">
                     <label htmlFor="body" className="block text-sm font-medium leading-6 text-gray-900">
                        Body
                     </label>
                     <div className="mt-2">
                        <textarea
                           id="body"
                           value={textAreaInput}
                           onChange={(e) => setTextAreaInput(e.target.value)}
                           name="body"
                           rows={3}
                           className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex items-center justify-end px-4 py-4 border-t gap-x-6 border-gray-900/10 sm:px-8">
               <button
                  type="submit"
                  className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               >
                  Create
               </button>
            </div>
         </form>
      </>
   );
}
