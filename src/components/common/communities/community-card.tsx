import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui';
import {
  BadgeIcon,
  DotsVerticalIcon,
  HeartIcon,
  PlusCircledIcon,
  PlusIcon,
  Share2Icon,
} from '@radix-ui/react-icons';
import { HiCheckBadge } from 'react-icons/hi2';

export const CommunityCard = () => {
  return (
    <div>
      <div className='flex gap-2 items-center py-1 px-1 bg-accent/90  hover:brightness-95 rounded-full duration-300 cursor-pointer group'>
        <div className='relative mr-4'>
          <Avatar className='h-10 w-10 '>
            <AvatarImage
              className=' group-hover:scale-110 duration-200'
              src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
            />
            <AvatarFallback>MF</AvatarFallback>
          </Avatar>
        </div>
        <div className=''>
          <div className='flex gap-1 items-center'>
            <p className='font-medium text-orange-600'>$techlearner </p>
            <span>
              <HiCheckBadge className=' h-5 w-5 text-emerald-500 ' />
            </span>
          </div>
          <p className='text-sm text-muted-foreground'>2353 members</p>
        </div>
        <div className='h-10 w-10 bg-background rounded-full shadow-sm group-hover:shadow-lg duration-200 ml-auto group-hover:brightness-125 grid place-items-center'>
          <PlusIcon />
        </div>
      </div>
    </div>
  );
};
