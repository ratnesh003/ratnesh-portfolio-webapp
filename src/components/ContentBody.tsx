import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content, DateField, isFilled } from "@prismicio/client";
import Image from "next/image";
import { PrismicNextLink } from "@prismicio/next";
import { MdArrowOutward, MdOutlineErrorOutline } from "react-icons/md";

export default function ContentBody({
  page,
}: {
  page: Content.BlogPostDocument | Content.ProjectDocument;
}) {
  function formatedDate(date: DateField) {
    if (isFilled.date(date)) {
      const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      return new Intl.DateTimeFormat("en-US", dateOptions).format(
        new Date(date),
      );
    }
  }

  const formattedDate = formatedDate(page.data.date);

  return (
    <Bounded as="article">
      <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
        <Heading as="h1">{page.data.title}</Heading>
        <div className="flex gap-3 text-xs font-bold text-yellow-400">
          {page.tags.map((tag) => (
            <span
              key={tag}
              className="mt-1 rounded-md bg-amber-50 bg-opacity-25 px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-between border-b border-slate-600 text-xl font-medium text-slate-300">
          <p>{formattedDate}</p>
          <div>
            {page.type === "project" && (
              <div className="flex items-center justify-between gap-6">
                <PrismicNextLink field={page.data.github_link ?? ""}>
                  <Image
                    className="mb-2"
                    width={30}
                    height={30}
                    alt="github"
                    src={"https://skillicons.dev/icons?i=github&theme=light"}
                    unoptimized
                  />
                </PrismicNextLink>
                {
                  (isFilled.link(page.data.live_link) && (
                    <PrismicNextLink field={page.data.live_link} className="text-lg font-bold tracking-tighter bg-red-600 mb-2 text-slate-900 shadow-inner shadow-black/60 px-3 rounded-lg mr-6">
                      Live <MdArrowOutward className="inline-block"/>
                    </PrismicNextLink>
                  )) || (
                    <div className="text-lg font-bold tracking-tighter mb-2 text-red-600 lowercase mr-6">
                      <MdOutlineErrorOutline className="inline-block" /> not live 
                    </div>
                  )
                }
              </div>
            )}
          </div>
        </div>
        <div className="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20">
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </div>
    </Bounded>
  );
}
