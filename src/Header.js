import React, { useState } from 'react';
import Dropdown from './Dropdown';
import './headerstyles.css';

const Header = ({ searchTerm, handleSearchChange }) => {
    const [isExploreDropdownVisible, setExploreDropdownVisible] = useState(false);
    const [isDashboardDropdownVisible, setDashboardDropdownVisible] = useState(false);
    const [isLogoutDropdownVisible, setLogoutDropdownVisible] = useState(false);
    const [hoverExplore, setHoverExplore] = useState(false);
    const [hoverNewsFeed, setHoverNewsFeed] = useState(false);
    const [hoverLogout, setHoverLogout] = useState(false);

    const exploreItems = [
        { label: "What's coming", href: '/explore/search' },
        { label: 'About', href: '/explore/tags' },
    ];

    const dashboardItems = [
        { label: 'NewsFeed', href: '/dashboard' },
    ];

    const logoutItems = [
        { label: 'My profile', href: '/' },
        { label: 'Log out', href: '/' },
    ];

    const hoverStyleExplore = {
        borderBottom: hoverExplore ? '0px solid grey' : '2px rgba(166.81, 155.69, 155.69, 0.21) solid',
        color: hoverExplore ? 'rgba(65, 176, 232, 100)' : 'black',
        borderRight: hoverExplore ? '1px solid rgba(166.81, 155.69, 155.69, 0.21)' : 'none',
        borderLeft: hoverExplore ? '1px solid rgba(166.81, 155.69, 155.69, 0.21)' : 'none',
        paddingLeft: hoverExplore ? 9: 10

    };

    const hoverStyleNewsFeed = {
        borderBottom: hoverNewsFeed ? 'rgba(65, 176, 232, 100)' : '2px rgba(166.81, 155.69, 155.69, 0.21) solid',
        color: hoverNewsFeed ? 'rgba(65, 176, 232, 100)' : 'black',
        borderRight: hoverNewsFeed ? '1px solid rgba(166.81, 155.69, 155.69, 0.21)' : 'none',
        borderLeft: hoverNewsFeed ? '1px solid rgba(166.81, 155.69, 155.69, 0.21)' : 'none',
        paddingLeft: hoverNewsFeed ? 9: 10
        

    };
    const hoverStyleLogout = {
        borderBottom: hoverLogout ? 'rgba(65, 176, 232, 100)' : '2px rgba(166.81, 155.69, 155.69, 0.21) solid',
        color: hoverLogout ? 'rgba(65, 176, 232, 100)' : 'black',
        borderRight: hoverLogout ? '1px solid rgba(166.81, 155.69, 155.69, 0.21)' : 'none',
        borderLeft: hoverLogout ? '1px solid rgba(166.81, 155.69, 155.69, 0.21)' : 'none',
        paddingLeft: hoverLogout ? 9: 10
        

    };

    return (         
        <div style={{
            width: '100%',
            height: 55,
            position: 'relative', 
            background: 'white', 
            borderTopLeftRadius: 4, 
            borderTopRightRadius: 4, 
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
            
        }}>

<div style={{
    paddingTop: 2, 
    paddingBottom: 5, 
    left: 125, top: 6, 
    position: 'absolute', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 50, 
    display: 'inline-flex'}}>
<div style={{color: 'black', fontSize: 17, fontFamily: 'Cabin', fontWeight: '400', wordWrap: 'break-word'}}>INTERESTING <br/>//OR NOT</div>
</div>

<div style={{height: 35, paddingTop: 10, paddingBottom: 10, left: '83.75%', top: 0, position: 'absolute', background: 'white', borderBottom: '2px rgba(166.81, 155.69, 155.69, 0.21) solid', justifyContent: 'center', alignItems: 'center', gap: 15, display: 'inline-flex'}}
onMouseEnter={() => setLogoutDropdownVisible(true)}
onMouseLeave={() => setLogoutDropdownVisible(false)}>
<img style={{width: 35, height: 35, borderRadius: 30}} src="https://dpwhatsapp.com/wp-content/uploads/2022/10/girl-profile-picture-05.webp" />
<div style={{width: 15, height: 8, position: 'relative'}}>
<svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.881286 1.14601C0.929667 1.09945 0.987141 1.0625 1.05042 1.0373C1.11369 1.01209 1.18153 0.999115 1.25004 0.999115C1.31854 0.999115 1.38638 1.01209 1.44965 1.0373C1.51293 1.0625 1.57041 1.09945 1.61879 1.14601L7.50004 6.79301L13.3813 1.14601C13.4297 1.09952 13.4872 1.06264 13.5505 1.03749C13.6137 1.01233 13.6816 0.999377 13.75 0.999377C13.8185 0.999377 13.8863 1.01233 13.9496 1.03749C14.0129 1.06264 14.0704 1.09952 14.1188 1.14601C14.1672 1.1925 14.2056 1.24769 14.2318 1.30842C14.258 1.36916 14.2715 1.43426 14.2715 1.50001C14.2715 1.56575 14.258 1.63085 14.2318 1.69159C14.2056 1.75233 14.1672 1.80752 14.1188 1.85401L7.86879 7.85401C7.8204 7.90057 7.76293 7.93751 7.69965 7.96272C7.63638 7.98793 7.56854 8.0009 7.50004 8.0009C7.43153 8.0009 7.36369 7.98793 7.30042 7.96272C7.23714 7.93751 7.17967 7.90057 7.13129 7.85401L0.881286 1.85401C0.832783 1.80756 0.7943 1.75239 0.768044 1.69164C0.741787 1.6309 0.728271 1.56578 0.728271 1.50001C0.728271 1.43424 0.741787 1.36912 0.768044 1.30837C0.7943 1.24763 0.832783 1.19245 0.881286 1.14601Z" fill="black"/>
</svg>
</div>
{isLogoutDropdownVisible && <Dropdown items={logoutItems} />}
</div>      

            <div style={{height: 40, paddingTop: 10, paddingBottom: 10, left: '83.75%', top: 0, position: 'absolute', background: 'white', borderBottom: '2px rgba(166.81, 155.69, 155.69, 0.21) solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}
                onMouseEnter={() => setLogoutDropdownVisible(true)}
                onMouseLeave={() => setLogoutDropdownVisible(false)}>
                {/* Logout Section with Icon */}
            </div>

            <div style={{width: 'auto', height: 40, left: 422, top: 0, position: 'absolute'}}
                onMouseEnter={() => { setExploreDropdownVisible(true); setHoverExplore(true); }}
                onMouseLeave={() => { setExploreDropdownVisible(false); setHoverExplore(false); }}>
                <div style={{
                    width: 'auto', height: 35, paddingLeft: 5, paddingRight: 5, paddingTop: 10, paddingBottom: 10, left: 0, top: 0, position: 'absolute', background: 'white', ...hoverStyleExplore, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'
                }}>
                    <div style={{fontSize: 14, fontFamily: 'Cabin', fontWeight: '700', letterSpacing: 0.53, wordWrap: 'break-word'}}>Explore</div>
                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.881286 1.14601C0.929667 1.09945 0.987141 1.0625 1.05042 1.0373C1.11369 1.01209 1.18153 0.999115 1.25004 0.999115C1.31854 0.999115 1.38638 1.01209 1.44965 1.0373C1.51293 1.0625 1.57041 1.09945 1.61879 1.14601L7.50004 6.79301L13.3813 1.14601C13.4297 1.09952 13.4872 1.06264 13.5505 1.03749C13.6137 1.01233 13.6816 0.999377 13.75 0.999377C13.8185 0.999377 13.8863 1.01233 13.9496 1.03749C14.0129 1.06264 14.0704 1.09952 14.1188 1.14601C14.1672 1.1925 14.2056 1.24769 14.2318 1.30842C14.258 1.36916 14.2715 1.43426 14.2715 1.50001C14.2715 1.56575 14.258 1.63085 14.2318 1.69159C14.2056 1.75233 14.1672 1.80752 14.1188 1.85401L7.86879 7.85401C7.8204 7.90057 7.76293 7.93751 7.69965 7.96272C7.63638 7.98793 7.56854 8.0009 7.50004 8.0009C7.43153 8.0009 7.36369 7.98793 7.30042 7.96272C7.23714 7.93751 7.17967 7.90057 7.13129 7.85401L0.881286 1.85401C0.832783 1.80756 0.7943 1.75239 0.768044 1.69164C0.741787 1.6309 0.728271 1.56578 0.728271 1.50001C0.728271 1.43424 0.741787 1.36912 0.768044 1.30837C0.7943 1.24763 0.832783 1.19245 0.881286 1.14601Z" fill="black"/>
</svg>
                </div>
                {isExploreDropdownVisible && <Dropdown items={exploreItems} />}
            </div>

            <div style={{width: 'auto', height: 40, left: 296, top: 0, position: 'absolute'}}
                onMouseEnter={() => { setDashboardDropdownVisible(true); setHoverNewsFeed(true); }}
                onMouseLeave={() => { setDashboardDropdownVisible(false); setHoverNewsFeed(false); }}>
                <div style={{
                    width: 'auto', height: 35, paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 10, left: 0, top: 0, position: 'absolute', background: 'white', ...hoverStyleNewsFeed, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'
                }}>
                    <div style={{fontSize: 14, fontFamily: 'Cabin', fontWeight: '700', letterSpacing: 0.53, wordWrap: 'break-word'}}>NewsFeed</div>
                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.881286 1.14601C0.929667 1.09945 0.987141 1.0625 1.05042 1.0373C1.11369 1.01209 1.18153 0.999115 1.25004 0.999115C1.31854 0.999115 1.38638 1.01209 1.44965 1.0373C1.51293 1.0625 1.57041 1.09945 1.61879 1.14601L7.50004 6.79301L13.3813 1.14601C13.4297 1.09952 13.4872 1.06264 13.5505 1.03749C13.6137 1.01233 13.6816 0.999377 13.75 0.999377C13.8185 0.999377 13.8863 1.01233 13.9496 1.03749C14.0129 1.06264 14.0704 1.09952 14.1188 1.14601C14.1672 1.1925 14.2056 1.24769 14.2318 1.30842C14.258 1.36916 14.2715 1.43426 14.2715 1.50001C14.2715 1.56575 14.258 1.63085 14.2318 1.69159C14.2056 1.75233 14.1672 1.80752 14.1188 1.85401L7.86879 7.85401C7.8204 7.90057 7.76293 7.93751 7.69965 7.96272C7.63638 7.98793 7.56854 8.0009 7.50004 8.0009C7.43153 8.0009 7.36369 7.98793 7.30042 7.96272C7.23714 7.93751 7.17967 7.90057 7.13129 7.85401L0.881286 1.85401C0.832783 1.80756 0.7943 1.75239 0.768044 1.69164C0.741787 1.6309 0.728271 1.56578 0.728271 1.50001C0.728271 1.43424 0.741787 1.36912 0.768044 1.30837C0.7943 1.24763 0.832783 1.19245 0.881286 1.14601Z" fill="black"/>
</svg>
                </div>
                {isDashboardDropdownVisible && <Dropdown items={dashboardItems} />}
            </div>

            <div style={{
                width: 200,
                height: 55,
                marginLeft: 665,
                position: 'relative', 
                background: 'white', 
                borderTopLeftRadius: 0, 
                borderTopRightRadius: 0, 
            }}>
                <div style={{
                    position: 'fixed', 
                    width: 150, 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)',
                    top: 28,
                    
                }}>
                    <input
                        type="text"
                        placeholder="Search by title"
                        className="input-placeholder-style"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        style={{
                            width: '100%', 
                            padding: '10px', 
                            paddingLeft: 20,  
                            borderRadius: '20px', 
                            font: 'Cabin', 
                            border: '0px solid rgba(166.81, 155.69, 155.69, 0.21)', 
                            background: 'rgba(244, 251, 255, 0.7)',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                            fontFamily: 'cabin',
                            fontSize: 12,
                            fontColor: 'rgba(244, 251, 255, 0.7)',
                        }}
                    />
                </div>
            </div>

        </div>
    );
};

export default Header;
