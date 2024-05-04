import React from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure to import useNavigate

function Landingpagemiddle() {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleNavigation = () => {
        navigate('/signup'); // Update this with your target path
    };

    return (
        <div className="container" style={{
            width: '55vh', 
            height: '110vh', 
            background: 'white',
            left: '0%',
            position: 'relative',
            top: 80,
            }}>

<div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
    <div style={{
        width: 340, 
        height: 103, 
        left: 56, 
        top: 252, 
        position: 'absolute', 
        textAlign: 'center',
        color: 'black', 
        fontSize: 15, 
        fontFamily: 'Cabin', 
        fontWeight: '400'
    }}>
        <br/>Already a Member? <span style={{color: '#41B0E8', fontWeight: '700', textDecoration: 'underline'}}>Log In</span>
    </div>
    <div onClick={handleNavigation} style={{
        paddingTop: 10, 
        paddingBottom: 10, 
        paddingLeft: 100, 
        paddingRight: 101, 
        left: 56, 
        top: 447, 
        position: 'absolute', 
        background: '#41B0E8', 
        borderRadius: '2.5px', 
        overflow: 'hidden', 
        border: '1px solid rgba(166, 155, 155, 0.21)', 
        justifyContent: 'center', 
        alignItems: 'center', 
        display: 'flex'
    }}>
         <div style={{textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Cabin', fontWeight: '700'}}>Sign up with email</div>
    </div>
    <div style={{
        paddingTop: 10, 
        paddingBottom: 10, 
        paddingLeft: 16, 
        paddingRight: 96, 
        left: 56, 
        top: 379, 
        position: 'absolute', 
        background: '#F9FDFF', 
        borderRadius: '2.5px', 
        overflow: 'hidden', 
        border: '1px solid rgba(166, 155, 155, 0.21)', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        display: 'flex',
        gap: '54px'
    }}>
        <img style={{width: 25, height: 25}} src="https://s3-alpha-sig.figma.com/img/ab6b/4b9f/c19cce21b997a3ac8e1f1904df5e6eae?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8syaRqqYuq8ej6Z05HqNxqe02u0sZqJDJGycAhGsYIldzhRN0UINQb8ZJfP8dqPnsAMQgZgygVrm6xBBsvn070ErgUNqxBmGBl5w0r-K8JG2Q1jI-q4ggsUyTZ7QSRn~30p4W~atTandO8fXRLmEgWfmLdD0ODB6jEZPMb0~gAJMey-JPILgytcZPDjgmlLn5jJ~U5dT4z~SGjfkqy9Lfssj998jr4H9vX1-FJ4s2pioWBq8k5u5D0p2IlneELKWzmdJOeirv0T7q0kg0tIGMmXvKLSVEQpvsUZKRGvmCqVf9lji8Mj9~Mhz9oEaYMiRanaDVu1hoY3K0MfWwq7YQ__" alt="Google Icon" />
        <div style={{textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Cabin', fontWeight: '700'}}>Sign up with Google</div>
    </div>
    <div style={{
        paddingTop: 10, 
        paddingBottom: 10, 
        paddingLeft: 16, 
        paddingRight: 87, 
        left: 56, 
        top: 311, 
        position: 'absolute', 
        background: '#F9FDFF', 
        borderRadius: '2.5px', 
        overflow: 'hidden', 
        border: '1px solid rgba(166, 155, 155, 0.21)', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        display: 'flex',
        gap: '46px'
    }}>
        <img style={{width: 25, height: 25}} src="https://s3-alpha-sig.figma.com/img/1b42/cad1/5ec1ef30b903693c1a3a893b35f092d2?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aY~TiwFXPH2Z~oaMv1lwTv2QLyYniQs8-RcuhUN~jPIUOGOvVuqbLr8lSWAuVwgH5kFTBNXZ1dYxasqSwkoKwyfJAe2gG064ZgHkgSyzplkaPUfL3MXPQQisPnVwoZCA3PplWR0k9HW1-u8h8RmxVf3k4mdFWcd64L3MEQ3-fk8SLrc8t0PhnmjohDDW0JllrJKcmezyuCrTvcWpCx7jiyFi-VHbLepZ05oFmNw1KtIy3Y6n35rV7O-Ky8U~amDNWA2oIbaDqhsXfb8qyD9eo4BnaUn86XZ2wzFE2evlXt1z3G-TuHzYF~KawYRN-SAPILd76pAkdVkR2digxqmLJw__" alt="Facebook Icon" />
        <div style={{textAlign: 'center', color: 'black', fontSize: 15, fontFamily: 'Cabin', fontWeight: '700'}}>Sign up with Facebook</div>
    </div>
    <div style={{
        width: 290, 
        height: 64, 
        left: 81, 
        top: 106, 
        position: 'absolute', 
        textAlign: 'center', 
        color: 'black', 
        fontSize: 28, 
        fontFamily: 'Cabin', 
        fontWeight: '700'
    }}>Empower Your News Experience</div>
    <div style={{
        width: 290, 
        height: 33, 
        left: 81, 
        top: 195, 
        position: 'absolute', 
        textAlign: 'center', 
        color: 'black', 
        fontSize: 12, 
        fontFamily: 'Cabin', 
        fontWeight: '400'
    }}>Dive into a world where your interests shape your news landscape. </div>
    <div style={{
        width: 290, 
        height: 64, 
        left: 81, 
        top: 515, 
        position: 'absolute', 
        textAlign: 'center', 
        color: 'black', 
        fontSize: 11, 
        fontFamily: 'Cabin', 
        fontWeight: '400'
    }}> Sign up for free and become part of a movement redefining news consumption.</div>
</div>
</div>
    );
};
export default Landingpagemiddle;
