import {
  Calendar,
    CalendarDays,
    Grid2X2,
    Inbox,
  } from "lucide-react";

export const primeryNavItems = [
    {
      name: "Inbox",
      link: '/loggedin',
      icon: <Inbox className="w-4 h-4"/>
    },
    {
      name: "Today",
      link: '/loggedin/today',
      icon: <Calendar className="w-4 h-4"/>
    },
    {
      name: "Upcoming",
      link: '/loggedin/upcoming',
      icon: <CalendarDays className="w-4 h-4"/>
    },
    {
      name: "Filters & Labbles",
      link: '/loggedin/filter-labble',
      icon: <Grid2X2 className="w-4 h-4"/>
    }
  ];