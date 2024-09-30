import { RefObject, ComponentPropsWithoutRef } from "react";
import { MotionValue } from "framer-motion";

type WordArray = string[];

type ButtonProps = {
    children: React.ReactNode,
    href?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>,
    type?: "submit" | "reset" | "button" | undefined,  // Improved typing for button
};

type AnimatedHeroText1Props = {
    words: WordArray;
};

type AnimatedHeroText2Props = {
    words2: WordArray;
    words: WordArray;
};

type BackgroundShapesProps = {
    parallaxRef: RefObject<HTMLDivElement>;
};

type IconToFindProps = {
    href: string;
    d: string;
    isTop: boolean;
};

type DotLottiePlayerRef = React.MutableRefObject<DotLottiePlayer | null>;

type RAFTime = number;

type Technology = {
    name: string;
    logo: string;
    desc: string;
    link: string;
};

type TechnologyCardProps = {
    title: string;
    translateY: MotionValue<number>;
    onClick: React.MouseEventHandler<HTMLDivElement>;
    onMouseEnter: React.MouseEventHandler<HTMLDivElement>;
    isExpanded: boolean;
    dotLottieRef: DotLottiePlayerRef;
    technologies: Technology[];
    side: 'left' | 'right';
};

type ImageType = {
    image: string;
    alt: string;
    desc: string;
};

type CarouselProps = {
    images: ImageType[];
};

type FeatureTabProps = {
    title: string;
    icon: string;
    isNew?: boolean;
    selected: boolean;
    onClick: () => void;
} & ComponentPropsWithoutRef<'div'>;
