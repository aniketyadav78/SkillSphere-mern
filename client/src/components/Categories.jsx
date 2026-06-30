import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaVideo,
  FaPenNib,
  FaBullhorn,
  FaRobot,
  FaChartBar,
} from "react-icons/fa";

function Categories() {
  const categories = [
    {
      icon: <FaCode size={45} className="text-blue-600" />,
      title: "Web Development",
    },
    {
      icon: <FaPaintBrush size={45} className="text-pink-500" />,
      title: "Graphic Design",
    },
    {
      icon: <FaMobileAlt size={45} className="text-green-500" />,
      title: "App Development",
    },
    {
      icon: <FaVideo size={45} className="text-red-500" />,
      title: "Video Editing",
    },
    {
      icon: <FaPenNib size={45} className="text-yellow-500" />,
      title: "Content Writing",
    },
    {
      icon: <FaBullhorn size={45} className="text-purple-500" />,
      title: "Digital Marketing",
    },
    {
      icon: <FaRobot size={45} className="text-cyan-500" />,
      title: "AI / Machine Learning",
    },
    {
      icon: <FaChartBar size={45} className="text-orange-500" />,
      title: "Data Analytics",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Explore Popular Categories
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-14">
          Discover talented professionals across different industries.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md p-8 text-center hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-center mb-5">
                {category.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {category.title}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;