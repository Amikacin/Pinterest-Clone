import React, {useState} from 'react'
import '../assets/styles/signup.css'
import Logo2 from './images/Pinterest.png'


function Signup() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        age: "",
        
      });

      const { email, password, age, } =
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
                 <h1 className="login-header">Sign up to get<br/> your ideas</h1>
                <div>
                 <img src={Image}  alt="" />
               </div>
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
                    <div className="form-group">
                        <input
                         type="age" 
                         id="age"
                          name="age" 
                           placeholder="Age"
                           value={age}
                           onChange={handleChange}
                           required
                           />
                    </div>
                        <button type="button" id="first" clasName="btn">Continue</button>
                            <p className="or"><strong>OR</strong></p>
                        <button type="button" id="second" clasName="btn">Continue with facebook</button>
                        <button type="button" id="third" clasName="btn">Continue with Google</button>
                  </form>
                    <div className="buttom">
                        <p>By continuing, you have agreed to pinterest's<strong>Terms of<br/> services</strong>and acknowledge you've read our<strong> privacy<br/> policy</strong></p>
                        <p>Already a member? <a href="#">log in</a></p>
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

export default Signup
