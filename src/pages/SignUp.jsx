import { Link } from "react-router-dom";

const SignUp = () => {
     const handleSignUp = (e) => {
       e.preventDefault();
       const email = e.target.email.value;
       const password = e.target.password.value;
       console.log(email, password);

     };
  return (
    <div className="max-w-screen-xl mx-auto  mt-6">
      <div className="hero min-h-screen bg-base-200 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp!</h1>
            <p className="py-6">
              If you want to jon us you can signUp to out website using fill up
              this form
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ml-6">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <div>
                  <label className="label">
                    <Link
                      to="/login"
                      className="label-text-alt link link-hover">
                      Already have account? LogIn
                    </Link>
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="SignUp"
                  className="btn btn-secondary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
