"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/lib/hooks/useOutsideClick";
import { cn } from "@/lib/utils";
import { FaCircleXmark } from "react-icons/fa6";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    false
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="relative  overflow-hidden w-full md:px-[20%]">
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-transparent  h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid  place-items-center z-[100] h-dvh">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-1 z-50 right-0 lg:hidden items-center justify-center bg-black  rounded-full h-12 w-12"
              onClick={() => setActive(null)}
            >
              <FaCircleXmark size={40} stroke="#000" />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-dvh md:h-fit md:max-h-[90%]  flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="p-3 h-2/5"
              >
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className={cn(
                    "w-full h-[180px] lg:h-80 !rounded-3xl object-contain object-center",
                    active.imageStyle
                  )}
                />
              </motion.div>
              <div className="h-4/5">
                <div className="flex justify-between items-start p-4 h-[20%]">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}{" "}
                      <span className="text-[10px] sm:text-xs font-condensed ">
                        {active.time}
                      </span>
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-8 py-2 text-md !rounded-xl font-condensed font-bold bg-white shrink-0 text-black"
                  >
                    Link
                  </motion.a>
                </div>
                <div className="relative px-4 h-[90%] scrollbar-hide overflow-y-scroll">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-400   overflow-y-scroll pb-32  h-full md:h-80 scrollbar-hide"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="flex flex-col  w-full gap-12">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between  w-full items-start sm:items-center min-w-fit hover:bg-neutral-700  rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row w-full ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={150}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className={cn(
                    `h-44 w-full md:h-16 md:w-24 !rounded-2xl object-contain object-center `,
                    card.imageStyle
                  )}
                />
              </motion.div>
              <div className="flex justify-between items-center rounded-xl p-1 sm:w-full">
                <div>
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-start md:text-left"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-start md:text-left"
                  >
                    {card.description}
                  </motion.p>
                </div>
                <motion.button
                  layoutId={`button-${card.title}-${id}`}
                  className="py-3 px-2 text-sm    w-fit  sm:w-28 md:w-fit font-condensed  !rounded-[8px] sm:!rounded-xl font-semibold sm:font-semibold bg-white hover:bg-purple   text-black mt-4 md:mt-0"
                >
                  {card.ctaText}
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="#000"
      stroke="#000"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Software Development Engineer",
    title: "PropertyGuru Group",
    imageStyle: "bg-white opacity-90",
    src: "https://raw.githubusercontent.com/harsh3468/pfimages/main/propertyguru%20group%20logo.png",
    ctaText: "Read More",
    ctaLink: "https://www.propertygurugroup.com/",
    time: "July-2023 - Present",
    content: () => {
      return (
        <p className="!text-lg">
          <p>📌Led the backend design & development of a highly scalable & robust
Homeowner Platform, launching it in Singapore, utilizing NestJS & GraphQL,
streamlining delivery of accurate property valuations & insights into nearby
transactions, onboarding 65,000+ users in two months, boosting revenue</p>
<p>📌Led AI initiatives with LLMs, OpenAI & Salesforce integration to transcribe
lead calls, assess intent, & enhance follow-ups, boosting efficiency by 40%</p>
<p>📌Developed an intelligent loan recommendation system using OpenAI & LLMs,
delivering personalized loan packages based on user inputs & preferences,
increasing user satisfaction by 50%</p>
<p>📌Designed and integrated Mortgage Monitoring, enabling 50,000+ users to
manage home loans and receive monthly valuation alerts, increasing
engagement by 60%</p>
<p>📌Architected the backend of a segmentation tool using BigQuery & Airflow to
strategically target over 40,000 users with personalized property data,
improving user experience, performance & scalability using Datadog for
monitoring & Docker for containerization</p>
<p>📌Developed Pre-Qualification Tool using React, NestJS & Salesforce APIs,
assessing loan eligibility and calculating maximum loan amounts for users,
increasing lead creation by 35% & high lead closures by the firm, through
automatic report generation</p>
<p>📌Designed & implemented a Salesforce deployment pipeline using GitHub
Actions and Docker, reducing manual deployment efforts by 95%</p>
        </p>
      );
    },
  },
  {
    description: "Application Engineer 2",
    title: "Amazon",
    imageStyle: "bg-white opacity-90",
    src: "https://raw.githubusercontent.com/harsh3468/pfimages/main/Amazon-Logo.png",
    ctaText: "Read More",
    ctaLink: "https://www.amazon.in/",
    time: "March-2022 - July-2023",
    content: () => {
      return (
        <p className="!text-lg">
<p>📌Developed a Java-based automation system for ASIN suppression and
reactivation, eliminating 100% of manual effort, integrated APIs across
multiple regions and streamlined status verification, ensuring seamless
management of Kindle product listings on Amazon.com </p>
<p>📌Engineered & migrated 500 million objects to S3 with batch operations and
dynamic data sync, reducing operating costs by 40% & enabling smoother
service control across teams.</p>
<p>📌Created a high performance Node.js automation service to process
large-scale user order data from cross regional Kindle internal APIs,
converting it to JSON format for seamless storage & processing, reducing
manual effort by 90%</p>
<p>📌Delivered an automated tool that sends regular email reports with ASIN
suppression status counts and lists, using DJS & Mailx, improving team
visibility & reducing manual oversight by 60%</p>
<p>📌Led package & AWS host upgrades for the Kindle environment, enhancing
application performance and scalability</p>       
        </p>
      );
    },
  },

  {
    description: "Product Engineering Trainee",
    title: "Ultragenic Research & Technologies",
    imageStyle: "bg-transparent",
    src: "https://raw.githubusercontent.com/harsh3468/pfimages/main/Ultragenic%20logo.jpeg",
    ctaText: "Read More",
    ctaLink: "https://ultragenicglobal.com/",
    time: "Sept-2021 to March-2022",
    content: () => {
      return (
        <p className="!text-lg">
<p>📌Delivered a comprehensive safety & clinical data analysis
 application which made data handling & analytics easier for PV
 domain clients
</p>
<p>📌Developed user interfaces with modern technologies like Angular,
 HTML5 & CSS3 & engineered RESTful web services to manipulate
 dynamic datasets
</p>
<p>📌Developed automations to generate multiple format JSON files for
 ETL jobs</p>
<p>📌Used Node.js to integrate multiple models with a PostgreSQL
 database & generated multi-functional API's</p>
<p>📌Reviewed code to validate structures, assess security & verify
 browser, device, & operating system compatibility</p>
        </p>
      );
    },
  },
];
