import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="bg-neutral-800 fixed inset-0 grid">
      <div className="m-auto">
        <h1 className="text-8xl font-bold text-neutral-100 mb-4">Oops...!</h1>
        <p className="text-neutral-400 text-lg text-center mb-2">Something went wrong 🫥</p>
        <Link to={'/'} className="text-neutral-400 underline block text-center">Back to Home</Link>
      </div>
    </div>
  );
}

export default Error;
