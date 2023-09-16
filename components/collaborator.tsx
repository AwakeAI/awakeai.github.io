import {Separator} from "./ui/separator"
import type Post from '../interfaces/post'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "./ui/accordion";
import {Linkedin, Mail} from "react-feather";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./ui/avatar"
import {Button} from "./ui/button";
import {CalendarIcon} from "@radix-ui/react-icons";
import Link from "next/link";

type Props = {
  posts: Post[]
}

const Collaborator = () => {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Partners
      </h2>
      <div className="ml-1 mx-auto md:gap-x-8 lg:gap-x-8 gap-y-20 md:gap-y-32 mb-32">
        <div className="space-y-1">
          <h4 className="text-lg font-medium leading-none">AwakeAI Inc.</h4>
          <p className="text-lg text-muted-foreground">
            Our collaborators and affiliates.
          </p>
        </div>
        <Separator className="my-4 mb-10"/>
        <div className="grid md:grid-flow-col auto-cols-min md:gap-x-8 lg:gap-x-8 content-center">
          <div className="md:grow">
            <img src="/assets/images/pages/Mila.png"
                 alt="logo"
                 style={{objectFit: "contain"}}
                 className="h-44 w-fit mx-auto"
            />
            <Accordion type="single" collapsible className="w-96">
              <AccordionItem value="item-2">
                <AccordionTrigger></AccordionTrigger>
                <AccordionContent>
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="/assets/images/pages/mila-purple-v2.svg"/>
                      <AvatarFallback>Mila</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-lg font-semibold">@Mila</h4>
                      <p className="text-base">
                        AwakeAI Inc. has been awarded the "Startup Mila" status by the Mila Startup Committee.
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70"/>{" "}
                        <span className="text-xs text-muted-foreground">
                        Admitted in Sep. 2023
                      </span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Separator orientation="vertical"/>
          </div>
          <div className="md:grow">
            <img src="/assets/images/pages/M1.png"
                 alt="logo"
                 style={{objectFit: "contain"}}
                 className="h-44 w-fit mx-auto"
            />
            <Accordion type="single" collapsible className="w-96">
              <AccordionItem value="item-2">
                <AccordionTrigger></AccordionTrigger>
                <AccordionContent>
                  <div className="flex justify-between space-x-4 ">
                    <Avatar>
                      <AvatarImage src="/assets/images/pages/dobson_logo.png"/>
                      <AvatarFallback>Dobson</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-lg font-semibold">@Dobson Centre for Entrepreneurship</h4>
                      <p className="text-base">
                        2023, Dobson Life Sciences Pitch Bootcamp <br/>
                        2022, Summer Dobson Entrepreneurship X1-Accelerator. <br/>
                        2022, Dobson Entrepreneurship Programs Bootcamp and Cup <br/>
                      </p>
                      <Link href="https://www.mcgill.ca/dobson/article/mcgill-dobson-cup-2022-winners#hset"
                            className="hover:underline"
                      >
                        <p className="text-base">
                          2022, Third Place in Health Science Enterprise Tracks <br/>
                        </p>
                      </Link>
                      <div className="flex items-center pt-2 ">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70"/>{" "}
                        <span className="text-xs text-muted-foreground">
                        Last update 2023
                      </span>
                      </div>
                    </div>
                  </div>
                  <Separator orientation="horizontal" className="mt-5 mb-5"/>
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="/assets/images/pages/engine.jpg"/>
                      <AvatarFallback>Engine</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-lg font-semibold">@Engine Center</h4>
                      <p className="text-base">
                        2022, TechAccel Showcase Winter <br/>
                        2022, TechAccel Grant Grantees. <br/>
                        2021, Invention to Impact Training program.
                        <br/>
                        2021, McGill-affiliated startup ventures: one of the approved and
                        eligible team and participated in a startup internship program.{" "}
                        <br/>
                        2021, TechIdea Pitch Competition: 1st Place & Audience Favorite.
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70"/>{" "}
                        <span className="text-xs text-muted-foreground">
                        Last Update 2022
                      </span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Separator orientation="vertical"/>
          </div>
          <div className="md:grow">
            <img src="/assets/images/pages/next.png"
                 alt="logo"
                 style={{objectFit: "contain"}}
                 className="h-44 w-fit mx-auto"
            />
            <Accordion type="single" collapsible className="w-96">
              <AccordionItem value="item-2">
                <AccordionTrigger></AccordionTrigger>
                <AccordionContent>
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="/assets/images/portrait/Lulan.png"/>
                      <AvatarFallback>NEXT Canada</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-lg font-semibold">@Next36</h4>
                      <p className="text-base">
                        Lulan Shen, the founder and CEO of AwakeAI Inc, has graduated in the 2023 NEXT36 program and
                        awarded CA$50k by the YFF Fund.
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70"/>{" "}
                        <span className="text-xs text-muted-foreground">
                        Participated in Summer 2023
                      </span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="grid md:grid-flow-col auto-cols-min md:gap-x-8 lg:gap-x-8 content-center">
          <div className="md:grow">
            <img src="/assets/images/pages/centech.png"
                 alt="logo"
                 style={{objectFit: "contain"}}
                 className="h-44 w-fit mx-auto"
            />
            <Accordion type="single" collapsible className="w-96">
              <AccordionItem value="item-2">
                <AccordionTrigger></AccordionTrigger>
                <AccordionContent>
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="/assets/images/pages/centech.png"/>
                      <AvatarFallback>Mila</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-lg font-semibold">@Centech</h4>
                      <Link href="https://www.linkedin.com/feed/update/urn:li:activity:7063912444229734400/"
                            className="hover:underline">
                        <p className="text-base">AwakeAI Inc. has participated in winter 2023 Centech Accelerator
                          Cohort</p>
                      </Link>
                      <div className="flex items-center pt-2">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70"/>{" "}
                        <span className="text-xs text-muted-foreground">
                        Admitted in Sep. 2023
                      </span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Separator orientation="vertical"/>
          </div>
          <div className="md:grow">
            <img src="/assets/images/pages/08_MEDTEQ.png"
                 alt="logo"
                 style={{objectFit: "contain"}}
                 className="h-44 w-96 mx-auto"
            />
            <Accordion type="single" collapsible className="w-96">
            </Accordion>
          </div>
          <div>
            <Separator orientation="vertical"/>
          </div>
          <div className="md:grow">
            <img src="/assets/images/pages/eeconomie.png"
                 alt="logo"
                 style={{objectFit: "contain"}}
                 className="h-44 w-fit mx-auto"
            />
            <Accordion type="single" collapsible className="w-96">
              <AccordionItem value="item-2">
                <AccordionTrigger></AccordionTrigger>
                <AccordionContent>
                  <div className="flex justify-between space-x-4 ">
                    <Avatar>
                      <AvatarFallback>BI</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-lg font-semibold">@Bon Incubation</h4>
                      <p className="text-base">
                        The committee has approved our application. A CA$60k grant will be awarded to us in 2023.
                      </p>
                      <div className="flex items-center pt-2 ">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70"/>{" "}
                        <span className="text-xs text-muted-foreground">
                        Last update 2023
                      </span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Collaborator
