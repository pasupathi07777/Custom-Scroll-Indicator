// import React,{useState,useEffect} from 'react'


// const Indicator = ({URL}) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [errorMessage, setErrorMessage] = useState("");
//     const [scrollPercentage, setScrollPercentage] = useState(0);
  
//     async function fetchData(getUrl) {
//       try {
//         setLoading(true);
//         const response = await fetch(getUrl);
//         const data = await response.json();
//         if (data && data.products && data.products.length > 0) {
//           setData(data.products);
//           setLoading(false);
//         }
//       } catch (e) {
//         console.log(e);
//         setErrorMessage(e.message);
//       }
//     }
  
//     useEffect(() => {
//       fetchData(URL);
//     }, [URL]);
  
//     function handleScrollPercentage() {
//       console.log(
//         document.body.scrollTop,
//         document.documentElement.scrollTop,
//         document.documentElement.scrollHeight,
//         document.documentElement.clientHeight
//       );
  
//       const howMuchScrolled =
//       document.body.scrollTop || document.documentElement.scrollTop;
  
//       const height =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;
  
//       setScrollPercentage((howMuchScrolled / height) * 100);
//     }
  
//     useEffect(() => {
//       window.addEventListener("scroll", handleScrollPercentage);

//       return () => {
//         window.removeEventListener("scroll", () => {});
//       };
  
      
//     }, []);
  
//     console.log(data, scrollPercentage);
  
//     if (errorMessage) {
//       return <div>Error ! {errorMessage}</div>;
//     }
  
//     if (loading) {
//       return <div>Loading data ! Pleaae wait</div>;
//     }
  
//     return (
//       <div className=''>
//         <div className="top-container">
//           <h1>Custom Scroll Indicator</h1>
//           <div className="scroll-progress-tracking-container">
//             <div
//               className="current-progress-bar"
//               style={{ width: `${scrollPercentage}%` }}
//             ></div>
//           </div>
//         </div>
//         <div className="data-container w-full flex flex-col justify-center items-center gap-1 px-1  ">
//           {data && data.length > 0
//             ? data.map((dataItem) => <p className='b bg-slate-400 w-full max-w-[500px] text-center rounded' key={dataItem.id}>{dataItem.title}</p>)
//             : null}
//         </div>
//       </div>
//     )
// }

// export default Indicator



import React, { useState, useEffect } from 'react';

const Indicator = ({ URL }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();
            if (data && data.products && data.products.length > 0) {
                setData(data.products);
                setLoading(false);
            }
        } catch (e) {
            console.log(e);
            setErrorMessage(e.message);
        }
    }

    useEffect(() => {
        fetchData(URL);
    }, [URL]);

    function handleScrollPercentage() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;
        setScrollPercentage(scrolled);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercentage);

        return () => {
            window.removeEventListener("scroll", handleScrollPercentage);
        };
    }, []);

    console.log(data, scrollPercentage);

    if (errorMessage) {
        return <div>Error ! {errorMessage}</div>;
    }

    if (loading) {
        return <div>Loading data! Please wait</div>;
    }

    return (
        <div className=''>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-tracking-container">
                    <div
                        className="current-progress-bar"
                        style={{ width: `${scrollPercentage}%` }}
                    ></div>
                </div>
            </div>
            <div className="data-container w-full flex flex-col justify-center items-center gap-1 px-1  ">
                {data && data.length > 0
                    ? data.map((dataItem) => <p className='b bg-slate-400 w-full max-w-[500px] text-center rounded' key={dataItem.id}>{dataItem.title}</p>)
                    : null}
            </div>
        </div>
    );
}

export default Indicator;
