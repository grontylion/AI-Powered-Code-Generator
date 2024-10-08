'use client'
import { Z0Icon } from "@/components/icons/z0";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUp, Paperclip, X } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
function ChatInput() {
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const updateHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${Math.min(scrollHeight, 384)}px`;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    updateHeight();
  };

  useEffect(() => {
    updateHeight();
  }, [value]);

  return (
    <div className='focus-within:border-alpha-600 overflow-hidden border-alpha-400 flex w-full flex-col items-center gap-2 rounded-lg border bg-background transition-colors'>
      <div className='flex w-full p-3 gap-2 bg-muted'>
        <ImageItem />
        <ImageItem />
      </div>
      <Textarea
        ref={textareaRef}
        className='w-full resize-none overflow-auto border-0 p-3 pb-1.5 text-sm shadow-none placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-0'
        value={value}
        onChange={handleChange}
        placeholder='Ask z0 a question...'
      />
      <div className='flex w-full shrink-0 items-center justify-between gap-2 p-3'>
        <Button
          variant='outline-gray'
          className='size-8 shrink-0 rounded-lg p-0'
        >
          <Paperclip size={16} />
        </Button>

        <Button
          variant='default'
          className='ml-auto size-8 shrink-0 rounded-lg p-0 disabled:bg-gray-100 disabled:text-gray-400 disabled:border disabled:border-alpha-400 disabled:opacity-100 disabled:shadow-none'
          disabled={value === ''}
        >
          <ArrowUp size={16} />
        </Button>
      </div>
    </div>
  )
}

function ImageItem() {
  return (
    <div className='relative flex h-10 w-[150px] cursor-pointer items-center gap-1 rounded-lg border border-alpha-400'>
      <HoverCard openDelay={0} closeDelay={0}>
        <HoverCardTrigger asChild>
          <div className='flex h-full w-full shrink-0 items-center gap-1 overflow-hidden rounded-lg bg-white py-1 pl-1 pr-3 hover:bg-gray-100'>
            <Image
              src={'/z0.png'}
              alt='image'
              width={100}
              height={100}
              className='size-8 rounded-sm object-cover'
            />
            <div className='grid flex-1 gap-1 py-0.5 text-xs leading-none text-gray-500'>
              <div className='text-ellipsis text-sm leading-none'>z0.png</div>
              <div className='line-clamp-1 font-normal'>0.29kB</div>
            </div>
          </div>
        </HoverCardTrigger>
        <HoverCardContent side='top' className='max-h-[300px] w-64 cursor-default p-0 '>
          <Image
            src={'/z0.png'}
            alt='image'
            width={100}
            height={100}
            className='size-8 rounded-sm object-cover w-full h-fit'
          />
        </HoverCardContent>
      </HoverCard>
      <div className='absolute -right-1 -top-1 rounded-full border border-alpha-400 bg-background p-0.5 hover:bg-gray-150'>
        <X size={12} />
      </div>
    </div>
  )
}

export default function Home() {
  const t = useTranslations('home');
  return (
    <div className='relative flex h-screen items-center justify-center overflow-hidden'>
      <Z0Icon
        className='h-[610px] w-full shrink-0 pr-10 text-gray-150'
        fill={false}
        strokeWidth={0.1}
        strokeDasharray={'0.1'}
      />
      <Badge
        className='absolute right-4 top-4 rounded-full text-xs text-gray-700 select-none'
        variant='secondary'
      >
        Public Beta
      </Badge>
      <div className='absolute left-1/2 top-1/2 flex min-h-[285px] w-full max-w-[49rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center px-4 sm:min-h-[270px]'>
        <div className='mb-6 flex flex-col items-center gap-2 select-none'>
          <h1 className='font-heading text-pretty text-center text-[22px] font-semibold tracking-tighter text-gray-900 sm:text-[30px] md:text-[36px]'>
            What can I help you ship?
          </h1>
          <h2 className='text-balance text-center text-sm text-gray-700'>
            Generate UI, ask questions, debug, execute code, and much more.
          </h2>
        </div>
        <ChatInput />
      </div>
    </div>
  )
}
