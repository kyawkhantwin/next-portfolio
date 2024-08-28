import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, HeartFilledIcon, Logo } from "@/components/icons";
import Image from "next/image";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-[900] font-['Roboto']  bg-gradient-to-r from-[#00b7fa] to-[#01cfea] bg-clip-text text-transparent">
              Kyaw Khant Win
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Small screen */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end">
        <ul className="hidden sm:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map(item => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}>
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
          <Link
            isExternal
            aria-label="Facebook"
            className="ms-3"
            href={siteConfig.links.facebook}>
            <Image
              src="/logo/facebook.png"
              alt="Facebook logo"
              width={25}
              height={25}
              className="text-default-500"
            />
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex"></NavbarItem>
      </NavbarContent>
      {/* Larger screen */}

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link
          isExternal
          aria-label="Facebook"
          className="ms-3"
          href={siteConfig.links.facebook}>
          <Image
            src="/logo/facebook.png"
            alt="Facebook logo"
            width={25}
            height={25}
            className="text-default-500"
          />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href= {item.href}
                size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
