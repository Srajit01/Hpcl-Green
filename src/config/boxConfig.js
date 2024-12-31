import { Activity,Album, BarChart2, Clock, TrendingUp, Sun, Bell ,MapPin, Battery, Briefcase, Leaf, ArrowRight,Fuel, Truck, Wallet, Globe, ChevronRight} from 'lucide-react';

export const boxConfigs = [
  {
    id: 1,
    title: "CCUS Technology",
    description: "Carbon capture, utilization, and storage solutions for a cleaner future",
    icon: Album,
    path: "/ccus-technology"
  },
  {
    id: 2,
    title: "Hydrogen Production",
    description: "Green hydrogen solutions for sustainable energy storage and utilization",
    icon: BarChart2,
    path: "/hydrogen-production"
  },
  {
    id: 3,
    title: "Biofuels Development",
    description: "Advanced biofuel solutions from sustainable feedstock sources",
    icon: Clock,
    path: "/biofuels-development"
  },
  {
    id: 4,
    title: "Synthetic Fuels",
    description: "Next-generation synthetic fuel production using renewable energy",
    icon: Album,
    path: "/synthetic-fuels"
  },
  {
    id: 5,
    title: "Green Energy Locations and Storage",
    description: "Strategic locations across India for green energy production",
    icon: TrendingUp,
    path: "/target-locations"
  },
  {
    id: 6,
    title: "CNG Infrastructure",
    description: "Expanding CNG network for cleaner transportation solutions",
    icon: Sun,
    path: "/cng-infrastructure"
  }
];

export const upperBoxConfig = [
  {
    id: 1,
    title: "Current Tariff Rate",
    description: "₹6.50/kWh",
    type: "Standard",
    color: "text-gray-400",
    icon: Activity,
  },
  {
    id: 2,
    title: "Hydrogen Generation",
    description: "4.2kWh",
    type: "+12% from yesterday",
    color: "text-green-400",
    icon: TrendingUp
  },
  {
    id: 3,
    title: "Current Usage",
    description: "2.8 kWh",
    type: "Peak hours ahead",
    color: "text-red-400",
    icon: BarChart2,
  },
  {
    id: 4,
    title: "Today's Savings",
    description: "₹285",
    type: "Through smart scheduling",
    color: "text-green-400",
    icon: Clock,
  }
];

export const lowerBoxConfig = [
  {
    id: 1,
    title: "Off-Peak Hours ",
    description: "10PM-6AM",
    type: "₹4/kWh",
    color: "text-green-400",
  },
  {
    id: 2,
    title: "Mid-Peak Hours",
    description: "6AM-10PM",
    type: "₹8/kWh",
    color: "text-green-400",
  },
  {
    id: 3,
    title: "Standard Hours",
    description: "10AM-6PM",
    type: "₹6/kWh",
    color: "text-green-400",
  },
  {
    id: 4,
    title: "Peak Hours",
    description: "6PM-10PM",
    type: "₹12/kWh",
    color: "text-red-400",
  }
];

export const optimizer = [
  {
    name: "Srajit",
    surname: "Bhardwaj",
  }
];
