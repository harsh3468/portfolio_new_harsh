import React from "react";
import Link from "next/link";

export const INFORMATION = {
  CONTACT: {
    MESSAGE: (
      <>
        Thanks for stopping by. I’m currently looking to join a dynamic team where
        I can get to work on challenging products which really make an impact to the firm's growth. If you think we might be a good fit
        for one another, send me an{" "}
        <Link
          className="font-extrabold text-foreground"
          href={"mailto:harshkumargoel.3468@gmail.com"}
        >
          email
        </Link>{" "}
        &#128231;.
      </>
    ),
    SOCIALS: {
      github: "https://github.com/harsh3468",
      leetcode: "https://leetcode.com/u/hkg3468/",
      linkedin: "https://www.linkedin.com/in/harsh-kumar-goel-366109152/",
      resume: "https://drive.google.com/file/d/1jRl0KOdflHundSLSv0S4X0-qXtXPEp6r/view?usp=sharing",
      
    },
  },
};

export const projects = [
  {
    title: "Hacksun",
    imageKey: "hacksun",
    imageUrl:
      "https://hacksun.in/favicon.svg",
    liveLink: "https://hacksun.in/",
    description:
      "HackSun is a creative technology collective delivering cutting-edge web and mobile solutions with a focus on user-centric design and innovative engineering.",
    longDescription:
      "HackSun is a forward-thinking technology collective dedicated to crafting exceptional digital experiences. Specializing in web and mobile development, UI/UX design, and innovative engineering services, HackSun combines creativity with technical expertise to bring ideas to life. Their projects, such as 'Thread'—an online platform for context-aware language translation—and 'Bodhi'—a platform offering online horoscope predictions—demonstrate their commitment to leveraging modern technologies like React, Flutter, and Firebase to solve real-world problems. By embracing a collaborative approach and staying at the forefront of technological advancements, HackSun continues to build solutions that are not only functional but also resonate with users.",
  },
  {
    title: "BoleSale",
    imageKey: "bolesale",
    imageUrl:
      "https://raw.githubusercontent.com/harsh3468/pfimages/main/bolesale.png",
    liveLink:
      "https://bolesale.com/",
    description:
      "Bolesale is a dynamic B2B platform connecting retailers and suppliers with ease, scale, and simplicity.",
    longDescription:
      "Bolesale is a next-generation B2B marketplace designed to streamline wholesale buying and selling across various industries. With a focus on accessibility, reliability, and speed, it empowers retailers and suppliers to connect, transact, and grow—all from a unified digital platform. The backbone of Bolesale is built on a microservices architecture, enabling fast, independent scaling of services like inventory management, order tracking, and vendor communication. The backend leverages Node.js and NestJS for clean, modular APIs and real-time interactions, while Java supports transaction-heavy operations requiring robustness and performance. A mix of SQL and NoSQL databases ensures efficient data handling across diverse product categories, and messaging queues (like Kafka or RabbitMQ) manage asynchronous tasks such as notifications, invoice processing, and order status updates. This architecture not only boosts performance but also ensures seamless integrations with logistics, payment gateways, and CRM tools. By combining business insight with modern technology, Bolesale is reshaping wholesale commerce for the digital age.",
  },
  {
    title: "Desi Tadka",
    imageKey: "desi_tadka",
    imageUrl:
      "https://raw.githubusercontent.com/harsh3468/pfimages/main/desi%20tadka.png",
    liveLink: "https://desitadka-ccaf3.web.app/",
    description:
      "Desi Tadka is a restaurant in Roorkee, Uttrakhand, India. It is a traditional vegeterian and non-vegeterian restaurant which was started by ex-chef of Radisson Blu.",
    longDescription:
      "Desi Tadka is where traditional Indian flavors meet modern digital convenience. From placing an order to tracking deliveries, every touchpoint is crafted to offer a smooth, user-friendly experience. The platform goes beyond food—it’s a celebration of culture, taste, and technology. Under the hood, Desi Tadka is powered by a microservices architecture, ensuring each feature—from order processing to customer feedback—is modular, scalable, and efficient. The backend stack includes Node.js and NestJS for fast, structured service development, with Java handling secure, high-performance workflows. Cloud-hosted databases manage everything from menu items to user preferences, while messaging queues coordinate services like real-time order updates and delivery tracking. Whether it's dining in, taking out, or ordering online, Desi Tadka delivers a tech-savvy, flavor-packed experience every time.",
  },
  {
    title: "Web Builder Prototype",
    imageKey: "web_builder",
    imageUrl:
      "https://raw.githubusercontent.com/goelparas/imFWEA/1ed1d158be8ce3c9bef6b7ded925227147e17245/webbuilder.svg",
    liveLink: "https://web-builder-fawn.vercel.app/",
    description:
      "A prototype for a drag-and-drop web builder, allowing users to create websites by dragging elements.",
    longDescription:
      "The Web Builder Prototype is an early-stage project designed to explore the concept of drag-and-drop website creation. This prototype allows users to visually design and build websites by dragging elements onto a canvas, providing a hands-on approach to website development without the need for coding. The project serves as a foundation for creating a more advanced website builder tool, with potential future enhancements including additional customizable elements, more sophisticated layout options, and integration with various content management features. Although still in its developmental stages, the Web Builder Prototype demonstrates the concept's potential for simplifying the website creation process and making it more accessible to users with varying levels of technical expertise. The project reflects a commitment to innovation in web development tools, aiming to provide users with an intuitive and flexible platform for building customized websites.",
  },

  {
    title: "Clean4Wheels",
    imageKey: "clean-4-wheels",
    imageUrl:
      "https://raw.githubusercontent.com/harsh3468/pfimages/main/clean4wheels.png",
    liveLink: "https://www.clean4wheels.com/",
    description:
      "Cars96 specializes in car washing, detailing, and their unique Insta Cleaning service—designed for those who value speed and convenience. Their offerings help customers maintain a clean, balanced lifestyle, turning every car into a healthy extension of home.",
    longDescription:
      "Clean4Wheels is redefining the car care experience with a customer-first approach powered by cutting-edge technology. From doorstep cleaning to advanced detailing, the platform ensures convenience, quality, and consistency across every service. Behind the scenes, Clean4Wheels operates on a robust microservices architecture, enabling independent scaling and smooth deployment of new features. The backend is built using Node.js and NestJS for high-speed performance and modular development, while Java supports critical, enterprise-grade operations. With a combination of relational and NoSQL databases, the platform ensures reliable data management, and messaging queues (like RabbitMQ or Kafka) handle inter-service communication efficiently—delivering a seamless user experience from request to completion. By blending automotive expertise with software engineering, Clean4Wheels is shaping the future of on-demand car care.",
  },
  {
    title: "Cars96",
    imageKey: "cars-96",
    imageUrl:
      "https://raw.githubusercontent.com/harsh3468/pfimages/main/cars96.png",
    liveLink: "https://cars96.com/",
    description:
      "At Cars96.com, we're about revolutionizing the entire car buying experience. As a cutting edge e-Commerce platform, we seamlessly integrate technology and automotive expertise to redefine how people buy, sell, insure, and finance their vehicles.",
    longDescription:
      "Cars96 is an innovative, technology-driven automotive service platform designed to deliver seamless and reliable vehicle maintenance and support solutions. The platform leverages a microservices architecture to ensure scalability, flexibility, and efficient service delivery. Built with a robust tech stack, Cars96 utilizes Node.js and NestJS for developing high-performance, maintainable backend services, while Java powers core service modules that demand enterprise-grade stability. The system integrates with relational and NoSQL databases for dynamic data handling and implements messaging queues (such as RabbitMQ or Kafka) for effective asynchronous communication between services.The platform is engineered for scalability and responsiveness, catering to real-time service bookings, tracking, and customer engagement through a cloud-native architecture.",
  },
];

export const AVATAR =
  "https://raw.githubusercontent.com/goelparas/imFWEA/master/avatar.jpg";

export const words = [
  'Node.js',
  'Java',
  'Spring Boot',
  'Microservices',
  'REST APIs',
  'GraphQL',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'Python',
  'Next.js',
  'React',
  'Javascript',
  'TypeScript',
  'Salesforce/Apex',
  'C',
  'AWS',
  'Docker',
  'Kubernetes',
  'Git',
  'CI/CD',
  'Tailwind CSS',
  'TypeScript',
  'HTML/CSS',
  'Firebase',
  'BigQuery',
  'Airflow',
  'Kafka',
];
