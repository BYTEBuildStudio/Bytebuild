export default function Features() {
  return (
    <section className="py-20 px-8 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Features</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 shadow rounded-lg">
          <h3 className="font-bold mb-2">Fast</h3>
          <p className="text-gray-600">Optimized for performance</p>
        </div>

        <div className="p-6 shadow rounded-lg">
          <h3 className="font-bold mb-2">Responsive</h3>
          <p className="text-gray-600">Works on all devices</p>
        </div>

        <div className="p-6 shadow rounded-lg">
          <h3 className="font-bold mb-2">Modern UI</h3>
          <p className="text-gray-600">Clean and minimal design</p>
        </div>
      </div>
    </section>
  );
}
