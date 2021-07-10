import React, {useState} from 'react'
import Logo2 from './images/Pinterest.png'

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    
  });

  const { email, password, } =
    user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div>
        <div className="body">
         <div className="left-side">
         </div>
      <div className="form">
          <img className="small-logo" src={Logo2}/>
            <div className="form-header">
               <h3>Welcome to pinterest</h3>
               <p>find new ideas to try</p>
             </div>
            <form onSubmit={handleChange}>
                <div className="form-group">
                    <input
                     type="email"
                      name="email" 
                      placeholder="Email"
                      value={email}
                      onChange={handleChange}
                      required
                      />
                </div>
                <div className="form-group">
                    <input
                     type="password" 
                     id="password"
                     name="password"
                     placeholder="Create a Password"
                     value={password}
                     onChange={handleChange}
                     required
                     />
                </div>
                    <button type="button" id="first" clasName="btn">Continue with facebook</button>
                        <p className="or"><strong>OR</strong></p>
                    <button type="button" id="second" clasName="btn">Continue with Google</button>
                    <button type="button" id="third" clasName="btn">Login</button>
              </form>
                <div className="buttom">
                    <p>By continuing, you have agreed to pinterest's<strong>Terms of<br/> services</strong>and acknowledge you've read our<strong> privacy<br/> policy</strong></p>
                    <p>Not on pinterest yet? <a href="#">sign up</a></p>
                    <p>Are you are business? Get started here!</p>
                </div>
            
              <div className="last-line">
                <h2>Create a free business account</h2>
             </div>
          
        </div>  
    </div>
        
    </div>
)

}

export default Login
