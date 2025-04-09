export default function CallToAction() {
    return (
      <section className="bg-[#29ab87] py-12 px-6 text-white text-center rounded shadow-md mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your eBay Journey?
        </h2>
        <p className="text-lg mb-6">
          Join our course and take the first step towards earning online with confidence. Start today!
        </p>
        <a
          href="/" //change this to actual link
          className="inline-block bg-white text-[#29ab87] font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition duration-300"
        >
          Enroll Now
        </a>
      </section>
    );
  }
  