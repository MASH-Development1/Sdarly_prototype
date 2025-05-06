"use client";
import { Home, Box, ShoppingCart, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useState } from "react";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Orders",
    url: "#",
    icon: ShoppingCart,
  },
  {
    title: "Products",
    url: "#",
    icon: Box,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <Sidebar className="w-64 pt-8 sm:pt-18 bg-gray-800 text-black h-screen flex flex-col justify-end items-center">
      <SidebarContent className="w-full flex flex-col items-center">
        <SidebarMenu className="space-y-2">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a
                  href={item.url}
                  onClick={() => setActiveItem(item.title)}
                  className={`flex items-center gap-2 p-2 rounded-md transition ${
                    activeItem === item.title
                      ? "bg-blue-100 text-blue-600"
                      : "hover:bg-gray-700"
                  }`}
                >
                  <item.icon
                    className={`${
                      activeItem === item.title ? "text-blue-600" : ""
                    }`}
                  />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
