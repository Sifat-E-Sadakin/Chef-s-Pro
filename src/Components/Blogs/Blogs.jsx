import React, { useEffect } from 'react';
import './Blogs.css'
import Pdf from "react-to-pdf";

const Blogs = () => {

    useEffect(()=>{
        window.scroll(0,0);
    },[])


    const ref = React.createRef();
    return (
        <div className='container mx-auto '>
           
            <h1 className='text-center text-4xl my-5 '>QNA</h1>
            <div className=''>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button className='btn btn-primary' onClick={toPdf}>Download as Pdf</button>}
                </Pdf>
            </div>
            <div className='qna' ref={ref}>
                <div>
                    <h1>What is the difference between uncontrolled and controlled components ?</h1>
                    <p>React components that have controlled state are those whose updates are propagated to the component's children as props. Components that are uncontrolled are those whose state is controlled by the DOM rather than React.</p>
                </div>
                <div>
                    <h1>How to validate React props using propTypes ? </h1>
                    <p>The propTypes object can be used to define the propTypes for your component and to specify the expected data types and shapes of the props in React. Use the defined propTypes to verify the component's props; if any expected props are missing or are the incorrect type, warnings will be issued.</p>
                </div>
                <div>
                    <h1>What is the difference between nodejs and express js ?</h1>
                    <p>Node.js is a JavaScript runtime that allows developers to write server-side applications in JavaScript, while Express.js is a framework for building web applications using Node.js. Node.js provides a set of built-in modules and APIs for server-side development, while Express.js builds on top of Node.js to provide additional features such as routing, middleware, and templating engines to simplify web application development.</p>
                </div>
                <div>
                    <h1>What is a custom hook, and why will you create a custom hook ?</h1>
                    <p>A reusable piece of code called a "custom hook" in the React framework allows developers to abstract complex logic and reuse it across various components by encapsulating a particular behavior or functionality. In order to address a particular issue or provide a solution that is not offered by the default React APIs, custom hooks are developed. They can aid in enhancing code organization, reducing code duplication, and increasing the modularity and reusability of components</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;