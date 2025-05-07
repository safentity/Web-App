import React from "react"

function Soon() {
  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className="max-w-3xl text-center">
        <h1 className="h-22 text-7xl font-bold bg-[linear-gradient(90deg,#98f46e,#00cfa7,#0080f2,#ff00ff,#ed4883,#ffa500)] inline-block text-transparent bg-clip-text">
          Coming Soon
        </h1>
        <p className="text-white my-10 text-xl">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <div>
          <input type="text" />
        </div>
      </div>
    </div>
  )
}

export default Soon
