import React, { useEffect, useRef } from 'react';
import '../App.css';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

// gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const parentRef = useRef()
    const canvasRef = useRef(null);
    const frame = {
        currentIndex: 0,
        maxIndex: 382
    };
    let imageLoaded = 0;
    const allImages = [];

    const preloadImages = () => {
        for (let i = 1; i <= frame.maxIndex; i++) {
            const imageURL = `./frame/frame_${i.toString().padStart(4, "0")}.jpeg`;
            const img = new Image();
            img.src = imageURL;
            img.onload = () => {
                imageLoaded++;
                if (imageLoaded === frame.maxIndex) {
                    loadImage(frame.currentIndex);
                    // startAnimation();
                    useEffect(()=>{
                      const el = parentRef.current
                      gsap.to(frame, {
                        // currentIndex: frame.maxIndex,
                        // ease: "none",
                        scrollTrigger: {
                            trigger: el,
                            start: "top top",
                            end: "bottom top",
                            scrub: 2,
                            markers: true,
                            onUpdate: () => {
                                loadImage(Math.floor(frame.currentIndex));
                            }
                        }
                    });
                    })
                }
            };
            allImages.push(img);
        }
    };

    const loadImage = (index) => {
        if (canvasRef.current && index >= 0 && index <= frame.maxIndex) {
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");
            const img = allImages[index];

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const scaleX = canvas.width / img.width;
            const scaleY = canvas.height / img.height;
            const scale = Math.max(scaleX, scaleY);

            const newWidth = img.width * scale;
            const newHeight = img.height * scale;
            const offsetX = (canvas.width - newWidth) / 2;
            const offsetY = (canvas.height - newHeight) / 2;

            context.clearRect(0, 0, canvas.width, canvas.height);
            context.imageSmoothingEnabled = true;
            context.imageSmoothingQuality = "high";
            context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
            frame.currentIndex = index;
        }
    };

    const startAnimation = () => {
       
    };

    useEffect(() => {
        preloadImages();
    }, []);

    return (
        <div>
            <h1>Hello</h1>
            <div className="w-full bg-zinc-900">
                <div className="parent relative top-0 left-0 w-full h-[700vh] bg-zinc-800" ref={parentRef}>
                    <div className="w-full sticky top-0 left-0 h-screen">
                        <canvas ref={canvasRef} className="w-full h-screen" id="frame"></canvas>
                    </div>
                </div>
            </div>
        </div>
    );
}
