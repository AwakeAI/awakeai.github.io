"use client";

import {FC, ReactNode, useEffect, useRef, useState} from "react";
import {Button, ButtonProps, Flex, Text, useColorMode, useToast} from "@chakra-ui/react";
import Reaptcha from "reaptcha";

const ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSdZtdBB7319mpu2QSSUQRzk0-KdIO4lbYPQvgw7w4veoGfMpw/formResponse";
const RECAPTCHA_SITEKEY = "6LfGZQMsAAAAALULQiSICMthSf4ot2PqPb2-yTxf";
const IFRAME_NAME = "hidden_iframe";

// Entry ids of the questions in the Google Form above.
export const FIELD = {
  name: "entry.1208597498",
  email: "entry.1569009990",
  subject: "entry.537245108",
  resume: "entry.1679365074",
  message: "entry.1889589232",
};

// Submits straight to Google Forms through a hidden iframe (the response is
// cross-origin, so success can't be read back). Submit unlocks after reCAPTCHA.
export const GoogleForm: FC<{
  children: ReactNode;
  onSent: () => void;
  submitVariant?: ButtonProps["variant"];
}> = ({children, onSent, submitVariant = "brand"}) => {
  const toast = useToast();
  const {colorMode} = useColorMode();
  const captchaRef = useRef<Reaptcha>(null);
  const [verified, setVerified] = useState(false);

  // The widget is re-created when the theme changes, which clears its state.
  useEffect(() => setVerified(false), [colorMode]);

  return (
    <form
      action={ACTION}
      target={IFRAME_NAME}
      onSubmit={() => {
        toast({status: "success", title: "Form submitted!", description: "Thank you, we will get back to you soon."});
        // Clear fields only after the browser has serialized the form data.
        setTimeout(() => {
          onSent();
          setVerified(false);
          captchaRef.current?.reset();
        }, 200);
      }}
    >
      {children}
      <Flex direction="column" alignItems="flex-start" gap="16px" mt="32px">
        <Reaptcha
          key={colorMode}
          ref={captchaRef}
          sitekey={RECAPTCHA_SITEKEY}
          theme={colorMode === "dark" ? "dark" : "light"}
          onVerify={() => setVerified(true)}
          onExpire={() => setVerified(false)}
        />
        <Flex alignItems="center" gap="16px" wrap="wrap">
          <Button type="submit" variant={submitVariant} size="lg" px="40px" isDisabled={!verified}>
            Submit
          </Button>
          {!verified ? (
            <Text fontSize="sm" opacity={0.8}>
              Complete the reCAPTCHA to enable submit.
            </Text>
          ) : null}
        </Flex>
      </Flex>
      <iframe name={IFRAME_NAME} title="Form submission" hidden/>
    </form>
  );
};
