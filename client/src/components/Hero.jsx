function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white">

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side */}

          <div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">

              Find the Best
              <br />

              Freelancers
              <span className="text-yellow-300"> Near You</span>

            </h1>

            <p className="mt-6 text-lg text-gray-100 leading-8">

              SkillSphere helps businesses hire trusted freelancers
              for web development, graphic design, video editing,
              content writing and much more.

            </p>

            <div className="flex gap-5 mt-8">

              <button className="bg-white text-blue-600 px-7 py-3 rounded-xl font-semibold hover:scale-105 transition">

                Hire Freelancer

              </button>

              <button className="border-2 border-white px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition">

                Become Freelancer

              </button>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="bg-white rounded-3xl shadow-2xl p-8 text-gray-800 w-96">

              <h2 className="text-2xl font-bold">

                Why Choose SkillSphere?

              </h2>

              <div className="mt-6 space-y-5">

                <div>
                  ✅ Verified Freelancers
                </div>

                <div>
                  ⚡ Fast Hiring Process
                </div>

                <div>
                  🔒 Secure Payments
                </div>

                <div>
                  💬 Real-Time Chat
                </div>

                <div>
                  ⭐ Trusted by Thousands
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;