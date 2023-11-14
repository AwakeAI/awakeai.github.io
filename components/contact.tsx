"use client";
import {Separator} from "./ui/separator";
import {useState} from "react";
import {Button} from "./ui/button";
import {Input} from "./ui/input";
import { useToast } from "./ui/use-toast";
import { ToastAction  } from "./ui/toast";
import {Label} from "./ui/label";
import {Textarea} from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Image from "next/image";
import Reaptcha from "reaptcha";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [verified, setVerified] = useState(false);
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");
  const { toast } = useToast()

  const handleVerify = (recaptchaResponse) => {
      setVerified(true);
  };
  return (
    <section id="contact">
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          Contact
      </h2>
      <div className="ml-1 mx-auto md:gap-x-8 gap-y-20 md:gap-y-32 mb-32">
        <div className="space-y-1">
          <h4 className="text-lg font-medium leading-none">with AwakeAI Inc.</h4>
          <p className="text-lg text-muted-foreground">Stay Tuned!</p>
        </div>
        <Separator className="my-4 mb-10" />
        <div className="ml-2 mt-16 grid md:grid-flow-col md:gap-x-8 lg:gap-x-8">
          <form
              name="gform"
              id="gform"
              encType="text/plain"
              action="https://docs.google.com/forms/d/e/1FAIpQLSdZtdBB7319mpu2QSSUQRzk0-KdIO4lbYPQvgw7w4veoGfMpw/formResponse?"
              target="hidden_iframe"
              onSubmit={(e) => {
                  setSubmitted(true);
                  toast({
                    title: "Form submitted!",
                    description: "This form has been sent successfully.",
                    action: <ToastAction onClick={()=>{
                        setSubmitted(false);
                        setName("");
                        setEmail("");
                        setMessage("");
                        setSubject("");
                        setFile("");
                    }} altText="close">Dismiss</ToastAction>,
                  });
              }}
          >
            <div className="grid md:grid-flow-col max-w-lg md:gap-x-8 lg:gap-x-8 mb-10">
              <div>
                <Label htmlFor="picture">Name</Label>
                <Input id="name" type="text" name="entry.1208597498" required placeholder="Name" value={name}
                       onChange={(e) => setName(e.target.value)}/>
              </div>
              <div>
                <Label htmlFor="picture">Email</Label>
                <Input id="email" type="email" name="entry.1569009990" required  placeholder="Email Address" value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
              </div>
            </div>
            <div className="grid w-full max-w-lg items-center gap-1.5 mb-10">
              <div>
                <Label htmlFor="picture">Subject</Label>
                <Input id="subject" type="text" name="entry.537245108" required style={{display: "none"}} disabled value={subject}/>
                <Select onValueChange={(value) => setSubject(value)} value={subject}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="demo">Request a Demo!</SelectItem>
                    <SelectItem value="adapter">Become an early adapter!</SelectItem>
                    <SelectItem value="job">Ask for a job opportunity!</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid w-full max-w-lg items-center gap-1.5 mb-10"
                 style={{display: `${subject==='job'? "block":"none"}`}}>
              <div>
                <Label htmlFor="picture">Please provide a link to your resume/CV.</Label>
                <Input id="file" type="text" name="entry.1679365074" placeholder="link" value={file}
                       onChange={(e) => setFile(e.target.value)}/>
                <p className=" text-sm text-muted-foreground">
                  You can create a shared pdf file in either Google Drive/Dropbox/OneDrive, then share that link here.
                </p>
              </div>
            </div>
            <div className="grid w-full max-w-lg items-center gap-1.5 mb-10">
              <Label htmlFor="message">Your message</Label>
              <Textarea placeholder="Type your message here." id="message" name="entry.1889589232"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}/>
            </div>

            <div className="grid md:grid-flow-col auto-cols-max md:gap-x-8 lg:gap-x-8 max-w-lg mb-10">
                <Button
                    color="primary"
                    type="submit"
                    value="Submit"
                    disabled={!verified}
                >
                    Submit
                </Button>
                <Reaptcha
                    sitekey="6LcIAC0lAAAAACWBqpIMyHTRUti8cQeLLxx1mVK7"
                    onVerify={handleVerify}
                />
            </div>
            <iframe
                name="hidden_iframe"
                id="hidden_iframe"
                style={{ display: "none" }}
                onLoad={() => !submitted}
            ></iframe>
          </form>
          <div className="mx-auto">
            <Separator orientation="vertical"/>
          </div>
          <div>
            <div className="md:col-span-1 md:h-24 md:w-fit dark:w-full dark:col-span-4 mb-10 md:mb-0 dark:invisible dark:mb-0 dark:h-0">
              <Image
                src="/assets/images/pages/contact.webp"
                style={{objectFit: "contain"}}
                alt="contact"
                className="mx-auto flex-col md:mt-4"
                width={400}
                height={400}
              />
            </div>
            <div className="md:col-span-1 md:h-24 md:w-fit dark:w-full dark:col-span-4 mb-10 md:mb-0 dark:visible invisible light:w-0">
              <Image
                src="/assets/images/pages/0_1_dark.png"
                style={{objectFit: "contain"}}
                alt="contact"
                className="mx-auto flex-col md:mt-4"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
