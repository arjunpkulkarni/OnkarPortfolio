export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden px-4 lg:px-8">
      {/* Background Text */}
      <div className="absolute inset-0 text-[20vw] font-bold text-gray-800/20 select-none pointer-events-none flex items-center justify-center">
        ONKAR GORE
      </div>
      
      <div className="relative z-10 max-w-screen-xl mx-auto pt-20 lg:pt-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Advanced UI/UX designer.
          </h1>
          <p className="text-xl text-gray-300">
            Experience with React JS, HTML, CSS, JavaScript.
          </p>
          <button 
            variant="outline" 
            size="lg"
            className="bg-white text-black hover:bg-gray-100"
          >
            Contact me
          </button>
        </div>

        {/* Right Column - Device Mockups */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            {/* Top Device */}
            <div className="col-span-2">
              <div className="bg-white rounded-2xl p-2 shadow-lg">
                <img
                  src="/placeholder.svg?height=400&width=800"
                  width={800}
                  height={400}
                  alt="UI Design mockup"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
            
            {/* Bottom Left Device */}
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              <img
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Mobile app design"
                className="w-full rounded-xl"
              />
            </div>
            
            {/* Bottom Right Device */}
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              <img
                src="/placeholder.svg?height=300&width=400"
                width={400}
                height={300}
                alt="Web design mockup"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

