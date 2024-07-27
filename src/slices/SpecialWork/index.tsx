import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

import { Content, createClient } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import WorkList from "./WorkList";

/**
 * Props for `SpecialWork`.
 */
export type SpecialWorkProps = SliceComponentProps<Content.SpecialWorkSlice>;

/**
 * Component for "SpecialWork" Slices.
 */
const SpecialWork = async ({
  slice,
}: SpecialWorkProps): Promise<JSX.Element> => {
  const client = createClient("ratnesh-portfolio-webapp");
  const projects = await client.getAllByType("project");

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size="lg" className="mt-16 text-center">
        {slice.primary.title}{" "}
      </Heading>
      <br />
      <h1 className="-mt-3 opacity-1 block w-full bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-center text-2xl font-bold uppercase tracking-[.1em] text-transparent md:text-4xl">
        {slice.primary.description}
      </h1>

      <WorkList projects={projects} />
    </Bounded>
  );
};

export default SpecialWork;
