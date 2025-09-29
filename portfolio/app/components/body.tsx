import React from "react";

const Body = () => {
  return (
    <div>
      <main className="text-black flex flex-col gap-8 items-center mt-20">
        <details className="max-w-4xl px-4 py-8 bg-amber-500 opacity-85 w-126 rounded-2xl">
          <summary className="cursor-pointer text-xl font-semibold mb-4 text-center">
            Projects
          </summary>
          <ul className="space-y-3 mt-4">
            <li className="ml-6">
              <span className="font-semibold">Frontend:</span>
            </li>
            <li className="ml-6">
              <span className="font-semibold">Backend:</span>
            </li>
           
          </ul>
          
        </details>
       
        <details className="max-w-4xl px-4 py-8 bg-amber-500 opacity-85 w-126 rounded-2xl">
          <summary className="cursor-pointer text-xl font-semibold mb-4 text-center">
            📘 Programming Languages
          </summary>
          <ul className="space-y-3 mt-4 flex justify-center">
            <li className="ml-6">
              <span className="font-semibold">Typescript</span>
            </li>
            <li className="ml-6">
              <span className="font-semibold">JavaScript</span>
            </li>
            <li className="ml-6">
              <span className="font-semibold">C</span> 
            </li>
            <li className="ml-6">
              <span className="font-semibold">C++</span>
            </li>
          </ul>
          
        </details> 
        <h1>Web Development</h1>

          <details className="max-w-4xl px-4 py-8 bg-amber-500 opacity-85 w-126 rounded-2xl">
          <summary className="cursor-pointer text-xl font-semibold mb-4 text-center">
           Frontend
          </summary>
          <ul className="space-y-3 mt-4">
            <li>React</li>
            <li>Next.js</li>
            <li>TailwindCSS</li>
            <li>shadCN UI</li>
          </ul>
          
        </details>

          <details className="max-w-4xl px-4 py-8 bg-amber-500 opacity-85 w-126 rounded-2xl">
          <summary className="cursor-pointer text-xl font-semibold mb-4 text-center">
           Backend
          </summary>
          <ul className="space-y-3 mt-4">
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
          </details>

    <details className="max-w-4xl px-4 py-8 bg-amber-500 opacity-85 w-126 rounded-2xl">
          <summary className="cursor-pointer text-xl font-semibold mb-4 text-center">
           Database
          </summary>
          <ul className="space-y-3 mt-4">
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
          </ul>
           </details>

          <details className="max-w-4xl px-4 py-8 bg-amber-500 opacity-85 w-126 rounded-2xl">
          <summary className="cursor-pointer text-xl font-semibold mb-4 text-center">
            📘 My Skills
          </summary>
          <ul className="space-y-3 mt-4">
            <li className="ml-6">
              <span className="font-semibold">Frontend:</span>
            </li>
            <li className="ml-6">
              <span className="font-semibold">Backend:</span>
            </li>
            <li className="ml-6">
              <span className="font-semibold">Database:</span> 
            </li>
            <li className="ml-6">
              <span className="font-semibold">Other:</span> ++
            </li>
          </ul>
          
        </details>
          <details className="max-w-4xl px-4 py-8 bg-amber-500 opacity-85 w-126 rounded-2xl">
          <summary className="cursor-pointer text-xl font-semibold mb-4 text-center">
            📘 My Skills
          </summary>
          <ul className="space-y-3 mt-4">
            <li className="ml-6">
              <span className="font-semibold">Frontend:</span>
            </li>
            <li className="ml-6">
              <span className="font-semibold">Backend:</span>
            </li>
            <li className="ml-6">
              <span className="font-semibold">Database:</span> 
            </li>
            <li className="ml-6">
              <span className="font-semibold">Other:</span> ++
            </li>
          </ul>
          
        </details>

        
      </main>
    </div>
  );
};

export default Body;