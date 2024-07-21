'use client'
import { useSession } from "next-auth/react";
import Image from "next/image"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button";
import { signOutAction } from "../../../actions/auth-action";

export default function UserProfile(){
    const session = useSession();

    const ImageUrl = session?.data?.user?.image;
    const emailAddress = session?.data?.user?.email;
    const name = session?.data?.user?.name;
    return (
        
            <DropdownMenu>
                <p className="hidden sm:flex"> {`Hello, ${name}`}</p>
            <DropdownMenuTrigger asChild>
                
              <Button variant="secondary" size="icon" className="rounded-full">
                <div>
                    <Image 
                    src={ImageUrl}
                    width={48}
                    height={48}
                    alt={`${name} profile image`}
                    className="rounded-[50%]"
                    />
                </div>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                <DropdownMenuItem>
                    <form action={signOutAction}>
                        <Button
                            type="submit"
                            variant={"ghost"}
                            className="hover:text-primary"

                        >
                            Logout
                        </Button>
                    </form>
                </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        
    )
}