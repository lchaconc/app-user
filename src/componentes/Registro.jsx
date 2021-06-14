export default function Registro(props) {



    return (
        <div className="container">
  <div className="row">
    <div className="col-12 text-center">
      <h1>Sign up</h1>
    </div>
  </div>
  <div className="col-6 offset-3 card p-2 mt-5">
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" />                  
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Retype Password</label>
        <input type="password" className="form-control" id="exampleInputPassword2" />
      </div>
      <button type="submit" className="btn btn-info">Sign up</button>
    </form>
  </div>
</div>

    )
    
};
