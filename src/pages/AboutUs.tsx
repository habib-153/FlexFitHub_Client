import MemberCard from "../components/ui/AboutUs/MemberCard";
import BenefitsCard from "../components/ui/Home/Benefits/BenefitsCard";
import { benefits } from "../utils/benefits";

const AboutUs = () => {
  return (
    <div className="about-us-container p-6">
      {/* Introduction Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Company</h1>
        <p className="text-lg">
          At <span className="text-[#fc8d10] font-semibold">FlexFitHub</span>,
          we're dedicated to providing the best services to our customers. Our
          team is composed of highly skilled professionals who are passionate
          about their work.
        </p>
      </div>
      {/* Services Section */}
      <div className=" mb-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 my-5">
          {benefits?.map((benefit, idx) => (
            <BenefitsCard key={idx} data={benefit} />
          ))}
        </div>
      </div>
      {/* Team Information Section */}
      <div className="team my-8">
        <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 my-3">
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </div>
      </div>

      {/* Contact Us Section */}
      <section className="contact mb-8">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-4">
          For more information, feel free to contact us or visit our social
          media pages.
        </p>
        <p className="text-lg">
          Email:{" "}
          <a href="mailto:info@company.com" className="text-blue-500">
            info@company.com
          </a>
        </p>
        <p className="text-lg">
          Phone:{" "}
          <a href="tel:+1234567890" className="text-blue-500">
            +1 234 567 890
          </a>
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
