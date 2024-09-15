import React, {ComponentPropsWithoutRef, RefObject} from "react";

declare type WordArray = string[];

declare type NewButtonProps = {
    children: React.ReactNode,
    href?: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
};

declare type AnimatedHeroText1Props = {
    words: WordArray;
};

declare type AnimatedHeroText2Props = {
    words2: WordArray;
    words: WordArray;
};

declare type BackgroundShapesProps = {
    parallaxRef: RefObject<HTMLDivElement>;
}

declare type IconToFindProps = {
    href: string,
    d: string,
    isTop: boolean,
}

// New type for cardRef
declare type DotLottiePlayerRef = React.MutableRefObject<DotLottiePlayer | null>;

// Type for requestAnimationFrame time parameter
declare type RAFTime = number;

declare type Technology = {
    name: string,
    logo: string,
    desc: string,
    link: string
};

declare type TechnologyCardProps = {
    title: string,
    translateY: MotionValue<number>,
    onClick: React.MouseEventHandler<HTMLDivElement>,
    onMouseEnter: React.MouseEventHandler<HTMLDivElement>,
    isExpanded: boolean,
    dotLottieRef: DotLottiePlayerRef,
    technologies: Technology[],
    side: 'left' | 'right'
};

declare type ImageType = {
    image: string;
    alt: string;
    desc: string;
};

declare type CarouselProps = {
    images: ImageType[];
};

declare type CustomInputProps = {
    label: string;
    id: string;
    type: string;
    register: any;
    error?: string;
}

declare type FeatureTabProps = {
    title: string;
    icon: string;
    isNew?: boolean;
    selected: boolean;
    onClick: () => void;
} & ComponentPropsWithoutRef<'div'>;
