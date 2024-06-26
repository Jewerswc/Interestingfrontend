import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory

function LandingPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  // useNavigate hook

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/api/login/', { username, password });
            console.log('Token:', response.data.token);
            // Save the token in localStorage or handle it however you prefer
            localStorage.setItem('authToken', response.data.token); // Example: Saving the token
            navigate('/dashboard'); // Navigate to the dashboard page on successful login
        } catch (error) {
            console.error('Login error:', error.response ? error.response.data : 'Network Error');
        }
    };

    return (
        <div className="container" style={{
            width: '100%', 
            height: '100%', 
            background: 'white'}}>
            <div className="Frame68" style={{
                paddingTop: 3, 
                paddingBottom: 3, 
                gap: 950, 
                left: 0, top: 0, 
                position: 'absolute', 
                background: 'white', 
                borderTopLeftRadius: 4, 
                borderTopRightRadius: 4, 
                border: '2px rgba(166.81, 155.69, 155.69, 0.21) solid', 
                justifyContent: '12', 
                alignSelf: 'center', 
                width: '99.6%',
                display: 'inline-flex'}}>
              
                <div className="Frame12" style={{
                    paddingTop: 10, 
                    paddingBottom: 10, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    gap: 100, 
                    display: 'inline-flex'}}>
                    <div className="InterestingOrNot" style={{color: 'black', marginLeft: 140,  fontSize: 22, fontFamily: 'Cabin', fontWeight: '400', wordWrap: 'break-word'}}>INTERESTING <br/>//OR NOT</div>
                </div>
                <div className="Frame73" style={{marginTop: 16, width: 100, height: 40, background: '#41B0E8', borderRadius: 2.50, overflow: 'hidden', border: '1px rgba(166.81, 155.69, 155.69, 0.21) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    <div className="Frame73" style={{padding: 10, justifyContent: 'center',alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div className="SignUp" style={{textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Cabin', fontWeight: '700', wordWrap: 'break-word'}}>Sign up</div>
                    </div>
                    <div className="Facebook" style={{width: 25, height: 25, position: 'relative'}} />
                </div>
                
            </div>
            
            <img className="ScottRodgerson99jcw187wtyUnsplash1" style={{
                width: '100%', 
                height: '100%', 
                top: '10.2vh', 
                objectfit: 'cover',
                position: 'absolute'}} src="https://s3-alpha-sig.figma.com/img/32f4/d243/38ef6263441c004a47c338404b5ee337?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FLNkKsRMrwqrvd51SaNbrmXU00lNPMw5Ws9AV0d~~SWnvK5QN0Yr-JR0-XjHaacORPRpJb5kMxuXPKBkShUH2D6L3kOzW~M6CLhQtgfstvGRpl9ucKUCyc4RKq0OWub10Ry43FgP2JBzlE8R8vZPDlYMMkjHJtNK-iOSrZ6wLwEjXjJfPDy3d7gmUHF87WhpaujfOnnDpYoMVbgsKHJ0-d9AspoYQkIbD5TGnhZUQGQJ9qju3SX5mkOw1YsuvnB10py-MZ-nNHYiNBwz2ec~hsxTpDBjftkqjR9w1bAAG5~RDxdoED9TxHxLSjH8vo14hZXs8cZdRlcV518DJJvyPQ__" />
            <div><div className="Frame4" style={{width: 396.11, height: '10', position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)', top: 269, paddingTop: 15, paddingBottom: 5,  background: 'rgba(0, 0, 0, 0.87)', borderTopLeftRadius: 5.27, borderTopRightRadius: 5.27, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
    <div style={{width: 402.88, height: 55.79, textAlign: 'center', color: 'white', fontSize: 32.13, fontFamily: 'Cabin', fontWeight: '700', wordWrap: 'break-word'}}>Log in</div>
    </div></div>
            <div className="Frame70" style={{
                width: 396.11, 
                height: 453.20, 
                left: '50%',
                transform: 'translate(-50%, -50%)',
                top: '65%', 
                position: 'absolute', 
                background: 'rgba(0, 0, 0, 0.58)', 
                borderBottomLeftRadius: 5.27, 
                borderBottomRightRadius: 5.27}}>
                    
                <div className="Frame71" style={{
                    width: 264.70, 
                    paddingTop: 2.63, 
                    paddingBottom: 2.44, 
                    left: 71.14, 
                    top: 335.51, 
                    position: 'absolute', 
                    background: '#41B0E8', 
                    borderRadius: 2.20, 
                    overflow: 'hidden', 
                    border: '0.88px rgba(166.81, 155.69, 155.69, 0.21) solid', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    display: 'inline-flex'}}>
                   
                    <button onClick={handleLogin} style={{
                    padding: '10px 20px',
                    backgroundColor: '#41B0E8',
                    color: 'white',
                    fontSize: '16px',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    width: 202.88, 
                    textAlign: 'center', 
                    color: 'white', 
                    fontSize: 13.17, 
                    fontFamily: 'Cabin', 
                    fontWeight: '700', 
                    padding: 8.78, justifyContent: 'center', alignItems: 'center', gap: 8.78, display: 'inline-flex',
                }}>Log In</button>
                
                </div>
                
                <div className="Frame72" style={{paddingTop: 2.63, paddingBottom: 2.44, paddingLeft: 14.05, paddingRight: 48.85, left: 75.53, top: 119.45, position: 'absolute', background: '#F9FDFF', borderRadius: 2.20, overflow: 'hidden', border: '0.88px rgba(166.81, 155.69, 155.69, 0.21) solid', justifyContent: 'flex-start', alignItems: 'center', gap: 41.28, display: 'inline-flex'}}>
                    <img className="Image2" style={{width: 21.96, height: 21.96}} src="https://s3-alpha-sig.figma.com/img/ab6b/4b9f/c19cce21b997a3ac8e1f1904df5e6eae?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bBQPNkRrP~PfqV5h4uVt0adpwK1WHtd8p84kSelvEI-tmDKm70A7KN-dd6s1LXKGlnMlhDI-aOXubdeFQkFpf4n9erfmOu7HyoOtTeNTqdPXYENBjPY9M6jpsdrs6C4tHWPy8jTjNBQMuJeolZfYi7g162CTbt8JsonssPLTq0U39QrH-GR~unOUrTkfmJ3KoXt8AhKbOn-HA3TtBH8M5Au6NsdbiYPFxidEzWkbFctjpwy19ZXm0UoO4F2w5UyW0MuiRAl4wlFo9X~O-bIQ6YScSS4UbfVy8GCufiInq3n3KkCiRmCegsuHzerITje6aqWNW9IdVsqIZQrIanLQVQ__" />
                    <div className="Frame73" style={{alignSelf: 'stretch', padding: 8.78, justifyContent: 'center', alignItems: 'center', gap: 8.78, display: 'inline-flex'}}>
                        <div className="LogInUsingGoogle" style={{
                            textAlign: 'center', 
                            color: 'black', 
                            fontSize: 13.17, 
                            fontFamily: 'Cabin', 
                            fontWeight: '700', 
                            wordWrap: 'break-word'}}>Log in using Google</div>
                    </div>
                </div>
                
                <div className="Frame71" style={{paddingTop: 2.63, paddingBottom: 2.44, paddingLeft: 14.05, paddingRight: 49.92, left: 75.53, top: 57.09, position: 'absolute', background: '#F9FDFF', borderRadius: 2.20, overflow: 'hidden', border: '0.88px rgba(166.81, 155.69, 155.69, 0.21) solid', justifyContent: 'flex-start', alignItems: 'center', gap: 43.77, display: 'inline-flex'}}>
                    <div className="Facebook" style={{width: 21.96, height: 21.96, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                        <img className="Image1" style={{width: 21.96, height: 21.96}} src="https://s3-alpha-sig.figma.com/img/1b42/cad1/5ec1ef30b903693c1a3a893b35f092d2?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kgDnZhQCOHhgM3yeKyFgljmBVBSEBLldDgywfYXNlkz6kY3OEGrhcsoRKQOXxWRgQP9dlEZqus8BCfWASqQ9UsKHWCF1BoMqKTJkJSQWjYci5wBmxUMeKSl5oghyGnRXN9rCR0V9xa8hILfZCoU6Fq2zUaR3oO9~zDTWXUEFhDxn7kxal6GCc5kbBU1lMfp6SjapnYNoGzvWJnju6~OgZHEmINN75vtzYpD3euzcginOxCYIG~rebFa-~Qnm76Y1K2RBZHt1ljOecl87DbdBVSvFNBNQPTtnC4~3ETijtpAxz9dQyEkrNvyL2EGuc7Gtd2bFElyPXAjTxvnGhE2mUQ__" />
                    </div>
                    <div className="Frame73" style={{
                        alignSelf: 'stretch', 
                        paddingTop: 8.78, 
                        paddingBottom: 8.78, 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        display: 'inline-flex'}}>
                        <div className="LogInUsingFacebook" style={{textAlign: 'center', color: 'black', fontSize: 13.17, fontFamily: 'Cabin', fontWeight: '700', wordWrap: 'break-word'}}>Log in using Facebook</div>
                    </div>
                </div>
                <div className="Frame75" style={{width: 252.07, height: 37.77, left: 74.65, top: 168.63, position: 'absolute'}}>
                    <div className="Or" style={{width: 69.38, height: 19.32, left: 91.34, top: 10.54, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 13.17, fontFamily: 'Cabin', fontWeight: '400', wordWrap: 'break-word'}}>Or</div>
                    <div className="Vector1" style={{width: 228.36, height: 0, left: 14.93, top: 20.20, position: 'absolute', border: '0.88px black solid'}}></div>
          </div>
         
                <div>
                    <div className="Frame73" style={{height: 33.38, padding: 8.78, justifyContent: 'center', alignItems: 'center', gap: 8.78, display: 'inline-flex'}}>
                    <div className="inputField" style={{textAlign: 'center', color: 'black', fontSize: 13.17, fontFamily: 'Cabin', fontWeight: '400', wordWrap: 'break-word'}}></div>
                        <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    style={{
                        width: 254.70, 
                        height: 38.64, 
                        paddingTop: 2.63, 
                        paddingLeft: 8.78, 
                        left: 72.02, 
                        top: 214.90, 
                        color: 'white',
                        position: 'absolute', 
                        background: 'rgba(0, 0, 0, 0.59)', 
                        borderRadius: 2.20, 
                        overflow: 'hidden', 
                        flexDirection: 'column', 
                        justifyContent: 'flex-start', 
                        alignItems: 'flex-start', 
                        gap: 8.78, 
                        display: 'inline-flex',
                        fontSize: '13.7px',
                        borderRadius: '4px',
                        border: '1px rgba(166.81, 155.69, 155.69, 0.21) solid',
                        fontFamily: 'Cabin',
                        background: 'rgba(0, 0, 0, 0.59)',
                    }}
                />
                    </div>
                </div>

                    <div className="Frame73" style={{height: 33.38, padding: 8.78, justifyContent: 'center', alignItems: 'center', gap: 8.78, display: 'inline-flex', border: 'yellow'}}>
                        <div className="inputField" style={{textAlign: 'center', color: 'white', fontSize: 13.17, fontFamily: 'Cabin', fontWeight: '400', wordWrap: 'break-word'}}></div>
                        <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    style={{
                        width: 254.70, 
                        height: 38.64, 
                        paddingTop: 2.63, 
                        paddingLeft: 8.78, 
                        left: 72.02, 
                        top: 274.90, 
                        color: 'white',
                        position: 'absolute', 
                        background: 'rgba(0, 0, 0, 0.59)', 
                        borderRadius: 2.20, 
                        overflow: 'hidden', 
                        flexDirection: 'column', 
                        justifyContent: 'flex-start', 
                        alignItems: 'flex-start', 
                        gap: 8.78, 
                        display: 'inline-flex',
                        fontSize: '13.7px',
                        borderRadius: '4px',
                        border: '1px rgba(166.81, 155.69, 155.69, 0.21) solid',
                        fontFamily: 'Cabin',
                        background: 'rgba(0, 0, 0, 0.59)',
                    }}
                    />
                    
                    </div>
                </div>

       
 
               


    
</div>
        
       

    );
}

export default LandingPage;
