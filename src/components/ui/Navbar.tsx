// components/Navbar.js

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlignJustify } from 'lucide-react';
import { ModeToggle } from './toggle';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const Navbar = () => {
    return (
        <nav className="bg-background/50 sticky top-4 mx-4 border-b-4 backdrop-blur-lg rounded-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-lg font-bold">
                    Akcelify
                </Link>
                <div className="hidden md:flex space-x-8 items-center">
                    <Link href="/" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                        Home
                    </Link>
                    <Link href="/blogs" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                        Blogs
                    </Link>
                    <Link href="/contact" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                        Contact
                    </Link>

                    <ModeToggle />

                    <div>
                        <Button className='mx-1' variant={"outline"} size={"default"}> SignUp </Button>
                        <Button className='mx-1' variant={"outline"} size={"default"}> Login </Button>
                    </div>

                </div>
                <div className="md:hidden flex justify-center items-center">
                    <span className='mx-3'>
                        <ModeToggle />
                    </span>
                    <Sheet>
                        <SheetTrigger>
                            <AlignJustify />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className='my-8'>Akcelify</SheetTitle>
                                <SheetDescription>

                                    <div className="flex flex-col gap-6 justify-center items-center my-4">
                                        <Link href="/" className="">
                                            Home
                                        </Link>
                                        <Link href="/blogs" className="">
                                            Blogs
                                        </Link>
                                        <Link href="/contact" className="">
                                            Contact
                                        </Link>

                                        <div>
                                            <Button className='mx-1' variant={"outline"} size={"sm"}> SignUp </Button>
                                            <Button className='mx-1' variant={"outline"} size={"sm"}> Login </Button>
                                        </div>

                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
