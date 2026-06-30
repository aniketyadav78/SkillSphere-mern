import { FaUserCheck, FaLock, FaComments, FaRocket } from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaUserCheck size={40} className="text-blue-600" />,
      title: "Verified Freelancers",
      description:
        "Hire trusted and verified professionals with confidence.",
    },
    {
      icon: <FaLock size={40} className="text-blue-600" />,
      title: "Secure Payments",
      description:
        "Safe and secure payment system for every project.",
    },
    {
      icon: <FaComments size={40} className="text-blue-600" />,
      title: "Real-Time Chat",
      description:
        "Communicate instantly with clients and freelancers.",
    },
    {
      icon: <FaRocket size={40} className="text-blue-600" />,
      title: "Fast Hiring",
      description:
        "Find the right freelancer and start your project quickly.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Why Choose SkillSphere?
        </h2>

        <p className="text-center text-gray-500 mb-14">
          Everything you need to hire and work with the best freelancers.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;