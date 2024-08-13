import CreatePostForm from "./components/CreatePostForm";

function App() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="flex items-center justify-center h-screen">
          <div className="space-y-2 w-5/12">
            <CreatePostForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
