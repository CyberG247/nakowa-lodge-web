
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Info, Users, Star, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&h=600)' }}>
        <div className="absolute inset-0 bg-navy bg-opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
            <div className="w-20 h-1 bg-accent-red mx-auto mb-4"></div>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Discover the story behind B. Nakowa Modern Guest Lodge
            </p>
          </div>
        </div>
      </div>
      
      {/* About Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-navy">Our Story</h2>
              <div className="w-20 h-1 bg-accent-red mb-6"></div>
              <p className="text-gray-700 mb-6">
                Founded with a vision of redefining hospitality in Dutse, B. Nakowa Modern Guest Lodge 
                has quickly established itself as a premier accommodation destination in Jigawa State. 
                Our journey began with a simple mission: to provide guests with an exceptional stay experience 
                that combines modern comfort with traditional Nigerian hospitality.
              </p>
              <p className="text-gray-700 mb-6">
                Since our establishment, we have continuously evolved to meet and exceed the expectations 
                of our guests. Our growing customer base is a testament to our unwavering commitment to 
                excellence in every aspect of our service delivery.
              </p>
              <p className="text-gray-700">
                Today, B. Nakowa Modern Guest Lodge stands as a beacon of premium hospitality in the 
                heart of Dutse, offering an unparalleled blend of luxury, comfort, and personalized service.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&h=600" 
                alt="B. Nakowa Modern Guest Lodge" 
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Values */}
      <div className="py-16 bg-accent-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-navy">Our Values</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              The principles that guide our service and operations
            </p>
            <div className="w-20 h-1 bg-accent-red mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-accent-beige rounded-full flex items-center justify-center mb-6 mx-auto">
                <Star className="text-accent-red" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-navy text-center">Excellence</h3>
              <p className="text-gray-700 text-center">
                We strive for excellence in every aspect of our service, from the comfort of our rooms to the quality of our dining experience.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-accent-beige rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="text-accent-red" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-navy text-center">Customer-Centric</h3>
              <p className="text-gray-700 text-center">
                Our guests are at the heart of everything we do. We continuously listen, learn, and adapt to meet their evolving needs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-accent-beige rounded-full flex items-center justify-center mb-6 mx-auto">
                <Info className="text-accent-red" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-navy text-center">Integrity</h3>
              <p className="text-gray-700 text-center">
                We conduct our business with the highest standards of integrity, transparency, and ethical practices.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Team */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-navy">Our Management Team</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Meet the dedicated professionals behind our exceptional service
            </p>
            <div className="w-20 h-1 bg-accent-red mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Samira Ahmed",
                position: "General Manager",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300",
                bio: "Over 15 years in hospitality management with a passion for exceptional service."
              },
              {
                name: "Emmanuel Okafor",
                position: "Head Chef",
                image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=300&h=300",
                bio: "An award-winning chef specializing in both local and international cuisine."
              },
              {
                name: "Fatima Bello",
                position: "Guest Relations Manager",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300",
                bio: "Dedicated to ensuring every guest has a memorable and comfortable stay."
              },
              {
                name: "Daniel Eze",
                position: "Facilities Director",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&h=300",
                bio: "Maintains our facilities to the highest standards of comfort and safety."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white border border-accent-grey rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-navy">{member.name}</h3>
                  <p className="text-accent-red font-medium mb-4">{member.position}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
