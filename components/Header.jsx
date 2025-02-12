'use client'
import Image from 'next/image'
import React, {useEffect, useRef, useState} from 'react'
import UserIcon from './UserIcon'
import PagePadding from './PagePadding'
import {FaChromecast} from "react-icons/fa";
import {FiSearch} from "react-icons/fi";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Logo from "@/components/elements/Logo";
import Navigator from "@/components/elements/Navigator";
import {cn} from "@/lib/utils";

const HeaderDrawer = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <Drawer direction={"left"} open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger>{children}</DrawerTrigger>
            <DrawerContent className="w-[240px] h-full">
                <div className="py-3">
                    <div className="px-3">
                        <Logo isInDrawer
                              onClickClose={() => setIsOpen(false)} />
                    </div>
                    <Navigator />
                </div>
            </DrawerContent>
        </Drawer>
    )

}

const Header = ({children}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const headRef = useRef();
    useEffect(() => {
        const handleScroll = () => {
            const scrollValue = headRef?.current?.scrollTop;
            console.log("test", scrollValue)
            setIsScrolled(scrollValue !== 0);
        };
        headRef?.current?.addEventListener("scroll", handleScroll);
        return () => {
            headRef?.current?.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header ref={headRef} className=" relative overflow-y-auto w-full h-full">
            <section className='absolute w-full top-0'>
                <div className='relative h-[400px] w-full'>
                    <Image fill className='object-cover' src={"https://images.unsplash.com/photo-1707833558984-3293e794031c"} alt='mediaItem' />
                </div>
                <div className='absolute h-[400px] top-0 bg-black opacity-40 w-full'></div>
                <div className='absolute h-[400px] top-0 bg-gradient-to-t from-black w-full'></div>
            </section>
            <section className={cn('sticky top-0 left-0 z-10', isScrolled && "bg-black")}>
                <PagePadding>
                    <div className='h-[64px] flex flex-row justify-between items-center'>
                        <article className="h-[42px] min-w-[480px] hidden lg:flex flex-row items-center bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px] border border-neutral-500">
                            <div>
                                <FiSearch size={24} />
                            </div>
                            <input type='text' className='h-full w-full bg-transparent'
                                   placeholder='노래, 앨범, 아티스트, 팟캐스트 검색' />
                        </article>
                        <HeaderDrawer>
                            <article className="lg:hidden">
                                <Logo />
                            </article>
                        </HeaderDrawer>
                        <article className='flex flex-row items-center gap-6'>
                            <FaChromecast size={26} />
                            <UserIcon />
                        </article>
                    </div>
                </PagePadding>
            </section>
            <section className='relative'>{children}</section>
        </header>
    )
}

export default Header