'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { Clock3, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import Image from 'next/image';
import OneOneCard from '../one-one-card';
import EventCard from '../event-card';
import Dot from '../dot';

export default function ExpertServices() {
    const [category, setCategory] = useState('All');
    const categories = [
        { id: 2, name: "1:1 Call" },
        { id: 3, name: "Events" },
        { id: 4, name: "Digital Product" },
        { id: 5, name: "Webinars" },
    ];

    const events = [
        {
            id: 1,
            title: 'Masterclass for empowering with AI for 2025',
            description: 'Masterclass for empowering with AI for job securing',
            image: '/images/event-item.png',
            location: '36 Guild Street London, UK ',
            date: 'Wed, 1 Jan`25',
            time: '20:30 - 21:30 GMT+05:30',
            host: 'Pratiksha Chavhan',
            url: '/',
            participants: [
                {
                    id: 1,
                    name: 'Savannah Nguyen',
                    avatar: '/images/avatar.svg'
                },
                {
                    id: 2,
                    name: 'Savannah Nguyen',
                    avatar: '/images/avatar.svg'
                },
                {
                    id: 3,
                    name: 'Savannah Nguyen',
                    avatar: '/images/avatar.svg'
                },
            ]
        },
        {
            id: 2,
            title: 'Masterclass for empowering with AI for 2025',
            description: 'Masterclass for empowering with AI for job securing',
            image: '/images/event-item.png',
            location: '36 Guild Street London, UK ',
            date: 'Wed, 1 Jan`25',
            time: '20:30 - 21:30 GMT+05:30',
            host: 'Pratiksha Chavhan',
            url: '/',
            participants: [
                {
                    id: 1,
                    name: 'Savannah Nguyen',
                    avatar: '/images/avatar.svg'
                },
                {
                    id: 2,
                    name: 'Savannah Nguyen',
                    avatar: '/images/avatar.svg'
                },
                {
                    id: 3,
                    name: 'Savannah Nguyen',
                    avatar: '/images/avatar.svg'
                },
            ]
        },
        {
            id: 3,
            title: 'Masterclass for empowering with AI for 2025',
            description: 'Masterclass for empowering with AI for job securing',
            image: '/images/event-item.png',
            location: '36 Guild Street London, UK ',
            date: 'Wed, 1 Jan`25',
            time: '20:30 - 21:30 GMT+05:30',
            host: 'Pratiksha Chavhan',
            url: '/',
            participants: [
                {
                    id: 1,
                    name: 'Savannah Nguyen',
                    avatar: '/images/avatar.svg'
                },
                {
                    id: 2,
                    name: 'Savannah Nguyen',
                    avatar: '/images/avatar.svg'
                },
                {
                    id: 3,
                    name: 'Savannah Nguyen',
                    avatar: '/images/avatar.svg'
                },
            ]
        },
        {
            id: 4,
            title: 'Masterclass for empowering with AI for 2025',
            description: 'Masterclass for empowering with AI for job securing',
            image: '/images/event-item.png',
            location: '36 Guild Street London, UK ',
            date: 'Wed, 1 Jan`25',
            time: '20:30 - 21:30 GMT+05:30',
            host: 'Pratiksha Chavhan',
            url: '/',
            participants: [
                {
                    id: 1,
                    name: 'Savannah Nguyen',
                    avatar: '/images/avatar.svg'
                },
                {
                    id: 2,
                    name: 'Savannah Nguyen',
                    avatar: '/images/avatar.svg'
                },
                {
                    id: 3,
                    name: 'Savannah Nguyen',
                    avatar: '/images/avatar.svg'
                },
            ]
        },
        {
            id: 5,
            title: 'Masterclass for empowering with AI for 2025',
            description: 'Masterclass for empowering with AI for job securing',
            image: '/images/event-item.png',
            location: '36 Guild Street London, UK ',
            date: 'Wed, 1 Jan`25',
            time: '20:30 - 21:30 GMT+05:30',
            host: 'Pratiksha Chavhan',
            url: '/',
            participants: [
                {
                    id: 1,
                    name: 'Savannah Nguyen',
                    avatar: '/images/avatar.svg'
                },
                {
                    id: 2,
                    name: 'Savannah Nguyen',
                    avatar: '/images/avatar.svg'
                },
                {
                    id: 3,
                    name: 'Savannah Nguyen',
                    avatar: '/images/avatar.svg'
                },
            ]
        },
    ];

    return (
        <>
            <div className='my-5 px-5 py-3 bg-primary-light rounded-[14px] flex gap-3 overflow-x-scroll no-scrollbar'>
                <Button variant={'outline'} onClick={() => setCategory('All')} className={cn("bg-transparent text-base/6 font-normal capitalize py-4 px-6 leading-normal rounded-[12px] h-fit shadow-none border-foreground hover:bg-foreground hover:text-background transition-all", { 'bg-foreground text-white dark:text-background font-bold': category === 'All' })}>All</Button>
                {
                    categories.map((categ) => (
                        <Button variant={'outline'} key={categ.id} onClick={() => setCategory(categ.name)} className={cn("bg-transparent text-base/6 font-normal capitalize py-4 px-6 leading-normal rounded-[12px] h-fit shadow-none border-foreground hover:bg-foreground hover:text-background transition-all", { 'bg-foreground text-white dark:text-background font-bold': categ.name === category })}>{categ.name}</Button>
                    ))
                }
            </div>
            <div className='space-y-[18px] mb-[169px]'>
                <div className='p-4 border border-[#E0E0E0] rounded-[16px] flex justify-between'>
                    <div>
                        <p className='text-xl/[130%] font-medium mb-2'>Building a successful business - 1:1 Mentoring</p>
                        <div className='flex items-center gap-2'>
                            <p className='text-[#7C7C7C] text-base/[150%]'>By Sen Janson</p>
                            <Dot />
                            <div className='flex items-center gap-1'>
                                <Star className="h-5 w-5 text-[#FBBC05]" />
                                <p className='text-[#7C7C7C] text-base/[150%]'>4.8 (122)</p>
                            </div>
                        </div>
                        <div className='my-4 flex gap-2 items-center'>
                            <div className='flex gap-1 items-center'>
                                <Clock3 className='text-foreground' />
                                <p className='text-[#7C7C7C] text-sm'>40 Minutes</p>
                            </div>
                            <Dot />
                        </div>
                        <Accordion type="single" collapsible>
                            <AccordionItem className="border-none w-fit items-center" value="details">
                                <AccordionTrigger icon='/images/more-details-icon.svg' className="font-semibold text-2xl/8 tracking-[-1%] text-left w-fit">
                                    <p className='text-sm/[155%] mr-1 text-primary font-normal'>View Details</p>
                                </AccordionTrigger>
                                <AccordionContent className="text-[#7E8492] pb-0 mt-4 font-medium text-base/[150%]">
                                    Some details about the topic.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className='flex flex-col justify-between items-end'>
                        <p className='text-[32px]/[120%] font-medium font-roboto'>$128</p>
                        <Button className={cn("font-roboto text-sm/normal font-semibold capitalize py-[9px] px-[16px] leading-normal rounded-[8px] h-fit text-white shadow-none")}>
                            Book Session
                        </Button>
                    </div>
                </div>
                <div className='p-4 border border-[#E0E0E0] rounded-[16px] flex justify-between'>
                    <div className='flex gap-[34px]'>
                        <Image src={'/images/event-item.png'} alt='Event Image' width={177} height={134} className='rounded-[8px] h-[134px] w-[177px] object-cover object-center' />
                        <div>
                            <p className='text-xl/[130%] font-medium mb-2'>Building a successful business - 1:1 Mentoring</p>
                            <div className='flex items-center gap-2'>
                                <p className='text-[#7C7C7C] text-base/[150%]'>By Sen Janson</p>
                                <Dot />
                                <div className='flex items-center gap-1'>
                                    <Star className="h-5 w-5 text-[#FBBC05]" />
                                    <p className='text-[#7C7C7C] text-base/[150%]'>4.8 (122)</p>
                                </div>
                            </div>
                            <div className='my-4 flex gap-2 items-center'>
                                <div className='flex gap-1 items-center'>
                                    <Image src={'/images/map-pin.svg'} alt='Location Icon' width={16} height={16} />
                                    <p className='text-[#2B2849] text-xs'>36 Guild Street London, UK </p>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <Image src={'/images/map-pin.svg'} alt='Location Icon' width={16} height={16} />
                                    <p className='text-[#2B2849] text-xs'>Wed, 1 Jan`25, 20:30 - 21:30 GMT+05:30</p>
                                </div>
                            </div>
                            <Accordion type="single" collapsible>
                                <AccordionItem className="border-none w-fit items-center" value="details">
                                    <AccordionTrigger icon='/images/more-details-icon.svg' className="font-semibold text-2xl/8 tracking-[-1%] text-left w-fit">
                                        <p className='text-sm/[155%] mr-1 text-primary font-normal'>View Details</p>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-[#7E8492] pb-0 mt-4 font-medium text-base/[150%]">
                                        Some details about the topic.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between items-end'>
                        <p className='text-[32px]/[120%] font-medium font-roboto'>$128</p>
                        <Button className={cn("font-roboto text-sm/normal font-semibold capitalize py-[9px] px-[16px] leading-normal rounded-[8px] h-fit text-white shadow-none")}>
                            Book Session
                        </Button>
                    </div>
                </div>
            </div>
            <div className="mt-[22px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
                {events.map((event) => (
                   <OneOneCard key={event.id} event={event} />
                ))}
            </div>
            <div className="mt-[22px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
                {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </>
    )
}
