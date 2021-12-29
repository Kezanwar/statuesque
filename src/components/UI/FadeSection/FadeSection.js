import React, { useState, useEffect, useRef } from 'react';
import './FadeSection.css'

function FadeSection({ classes, children }) {

    const [isVisible, setisVisible] = useState(false);
    const domRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setisVisible(entry.isIntersecting))
        });
        observer.observe(domRef.current);
        return () => {
            observer.unobserve(domRef.current)
        }
    }, [])

    return (
        <div ref={domRef} className={classes + ` fade-in-section ${isVisible ? 'fis-is-visible' : ''}`}>
            {children}
        </div>
    )
}

export default FadeSection
