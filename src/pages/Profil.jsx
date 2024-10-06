import React from 'react'

const Profil = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen bg-indigo-300 dark:bg-neutral-600 text-white">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <progress className="progress w-56 bg-rose-300 dark:bg-neutral-900"></progress>
    </div>
  </div>
</div>
    </div>
  )
}

export default Profil