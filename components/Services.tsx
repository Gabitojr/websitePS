import { Briefcase, Users, Cpu } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: Briefcase, title: 'IT Staffing', description: 'Find the right IT professionals for your projects.' },
    { icon: Users, title: 'Team Augmentation', description: 'Seamlessly integrate skilled IT staff into your existing teams.' },
    { icon: Cpu, title: 'Technical Consulting', description: 'Get expert advice on your IT infrastructure and strategies.' },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;