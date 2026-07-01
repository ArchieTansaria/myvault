'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { cn } from '@/src/lib/utils';

type MorphingArrowButtonProps = {
  direction: 'left' | 'right';
  isHovered?: boolean;
};

const MorphingArrowButton = ({ direction, isHovered: externalIsHovered }: MorphingArrowButtonProps) => {
  const [internalIsHovered, setIsHovered] = useState(false);
  const isHovered = externalIsHovered !== undefined ? externalIsHovered : internalIsHovered;
  const isLeft = direction === 'left';

  const containerVariants = {
    initial: { width: '16px', x: 0 },
    hover: {
      width: '23px',
      x: isLeft ? '-8px' : 0,
    },
  };

  const buttonVariants = {
    initial: {
      borderRadius: '50%',
      height: '14px',
      padding: '0',
    },

    hover: {
      borderRadius: isLeft ? '50px 14px 14px 50px' : '18px 50px 50px 18px',
      height: '14px',
      padding: '0 0px',
    },
  };

  const lineVariants = {
    initial: { width: 8 },
    hover: { width: 'calc(140% - 0px)' },
  };

  const arrowVariants = {
    initial: { x: '-15%' },
    hover: { x: isLeft ? '-120%' : '18%' },
  };

  const Icon = isLeft ? ChevronLeft : ChevronRight;

  return (
    <div className='inline-block w-[20px] ml-[-4px] mt-[1px] overflow-visible'>
      <motion.div
        className={cn(
          'flex items-center',
          isLeft ? 'justify-end' : 'justify-start'
        )}
        variants={containerVariants}
        initial='initial'
        animate={isHovered ? 'hover' : 'initial'}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.button
          className={cn(
            'w-full flex items-center justify-center',
            'relative overflow-hidden cursor-pointer bg-transparent'
          )}
          variants={buttonVariants}
          initial='initial'
          animate={isHovered ? 'hover' : 'initial'}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className='relative w-full h-full flex items-center'>
            <motion.div
              className={cn(
                'h-[1px] bg-[#ef4444] absolute top-1/2 -translate-y-1/2',
                isLeft ? 'right-1' : 'left-1'              )}
              variants={lineVariants}
              initial='initial'
              animate={isHovered ? 'hover' : 'initial'}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />

            <motion.div
              className='absolute top-1/2 left-1/2 -translate-y-1/2'
              variants={arrowVariants}
              initial='initial'
              animate={isHovered ? 'hover' : 'initial'}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <Icon className='w-[14px] h-[14px] text-[#ef4444]' />
            </motion.div>
          </div>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default MorphingArrowButton;
