'use client';
import { ReactNode } from 'react';
import { motion, type Variants } from 'motion/react';
import React from 'react';

export type PresetType =
  | 'fade'
  | 'slide'
  | 'scale'
  | 'blur'
  | 'blur-slide'
  | 'zoom'
  | 'flip'
  | 'bounce'
  | 'rotate'
  | 'swing';

export type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: PresetType;
  as?: 'div' | 'span' | 'ul' | 'ol' | 'li' | 'section' | 'article' | 'header' | 'footer' | 'main' | 'nav';
  asChild?: 'div' | 'span' | 'li' | 'p';
};

const defaultContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants: Record<PresetType, Variants> = {
  fade: {},
  slide: {
    hidden: { y: 20 },
    visible: { y: 0 },
  },
  scale: {
    hidden: { scale: 0.8 },
    visible: { scale: 1 },
  },
  blur: {
    hidden: { filter: 'blur(4px)' },
    visible: { filter: 'blur(0px)' },
  },
  'blur-slide': {
    hidden: { filter: 'blur(4px)', y: 20 },
    visible: { filter: 'blur(0px)', y: 0 },
  },
  zoom: {
    hidden: { scale: 0.5 },
    visible: {
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  },
  flip: {
    hidden: { rotateX: -90 },
    visible: {
      rotateX: 0,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  },
  bounce: {
    hidden: { y: -50 },
    visible: {
      y: 0,
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
  },
  rotate: {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { type: 'spring', stiffness: 200, damping: 15 },
    },
  },
  swing: {
    hidden: { rotate: -10 },
    visible: {
      rotate: 0,
      transition: { type: 'spring', stiffness: 300, damping: 8 },
    },
  },
};

const addDefaultVariants = (variants: Variants) => ({
  hidden: { ...defaultItemVariants.hidden, ...variants.hidden },
  visible: { ...defaultItemVariants.visible, ...variants.visible },
});

function AnimatedGroup({
  children,
  className,
  variants,
  preset,
  as = 'div',
  asChild = 'div',
}: AnimatedGroupProps) {
  const selectedVariants = {
    item: addDefaultVariants(preset ? presetVariants[preset] : {}),
    container: addDefaultVariants(defaultContainerVariants),
  };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;

  // Render different motion components based on the 'as' prop
  if (as === 'div') {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={className}
      >
        {React.Children.map(children, (child, index) => {
          if (asChild === 'div') {
            return (
              <motion.div key={index} variants={itemVariants}>
                {child}
              </motion.div>
            );
          } else if (asChild === 'span') {
            return (
              <motion.span key={index} variants={itemVariants}>
                {child}
              </motion.span>
            );
          } else if (asChild === 'li') {
            return (
              <motion.li key={index} variants={itemVariants}>
                {child}
              </motion.li>
            );
          } else {
            return (
              <motion.p key={index} variants={itemVariants}>
                {child}
              </motion.p>
            );
          }
        })}
      </motion.div>
    );
  } else if (as === 'span') {
    return (
      <motion.span
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={className}
      >
        {React.Children.map(children, (child, index) => {
          if (asChild === 'div') {
            return (
              <motion.div key={index} variants={itemVariants}>
                {child}
              </motion.div>
            );
          } else if (asChild === 'span') {
            return (
              <motion.span key={index} variants={itemVariants}>
                {child}
              </motion.span>
            );
          } else if (asChild === 'li') {
            return (
              <motion.li key={index} variants={itemVariants}>
                {child}
              </motion.li>
            );
          } else {
            return (
              <motion.p key={index} variants={itemVariants}>
                {child}
              </motion.p>
            );
          }
        })}
      </motion.span>
    );
  } else if (as === 'ul') {
    return (
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={className}
      >
        {React.Children.map(children, (child, index) => {
          if (asChild === 'div') {
            return (
              <motion.div key={index} variants={itemVariants}>
                {child}
              </motion.div>
            );
          } else if (asChild === 'span') {
            return (
              <motion.span key={index} variants={itemVariants}>
                {child}
              </motion.span>
            );
          } else if (asChild === 'li') {
            return (
              <motion.li key={index} variants={itemVariants}>
                {child}
              </motion.li>
            );
          } else {
            return (
              <motion.p key={index} variants={itemVariants}>
                {child}
              </motion.p>
            );
          }
        })}
      </motion.ul>
    );
  } else {
    // Default to div if the 'as' prop is not recognized
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={className}
      >
        {React.Children.map(children, (child, index) => {
          if (asChild === 'div') {
            return (
              <motion.div key={index} variants={itemVariants}>
                {child}
              </motion.div>
            );
          } else if (asChild === 'span') {
            return (
              <motion.span key={index} variants={itemVariants}>
                {child}
              </motion.span>
            );
          } else if (asChild === 'li') {
            return (
              <motion.li key={index} variants={itemVariants}>
                {child}
              </motion.li>
            );
          } else {
            return (
              <motion.p key={index} variants={itemVariants}>
                {child}
              </motion.p>
            );
          }
        })}
      </motion.div>
    );
  }
}

export { AnimatedGroup };


