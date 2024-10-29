// ACCORDION
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

export default function Faqs() {
  return (
    <Accordion allowZeroExpanded>
      {/* Q1 */}
      <AccordionItem className="mb-6">
        <AccordionItemHeading>
          <AccordionItemButton>
            <h2 className="font-bold text-white text-base">
              Why does working with a design agency cost more than using a
              website builder?
            </h2>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="text-black text-md">
            <strong className="text-green">Answer:</strong> Unlike website
            builders, a design agency offers a team of experienced professionals
            who tailor every detail of your site to reflect your brand identity,
            user experience goals, and business needs. This process involves
            in-depth strategy sessions, custom designs, quality content
            creation, SEO optimization, and robust technical support—all of
            which contribute to the higher cost but provide lasting value and a
            unique online presence.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      {/* Q2 */}
      <AccordionItem className="mb-6">
        <AccordionItemHeading>
          <AccordionItemButton>
            <h2 className="font-bold text-white text-base">
              What added value do I get by investing in a design agency instead
              of using a DIY website builder?
            </h2>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="text-black text-md">
            <strong className="text-green">Answer:</strong> Design agencies
            bring a high level of customization, design precision, and brand
            strategy that website builders cannot achieve. They focus on
            creating a site that not only looks great but also meets business
            goals, integrates seamlessly with other platforms, and provides a
            scalable foundation for future growth. The investment in a unique
            and high-performing site can result in stronger brand trust, better
            conversion rates, and improved search engine visibility.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      {/* Q3 */}
      <AccordionItem className="mb-6">
        <AccordionItemHeading>
          <AccordionItemButton>
            <h2 className="font-bold text-white text-base">
              Can a website builder deliver the same results as a design agency
              for my business?
            </h2>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="text-black text-md">
            <strong className="text-green">Answer:</strong> While website
            builders are a budget-friendly solution and work well for simple
            websites, they can lack the flexibility, functionality, and depth of
            customization a business may need to stand out. Design agencies
            provide a more strategic approach, considering how each design and
            functional decision impacts your brand, user engagement, and
            conversions, which often leads to better long-term results.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      {/* Q4 */}
      <AccordionItem className="mb-6">
        <AccordionItemHeading>
          <AccordionItemButton>
            <h2 className="font-bold text-white text-base">
              What long-term benefits can I expect from investing in a
              professional design agency?
            </h2>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="text-black text-md">
            <strong className="text-green">Answer:</strong> An agency-developed
            website is built with scalability, SEO, and adaptability in mind,
            ensuring your site can grow with your business and remain current in
            the face of changing design trends and technology. The long-term
            benefits include stronger brand credibility, higher user engagement,
            and a site that&apos;s easier to update and maintain—making it a
            valuable asset to your business well beyond the initial launch.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
