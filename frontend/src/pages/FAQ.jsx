import Header from "../components/Header.jsx";
import { Accordion } from "flowbite-react";

export default function FAQ() {
    return<>
            <Header name={"FAQs"}></Header>
            <div  className="flex-grow" id={"faq-section"}>
                <Accordion className={"m-20"}>
                    <Accordion.Panel>
                        <Accordion.Title>What is AlumConnect?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                AlumConnect is a platform that enables alumni to reconnect, network, and share updates with current students and other alumni. It’s designed to foster connections, mentoring opportunities, and career growth.                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>Who can join AlumConnect? </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                AlumConnect is open to verified alumni and current students of MCA branch of NITK. Each account is verified to ensure the network remains exclusive to our community.    </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>How do I sign up and create an account?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                You can sign up using your email address. During registration, you’ll be asked to provide a profile picture, background information, and other details to complete your profile.                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>Is my information secure? </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Yes, we prioritize your privacy and use Firebase for secure data storage. All communications and personal data are encrypted, and only verified alumni and students have access to the platform.                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>How can I update or edit my profile? </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                You can edit your profile at any time by going to the Account Settings page. Here, you can update your personal information, work history, and other details.           </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>

    </>
}