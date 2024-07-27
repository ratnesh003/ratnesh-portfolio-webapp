import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { GlareCard } from "@/components/ui/glare-card";
import Heading from "@/components/Heading";
import { ImageField, KeyTextField } from "@prismicio/client";

interface CardProps {
    link: string,
    image: ImageField,
    title: KeyTextField,
    description: KeyTextField,
    tags: string[]
}

const Card = ({
    link,
    image,
    title,
    description,
    tags
}: CardProps) => {
  return (
    <PrismicNextLink href={`/projects/${link}`} className="group">
      <GlareCard className="bg-slate-900 group">
        <div className="flex flex-col items-start justify-between p-4">
          <div className="h-52 w-72 overflow-hidden rounded-xl border-[1px] border-slate-600">
            <PrismicNextImage
              priority={false}
              quality={35}
              field={image}
              className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
            />
          </div>
            <Heading size="sm" className="mt-3 w-72 truncate">
            {title}
          </Heading>
          <p className="line-clamp-5 text-base font-extralight leading-[22px] tracking-wider">
            {description}
          </p>{" "}
          <ul
            style={{ listStyleType: "none" }}
            className="flex flex-nowrap gap-1.5 text-xs font-bold text-yellow-400"
          >
            {tags
              .filter((value) => (value != "Special"))
              .slice(0, 4)
              .map((tag, index) => (
                <li
                  key={index}
                  className="mt-1 rounded-md bg-amber-50 bg-opacity-25 px-2 py-1"
                >
                  {tag}
                </li>
              ))}
          </ul>
        </div>
      </GlareCard>
    </PrismicNextLink>
  );
};

export default Card;
