import Header from "../components/Header.jsx";
import { Accordion } from "flowbite-react";

export default function FAQ() {
    return<>
            <Header name={"FAQs"}></Header>
            <div id={"faq-section"}>
                <Accordion className={"m-20"}>
                    <Accordion.Panel>
                        <Accordion.Title>What is SWE?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Vestibulum quis neque nunc. Maecenas pharetra libero id efficitur gravida. Aenean risus enim, condimentum vela aliquams in, consequat nec lacus. Aenean faucibus venenatis aliquet. Sed nulla quam, vehicula ut libero molestie volu our as satpat quam. Phasellus semper vitae tellus sit amet scelerisque
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>How to browse this website?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Vestibulum quis neque nunc. Maecenas pharetra libero id efficitur gravida. Aenean risus enim, condimentum vela aliquams in, consequat nec lacus. Aenean faucibus venenatis aliquet. Sed nulla quam, vehicula ut libero molestie volu our as satpat quam. Phasellus semper vitae tellus sit amet scelerisque
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>What is our aim?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Vestibulum quis neque nunc. Maecenas pharetra libero id efficitur gravida. Aenean risus enim, condimentum vela aliquams in, consequat nec lacus. Aenean faucibus venenatis aliquet. Sed nulla quam, vehicula ut libero molestie volu our as satpat quam. Phasellus semper vitae tellus sit amet scelerisque
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>

    </>
}