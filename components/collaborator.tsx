import {Separator} from "./ui/separator";
import Image from "next/image";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "./ui/accordion";
import {Avatar, AvatarFallback, AvatarImage} from "./ui/avatar";
import {CalendarIcon} from "@radix-ui/react-icons";
import Link from "next/link";
import {Fragment} from "react";

export const Collaborators = [
  {
    "group": [
      {
        "id": "mila",
        "src": "/assets/images/pages/mila.png",
        "acc": [
          {
            "aid": "@Mila",
            "asrc": "/assets/images/pages/mila2.svg",
            "message":
              <p className="text-base">
                AwakeAI Inc. has been awarded the &quot; Startup Mila &quot; status by the Mila Startup Committee.
              </p>,
            "comment": "Admitted in Sep. 2023"
          }
        ]
      },
      {
        "id": "NEXT"
        , "src": "/assets/images/pages/next.png",
        "acc": [{
          "aid": "@Next36",
          "asrc": "/assets/images/portrait/lulan.png",
          "message":
            <p className="text-base">
              Lulan Shen, the founder and CEO of AwakeAI Inc, has
              graduated in the 2023 NEXT36 program and awarded CA$50k
              by the YFF Fund.
            </p>,
          "comment": "Participated in Summer 2023"
        }]
      },
      {
        "id": "McGill",
        "src": "/assets/images/pages/m1.png",
        "acc": [
          {
            "aid": "@Dobson Centre for Entrepreneurship",
            "asrc": "/assets/images/pages/dobson_logo.png",
            "message":
              <>
                <p className="text-base">
                  2023, Dobson Life Sciences Pitch Bootcamp <br/>
                  2022, Summer Dobson Entrepreneurship X1-Accelerator.{" "}
                  <br/>
                  2022, Dobson Entrepreneurship Programs Bootcamp and Cup{" "}
                  <br/>
                </p>
                <Link
                  href="https://www.mcgill.ca/dobson/article/mcgill-dobson-cup-2022-winners#hset"
                  className="hover:underline"
                >
                  <p className="text-base">
                    2022, Third Place in Health Science Enterprise Tracks{" "}
                    <br/>
                  </p>
                </Link>
              </>,
            "comment": "Last update 2023"
          },
          {
            "aid": "@Engine Center",
            "asrc": "/assets/images/pages/engine.jpg",
            "message":
              <p className="text-base">
                2022, TechAccel Showcase Winter <br/>
                2022, TechAccel Grant Grantees. <br/>
                2021, Invention to Impact Training program.
                <br/>
                2021, McGill-affiliated startup ventures: one of the
                approved and eligible team and participated in a startup
                internship program. <br/>
                2021, TechIdea Pitch Competition: 1st Place & Audience
                Favorite.
              </p>,
            "comment": "Last update 2023"
          }
        ]
      },
    ]
  }, {
    "group": [
      {
        "id": "centech",
        "src": "/assets/images/pages/centech.png",
        "acc": [
          {
            "aid": "@Centech",
            "asrc": "/assets/images/pages/centech.png",
            "message":
              <Link
                href="https://www.linkedin.com/feed/update/urn:li:activity:7063912444229734400/"
                className="hover:underline"
              >
                <p className="text-base">
                  AwakeAI Inc. has participated in winter 2023 Centech
                  Accelerator Cohort
                </p>
              </Link>,
            "comment": "Participated in Sep. 2023"
          }
        ]
      },
      {
        "id": "MEDTEQ",
        "src": "/assets/images/pages/medteq.png",
        "acc": [
          {
            "aid": "@MEDTEQ+",
            "asrc": "/assets/images/pages/medteq2.jpeg",
            "message":
              <p className="text-base">
                AwakeAI Inc. is a member of MEDTEQ+ community.
              </p>,
            "comment": "Joined in 2023"
          }
        ]
      },
      {
        "id": "BI",
        "src": "/assets/images/pages/eeconomie.png",
        "acc": [{
          "aid": "@BI",
          "asrc": "/assets/images/pages/eeconomie.png",
          "message":
            <p className="text-base">
              The committee has approved our application. A CA$46k
              grant will be awarded to us in 2023.
            </p>,
          "comment": "Last Update in 2023"
        }]
      }
    ]
  },
  {
    "group": [
      {
        "id": "microsoft",
        "src": "/assets/images/pages/ms2.png",
        "acc": [
          {
            "aid": "@Microsoft Founder Program",
            "asrc": "/assets/images/pages/m3.png",
            "message":
                <p className="text-base">
                  AwakeAI Inc. has participated in Microsoft Founders program.
                </p>,
            "comment": "Participated in Nov. 2022"
          }
        ]
      }
    ]
  }
]
const Collaborator = () => {
  return (
    <section id="partners">
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Partners
      </h2>
      <div className="ml-1 mx-auto md:gap-x-8 gap-y-20 md:gap-y-32 mb-32">
        <div className="space-y-1">
          <h4 className="text-lg font-medium leading-none">AwakeAI Inc.</h4>
          <p className="text-lg text-muted-foreground">
            Our collaborators and affiliates.
          </p>
        </div>
        <Separator className="my-4 mb-10"/>
        {Collaborators.map((col, j) => (
          <div
            className="mx-auto grid md:grid-flow-col auto-cols-min md:gap-x-8 lg:gap-x-8 sm:content-center justify-center md:justify-start" key={j}>
            {col.group.map((collaborator, index) => (
              <Fragment key={index}>
                <div className="md:grow mx-auto">
                  <Image
                    src={`${collaborator.src}`}
                    alt="logo"
                    style={{objectFit: "contain"}}
                    className="h-44 md:w-fit mx-auto w-64 dark:grayscale dark:invert"
                    width={250}
                    height={250}
                  />
                  <Accordion type="single" collapsible className="w-64 md:w-52 lg:w-96">
                    <AccordionItem value="item-2">
                      <AccordionTrigger></AccordionTrigger>
                      <AccordionContent>
                        {collaborator.acc.map((acc, i) => (
                          <div key={i}>
                            <div className="flex justify-between space-x-4">
                              <Avatar>
                                <AvatarImage className="dark:grayscale-[50%]" src={`${acc.asrc}`}/>
                                <AvatarFallback>{acc.aid}</AvatarFallback>
                              </Avatar>
                              <div className="space-y-1">
                                <h4 className="text-lg font-semibold">{acc.aid}</h4>
                                {acc.message}
                                <div className="flex items-center pt-2">
                                  <CalendarIcon className="mr-2 h-4 w-4 opacity-70"/>{" "}
                                  <span className="text-xs text-muted-foreground">
                                  {acc.comment}
                                </span>
                                </div>
                              </div>
                            </div>
                            {i != collaborator.acc.length - 1 &&
                              <Separator orientation="horizontal" className="mt-5 mb-5"/>}
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div>
                  {(index + 1) % 3 !== 0 && <Separator orientation="vertical"/>}
                </div>
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collaborator;
