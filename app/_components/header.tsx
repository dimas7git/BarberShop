"use client";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { SheetTrigger, Sheet, SheetContent } from "./ui/sheet";
import SideMenu from "./side-menu";
import Link from "next/link";

const Header = () => {

    return (
        <header>
            <Card>
                <CardContent className="p-5 py-8 justify-between items-center flex flex-row">
                    <Link href="/">
                        <div className="text-3xl font-bold">
                            <span className="text-primary opacity-70">BarberShop</span>
                        </div>
                    </Link>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="h-8 w-8">
                                <MenuIcon size={18} />
                            </Button>
                        </SheetTrigger>

                        <SheetContent className="p-0">
                            <SideMenu />
                        </SheetContent>
                    </Sheet>
                </CardContent>
            </Card>
        </header>

    );
};

export default Header;