import React from "react";
import "./SmallBusiness.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const SmallBusinessSection = () => {


  const cards = [
    {
      img: "/retail_stores.webp",
      title: "Retail Store's",
      paragraph:
        "Vyapar app provides a comprehensive, user-friendly retail management solution tailored for small and medium-sized retail stores, including grocery shops, clothing boutiques, and pharmacies. It enables retailers to streamline operations with features like fast barcode-based billing, real-time inventory tracking, and automatic stock updates, which helps reduce manual errors and prevents stockouts or overstocking.",
    },
    {
      img: "/Pharmacist-bro.webp",
      title: "Hospitals and Pharmacies",
      paragraph:
        "Vyapar app provides a tailored, comprehensive digital solution for hospitals and pharmacies, focusing on streamlining complex inventory management and fast-paced billing needs. For pharmacies, it acts as an essential GST-compliant billing tool, allowing for quick invoice generation, batch-wise tracking of medicines, and automated expiry date alerts to prevent wastage and ensure safety. ",
    },
    {
      img: "/lifestyle & fashion business.webp",
      title: "lifestyle and fashion business",
      paragraph:
        "The Vyapar app offers a tailored, comprehensive digital solution designed specifically for the fast-paced lifestyle and fashion business sector, allowing retailers to move away from error-prone manual, paper-based records to a more streamlined digital approach. It supports garment shops, boutiques, and footwear outlets by facilitating efficient, variant-wise inventory management, enabling retailers to track products by size, color, design, and fabric, which ensures that popular items are always in stock and slow-moving products can be identified for clearance. ",
    },
    {
      img: "/freelance professional.webp",
      title: "Freelance Professionals",
      paragraph:
        "Vyapar app serves as a comprehensive, user-friendly, and cost-effective digital accounting solution specifically tailored to meet the dynamic needs of freelance professionals, consultants, and independent contractors. It streamlines the entire financial workflow by allowing freelancers to easily create and send professional, customized GST invoices, track expenses, and manage client payments in real-time.",
    },
    {
      img: "/construction-business.webp",
      title: "Construction Business",
      paragraph:
        "Vyapar app provides a tailored construction accounting and billing solution that enables builders, contractors, and civil engineers to digitize their operations, including project management, material inventory, and financial tracking. It simplifies the construction workflow by allowing users to create detailed estimates and quotations—including labor, material, and tax breakdowns—and convert them into GST-compliant invoices in one click",
    },
    {
      img: "/Supermarket.webp",
      title: "Supermarket Chains",
      paragraph:
        "Vyapar app provides a comprehensive, all-in-one ERP and billing solution tailored for supermarket chains and retail grocery stores, designed to streamline complex, high-volume daily operations. It enables efficient, multi-location, and multi-user management, allowing owners to monitor sales, inventory, and staff activity across various branches from a centralized dashboard",
    },
    {
      img: "/startup.webp",
      title: "Startups and SMEs",
      paragraph:
        "The Vyapar app has emerged as a vital, user-friendly, and cost-effective digital tool tailored specifically for the unique needs of startups and Small and Medium-sized Enterprises (SMEs) in India. Recognizing that these businesses often operate on tight budgets with limited resources, Vyapar offers a comprehensive,, all-in-one platform for GST billing, inventory management, and expense tracking on both mobile and desktop devices. By enabling features like professional invoice customization, automated,, GST report generation, and, timely, payment reminders via WhatsApp, the app streamlines, financial operations and significantly reduces, manual errors",
    },
  ];

  return (
    <section className="section6">
      <div className="section6-content">
        <div className="first-header">
          <h1>Built for Small Businesses</h1>
        </div>

        <div className="detailed-text">
          <p>
            Vyapar GST billing software and accounting tools have numerous
            features. Collectively, they help businesses across 
            industries. Vyapar app is built to serve every industry. It is
            customisable to meet the requirement of your business as per
          
            your unique business requirements. Some of the most popular
            industries use the Vyapar GST accounting software. It
      
            helps manage all of their business requireme
          </p>
        </div>

        <div className="card-slide">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
     
            {cards.map((item, index) => (
           <SwiperSlide>
                <div className="cards" key={index}>
                  <div className="image-for-card">
                    <img src={item.img} alt="card-image" />
                  </div>

                  <div className="title -paragraph">
                    <h3>{item.title}</h3>
                    <p>{item.paragraph}</p>
                  </div>
                </div>
                 </SwiperSlide>
            ))}
          

          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SmallBusinessSection;
