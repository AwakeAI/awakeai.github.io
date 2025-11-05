"use client";

import {Box, Center, Divider, Flex, Heading, Text, List, ListItem, useColorModeValue} from "@chakra-ui/react";
import { Subscribe } from "@/app/(normal)/home/Subscribe";
import Image from "next/image";
import React from "react";

export default function Page() {
  const color = useColorModeValue("Black", "gray.200");
  return (
    <Flex w="100%" direction="column">
      <Center
        w="100%"
        pos="relative"
        sx={{
          ".img": {
            width: "100%",
            height: ["400px", "800px"],
            objectFit: "cover",
          },
        }}
      >
        <Image className="img" src="/images/cover.png" alt="about_1_bg" draggable={false} width={1440} height={601} />
      </Center>
      <Center w="100%" pos="relative">
        <Flex
          pos="relative"
          direction="column"
          zIndex={2}
          w="100%"
          h="100%"
          maxW="1440px"
          px={{base: "20px", lg: "130px"}}
          pt={{base: "56px", lg: "24px"}}
          pb={{base: "54px", lg: "76px"}}
          justifyContent="center"
          alignItems={{base: "flex-start", lg: "center"}}
        >
          <Text
            fontSize={{ base: "12px", lg: "14px" }}
            lineHeight={{ base: "18px", lg: "21px" }}
            fontWeight={500}
            textTransform="uppercase"
          >
            Version 1.0: 24.07.17
          </Text>
          <Text
            fontSize={{base: "26px", lg: "64px"}}
            lineHeight={{base: "31px", lg: "77px"}}
            mb={{base: "24px", lg: "34px"}}
            fontWeight={700}
            textAlign="center"
          >
            Privacy Policy and Terms & Conditions
          </Text>

          <Box>
            <Text fontSize="16px" lineHeight="24px" fontWeight={300} textAlign="justify">
              Thank you for visiting the AwakeAI website and reviewing our Privacy Policy and Terms & Conditions
              (hereinafter the {'"'}Policy{'"'}).
              <br/><br/>
              By browsing our website or using our systems or services, you acknowledge that you have read and
              understood this Policy and consent to the processing of your data and personal information in accordance
              with it, as applicable.
              <br/><br/>
              AwakeAI{"'"}s Privacy Policy describes our approach to privacy and the management of personal data. Key
              points include:
              <br/><br/>
            </Text>
            <List spacing={3}>
              <ListItem>
                <strong>Objectives:</strong> Respect for privacy and protection of personal data in accordance with the law.
              </ListItem>
              <ListItem>
                <strong>Consent:</strong> Requirement of explicit or implicit consent for the collection of personal data.
              </ListItem>
              <ListItem>
                <strong>Collection Purposes:</strong> Provision of services, improvement and development of new products, personalized offers, performance evaluation, legal obligations, and security.
              </ListItem>
              <ListItem>
                <strong>Personal Information Collected:</strong> Varies depending on the interaction context, with special attention to sensitive data.
              </ListItem>
              <ListItem>
                <strong>Data Usage:</strong> Operation and improvement of services,
                customer support, security, and legal compliance.
              </ListItem>
              <ListItem>
                <strong>Access and Control:</strong> Rights to verify and correct personal data, with security measures for data protection.
              </ListItem>
              <ListItem>
                <strong>Cookies and Similar Technologies:</strong> Used for website functionality and improved user experience.
              </ListItem>
              <ListItem>
                <strong>Data Retention:</strong> Period varies based on the nature and
                utility of the data, with security measures during retention.
              </ListItem>
              <ListItem>
                <strong>Data Residency:</strong> Information on hosting and accessing customer data.
              </ListItem>
              <ListItem>
                <strong>Policy Changes:</strong> Updates communicated, with archived versions accessible.
              </ListItem>
              <ListItem>
                <strong>Customer Responsibility:</strong> Compliance with regulations for notice, disclosure, and consent prior to data transfer to AwakeAI.
              </ListItem>
            </List>

            <Divider my="4" />

            <Center w="100%" pos="relative">
              <Flex
                pos="relative"
                zIndex={2}
                w="100%"
                h="100%"
                maxW="1440px"
                gap={{base: "30px", lg: "40px"}}
                direction={{base: "column", lg: "row"}}
              >
                <Flex direction="column" alignItems={{base: "flex-start", lg: "center"}} gap="10px" width={{base: "100%", lg:"33%"}}>
                  <Heading as="h2" size="lg" mb="4">
                    Objectives
                  </Heading>
                  <Text fontSize="16px" lineHeight="24px" fontWeight={300} textAlign="justify">
                    Respect for privacy and protection of personal data in accordance with the law.<br/><br/>
                    Privacy respect and the protection of personal information are essential to us. Through this Policy, we
                    aim to protect them in accordance with applicable laws.
                    <br/><br/>
                    To ensure this protection, AwakeAI commits to collect, process, and share information that can identify an
                    individual only when the individual has consented unless permitted or required by law, in which case your
                    consent will not be necessary.
                    <br/><br/>
                    The Policy aims to inform users of the reasons and how AwakeAI, or anyone acting on its behalf, will
                    collect and use their personal information. It is designed to be in clear language to ensure informed
                    consent from users.
                    <br/><br/>
                    For the purposes of this Policy, {'"'}personal information{'"'} refers to any information about an identifiable
                    person. To the extent possible, we will anonymize, pseudonymize, and/or aggregate this information so that
                    it no longer identifies a person.
                    <br/><br/>
                  </Text>
                  <Divider my="4" />
                  <Heading as="h2" size="lg" mb="4">
                    Personal Information Collected
                  </Heading>
                  <Text fontSize="16px" lineHeight="24px" fontWeight={300} textAlign="justify">
                    Varies depending on the interaction context, with special attention to sensitive data.
                    <br/><br/>
                    AwakeAI may collect personal information in various forms but will do so only through lawful means
                    and for purposes that have been disclosed to you, as described in this Policy, or as permitted or
                    required by law.
                    <br/><br/>
                    The personal information collected, as well as its sensitivity, may vary depending on the context of
                    the interactions between you and AwakeAI. Therefore, it is our priority to inform you about the
                    nature of the personal information we use.
                    <br/><br/>
                    We protect all collected personal information. Among the personal information that may be collected
                    and used, we pay particular attention to:
                    <List spacing={3} textAlign="justify">
                      <ListItem>
                        • Name and Contact Information: First and last name, email address, postal address, phone
                        number, and other similar data used for communication with you.
                      </ListItem>
                      <ListItem>
                        • Identity Verification: Passwords, password hints, and other security information used to
                        identify you and access your account.
                      </ListItem>
                      <ListItem>
                        • Demographic Data: Information about you, such as your age, gender, country, and language of
                        communication.
                      </ListItem>
                      <ListItem>
                        • Images and Sounds: Audiovisual data to ensure the security of our users, especially at
                        cultural events for which we are organizers or hosts.
                      </ListItem>
                      <ListItem>
                        • Interactions: Data related to your use of websites, platforms, and created tools. These are
                        data you provide to use the products. In other cases, such as error reports, these are data we
                        generate.
                      </ListItem>
                    </List>
                    Other examples of interaction data we collect include:
                    <List spacing={3} textAlign="justify">
                      <ListItem>
                        • Site Visits and Usage Data
                      </ListItem>
                      <ListItem>
                        • Troubleshooting and Help Data: Data you provide when contacting AwakeAI for help, including the
                        products you use and other information that helps us resolve your issue.
                      </ListItem>
                      <ListItem>
                        • Searches and Commands: Search queries and commands you use when using our website.
                      </ListItem>
                      <ListItem>
                        • Textual, Input, and Handwriting Data: Textual, input, and handwriting input data, as well as any
                        related information.
                      </ListItem>
                      <ListItem>
                        • Location Data: Data, whether precise or not, about the location of your device. For example,
                        location data may be collected from the IP address of a device or data from your account profile
                        indicating less precise location information, such as the name of a city or postal code.
                      </ListItem>
                      <ListItem>
                        • Other Data: Other data provided when using our website, including data from Google Analytics.
                      </ListItem>
                    </List>
                  </Text>
                  <Divider my="4" />
                </Flex>

                <Box w="100%" h="1px" bg={color} display={{base: "block", lg: "none"}}></Box>

                <Flex direction="column" alignItems={{base: "flex-start", lg: "center"}} gap="10px" width={{base: "100%", lg:"33%"}}>
                  <Heading as="h2" size="lg" mb="4">
                    Consent
                  </Heading>
                  <Text fontSize="16px" lineHeight="24px" fontWeight={300} textAlign="justify">
                    Need for explicit or implicit consent for the collection of personal data. Methods of obtaining consent.
                    <br/><br/>
                    We commit to obtaining consent before collecting an individual{"'"}s personal information. Consent can be
                    explicit or implicit and may be provided directly by the person or by their authorized representative.
                    <br/><br/>
                    We prioritize obtaining explicit consent, whether verbally, electronically, or in writing. However,
                    implicit consent can reasonably be inferred from a person{"'"}s action or inaction. For example, providing a
                    name and address to receive a publication or a name and phone number to get a response to a question is
                    considered implicit consent to the collection of information containing personal information. To determine
                    the appropriate type of consent, we consider the sensitivity of the personal information involved, the
                    purposes for which it is collected, and the reasonable expectations of a person in a similar situation.
                    If we want to use personal information for a new purpose, we will describe the intended use and seek
                    consent again.
                    <br/><br/>
                    It is not always possible, especially in the context of a request from the government, to obtain a
                    person{"'"}s consent to collect, use, or disclose their personal information. We commit to never disclose this
                    type of information except in accordance with this Policy, unless required or permitted by law.
                  </Text>
                  <Text fontSize="16px" lineHeight="24px" fontWeight={300} textAlign="justify">
                    Customer Responsibility:
                    Our Customers are responsible for complying with any regulations or laws that require providing notice, disclosure, and/or obtaining consent prior to transferring the Personal Data to AwakeAI and its software platform.
                  </Text>
                  <Divider my="4" />
                  <Heading as="h2" size="lg" mb="4">
                    Access and Control
                  </Heading>
                  <Text fontSize="16px" lineHeight="24px" fontWeight={300} textAlign="justify">
                    Rights to verify and correct personal data, with security measures for data protection.<br/><br/>
                    AwakeAI ensures that all personal information in its possession is as accurate, current, and
                    complete as necessary for the purposes for which it is used.<br/><br/>
                    You have the right to request access to your personal information for verification purposes and to
                    request correction if it is inaccurate. If you believe that your personal information is inaccurate
                    or if you want access to your personal information, you can make a request using the contact
                    information provided at the end of this Policy.<br/><br/>
                    To the best of our ability, we will provide you with timely access to your personal information.
                    However, for security reasons, we may need to verify your identity.<br/><br/>
                    Moreover, there may be circumstances where we cannot provide you with access to your personal
                    information. In particular, when access may lead to the disclosure of another person{"'"}s personal
                    information and that person refuses to consent to such disclosure or when legal restrictions apply.
                    If such a situation arises, we will inform you of the reason why we cannot provide you with access
                    to your personal information.<br/><br/>
                    If your request concerns data appearing on third-party websites or platforms, please contact these
                    third parties directly.
                  </Text>
                  <Divider my="4" />
                </Flex>

                <Box w="100%" h="1px" bg={color} display={{base: "block", lg: "none"}}></Box>

                <Flex direction="column" alignItems={{base: "flex-start", lg: "center"}} gap="10px" width={{base: "100%", lg:"33%"}}>
                  <Heading as="h2" size="lg" mb="4">
                    Collection Purposes
                  </Heading>
                  <Text fontSize="16px" lineHeight="24px" fontWeight={300} textAlign="justify">
                    Provision of services, improvement and development of new products, personalized offers, performance
                    evaluation, legal obligations, and security.
                    <br/><br/>
                    The information collected is in accordance with the purposes and objectives set out in this privacy
                    policy.
                    <br/><br/>
                    Here are some reasons why we collect your personal information:
                  </Text>
                  <List spacing={3} textAlign="justify">
                    <ListItem>
                      •	To Provide Products and Services: We will collect and process the data and information necessary to fulfill our mission and contractual obligations.
                    </ListItem>
                    <ListItem>
                      •	To Ensure and Improve These Products and Services: Data collected during your interactions with our services may be used to analyze and improve the operation of our products and services.
                    </ListItem>
                    <ListItem>
                      •	To Develop New Products and Services: The collected data may be used in a research and development framework to propose new products and services to our users, including through advertisements and marketing messages. In addition, collected and aggregated data may be processed by algorithms using artificial intelligence.
                    </ListItem>
                    <ListItem>
                      •	To Offer Personalized Products and Services: The collection and analysis of data generated by your interactions with our services allow us to develop and create products and services that are relevant to always better meet your cultural and entertainment expectations, including anticipating adaptation measures for clients requiring them.
                    </ListItem>
                    <ListItem>
                      •	To Evaluate the Performance of Products and Services: Data is collected to have information about the benefits as well as the drawbacks of our products and services to evaluate and resolve them if necessary, including through surveys. This allows us to ensure the quality of our products and services and promote risk management.
                    </ListItem>
                    <ListItem>
                      •	To Protect the Privacy of Our Users: The collected data allows us to verify identity and protect the privacy of people communicating with us by phone, electronically, or otherwise.
                    </ListItem>
                    <ListItem>
                      •  To Satisfy Legal Obligations: Data is collected to meet obligations arising from laws, regulations, or international treaties.
                    </ListItem>
                  </List>
                  <Divider my="4" />
                  <Heading as="h2" size="lg" mb="4">
                    Cookies and Similar Technologies
                  </Heading>
                  <Text fontSize="16px" lineHeight="24px" fontWeight={300} textAlign="justify">
                    Used for website functionality and improved user experience. <br/><br/>
                    AwakeAI may use cookies, internet tags, invisible pixels, log files, or other technologies to
                    collect certain personal information about visitors to our websites, as well as recipients of our
                    newsletters, invitations, and other communications. Cookies are pieces of information transmitted by
                    the server to the browser during a visit to the website and uniquely identify the ongoing
                    connection. This data may include information such as your Internet address (IP), browser type,
                    browser version, pages on our site that you visit, the time and date of your visit, the length of
                    your visit, and any other statistics. <br/><br/>
                    The cookies used serve, among other things, to track the search history related to the session to
                    facilitate the user{"'"}s online browsing experience. It is important to know that enabling the
                    cookie option may, depending on the chosen configuration, allow other servers to install cookies on
                    your system. You can set your browser settings to inform you of the presence of cookies, allowing
                    you to accept or reject them.<br/><br/>
                    Please note that our website may contain links or references to third-party websites. This policy
                    ceases to apply upon leaving our website, and AwakeAI is not responsible for the collection or
                    processing of personal information by these third parties or through these external sources.
                  </Text>
                  <Divider my="4" />
                </Flex>

              </Flex>
            </Center>
            <Heading as="h2" size="lg" mb="4">
              Use of Data
            </Heading>
            <Text fontSize="16px" lineHeight="24px" fontWeight={300} textAlign="justify">
              Operation and Improvement of Services, Customer Support, Security, and Legal Compliance.
              <List spacing={3} textAlign="justify">
                <ListItem>
                  •	Providing Products and Services: Data is used to operate products and services and provide users with rich and interactive experiences.
                </ListItem>
                <ListItem>
                  •	Product and/or Service Improvement: Data is employed to enhance products, including the addition of new features or capabilities (such as error reporting when purchasing a ticket or consulting an online program).
                </ListItem>
                <ListItem>
                  •	Product and/or Service Development: Data is utilized in the development of new products. For instance, personal information is anonymized or pseudonymized to better understand customer needs.
                </ListItem>
                <ListItem>
                  •	Customer Support: Data is used to diagnose and resolve issues related to products and services, restore access to personal accounts, and provide other support and assistance services.
                </ListItem>
                <ListItem>
                  •	Contributing to Security and Issue Resolution: Data contributes to securing and resolving issues with products and services. This includes ensuring the security of services, detecting malicious programs and activities, addressing performance and compatibility issues, and informing customers of product and service updates. Automated systems may be used to detect security issues.
                </ListItem>
                <ListItem>
                  •	Security: Data is employed to protect the security of products and customers. Security features may prevent the operation of malicious software, inform users of malware detection on their devices, or use video surveillance to ensure public safety during events.
                </ListItem>
                <ListItem>
                  •	Reporting and Business Operations: Data is analyzed to understand operations and improve decision-making processes. This enables informed decision-making and reporting on business performance.
                </ListItem>
                <ListItem>
                  •	Protection of Rights and Property: Data is used to detect and prevent fraud, resolve disputes, enforce contracts, and protect property. Automated processes may be used to prevent activities that violate rights.
                </ListItem>
                <ListItem>
                  •	Legal Compliance: Data is processed to comply with the law. For example, age information is used to ensure compliance with privacy obligations for children or to verify that customers meet the recommended age for the audience. Contact details and identifiers may be processed to assist customers in exercising their data protection rights.
                </ListItem>
                <ListItem>
                  •	Research: Data is used for research, including scientific and public interest purposes, where permitted by law.
                </ListItem>
              </List>
                  AwakeAI places the utmost importance on the security of personal information and commits to processing it according to industry standards, solely for the purposes for which it is collected, as described in this policy or in specific notices. However, absolute safeguarding of this information is impossible due to inherent security limits in Internet transmission. Therefore, information transmitted to us is ultimately at the user{"'"}s own risk.
            </Text>
            <Divider my="4" />

            <Heading as="h2" size="lg" mb="4">
              Sharing with Third Parties
            </Heading>
            <Text fontSize="16px" lineHeight="24px" fontWeight={300} textAlign="justify">
              Under specific conditions and with consent, including for cloud storage and processing.
              We do not share your personal information with companies, organizations, or individuals outside of AwakeAI, except for our authorized suppliers and partners who need access to the information for the purposes listed in this policy and within its limits, and in the following cases:
              •	With Your Consent.
              •	For Cloud Server Storage: In this case, personal information may transit through third-party jurisdictions. Note that we only retain the services of reputable companies with privacy policies.
              •	For External Processing Needs: We transmit personal information to other trusted companies or individuals who process it on our behalf, according to our instructions, in accordance with this privacy policy, with a degree of data security at least equivalent to ours, and in compliance with any other appropriate security and confidentiality measures.
              •	For Legal Reasons: We transmit personal information outside our company if access to it is necessary to comply with current laws and regulations.
              AwakeAI undertakes not to sell or rent your personal information to a third party.
            </Text>
            <Divider my="4" />



            <Heading as="h2" size="lg" mb="4">
              Data Retention
            </Heading>
            <Text fontSize="16px" lineHeight="24px" fontWeight={300} textAlign="justify">
              The period varies based on the nature and utility of the data, with security measures during retention.
              AwakeAI retains the collected data for different periods, depending on their nature and utility in offering our products and services. During the retention period, AwakeAI takes physical and technical measures to ensure the security of data containing personal information.
              Once the retention period has expired, personal information is destroyed. Only statistics or reports containing depersonalized and anonymized data may be kept for extended periods.
            </Text>
            <Divider my="4" />

            <Heading as="h2" size="lg" mb="4">
              Data Residency
            </Heading>
            <Text fontSize="16px" lineHeight="24px" fontWeight={300} textAlign="justify">
              Unless otherwise specified, AwakeAI hosts each Customer’s production database in the Customer’s country of residence. AwakeAI may provide certain support Services from its headquarters in Canada, and in such cases, AwakeAI may access a Customer’s data from Canada for purposes of, for example: responding to support requests; fixing software issues; or, providing services to a Customer that can only be performed on the “back end” of our software platform (e.g., correcting errors in specified Customer Data, adding/removing a Customer’s data in the event of a purchase/sale/change in management, or performing simulation testing of our disaster recovery plans).             </Text>
            <Divider my="4" />

            <Heading as="h2" size="lg" mb="4">
              Policy Changes
            </Heading>
            <Text fontSize="16px" lineHeight="24px" fontWeight={300} textAlign="justify">
              Updates communicated, with archived versions accessible.
              Changes to these rules:
              We make changes to this Privacy Policy from time to time. Any reduction of your rights under this Privacy Policy cannot be applied without your explicit consent. We always indicate the date of the last modifications and allow you to access archived versions for consultation. If the changes are significant, we publish a highlighted notice on our website (including, for some services, through email notification).
            </Text>
            <Divider my="4" />

            <Text mt="8" fontSize="sm" color="gray.500">
              For any questions, comments, or complaints about this policy, or to manage your consent you can contact us at  privacy@awakeai.org.
            </Text>
          </Box>
        </Flex>
      </Center>
      <Subscribe />
    </Flex>
  );
}
