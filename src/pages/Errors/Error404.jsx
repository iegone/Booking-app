
function Error404() {
    return (
      <div className="text-center h-fit flex  flex-col  gap-4">
        <h2 className=" m-0 p-0 text-[200px]">404</h2>
        <h2 className=" text-center text-4xl">Page Not Found</h2>
        <a
          className="bg-slate-500 text-white p-4 rounded-md capitalize "href="/">go back to home </a>
      </div>
    );
}

export default Error404