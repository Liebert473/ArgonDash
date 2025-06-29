import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandGroup,
  CommandSeparator,
} from "@/components/ui/command";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const pages = [
    {
      label: "Dashboard",
      path: "/dashboard",
      img: "https://img.icons8.com/ios/100/1976D2/performance-macbook.png",
    },
    {
      label: "Tables",
      path: "/tables",
      img: "https://img.icons8.com/external-tal-revivo-regular-tal-revivo/96/FC9319/external-formulae-table-with-row-and-column-cells-table-regular-tal-revivo.png",
    },
    {
      label: "Billing",
      path: "/billing",
      img: "https://img.icons8.com/ios-glyphs/90/20C997/bank-card-back-side.png",
    },
    {
      label: "Profile",
      path: "/profile",
      img: "https://img.icons8.com/pastel-glyph/64/person-male--v3.png",
    },
  ];

  const sections = [
    { label: "Sales overview", path: "/dashboard/#sales_overview" },
    { label: "Sales by country", path: "/dashboard/#sales_by_country" },
    { label: "Categories", path: "/dashboard/#categories" },
  ];

  return (
    <div className="relative w-60">
      <Command className="rounded-lg border focus:shadow-md">
        <CommandInput
          placeholder="Search"
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
        />
        {open && (
          <CommandList className="absolute top-full left-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-50 overflow-y-auto max-h-80">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Pages">
              {pages.map((x) => (
                <CommandItem key={x.path} onSelect={() => navigate(x.path)}>
                  <span>
                    <img
                      width="10"
                      height="10"
                      src={x.img}
                      alt="person-male--v3"
                      className="min-w-4 min-h-4"
                    />
                  </span>
                  <span>{x.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Sections">
              {sections.map((x) => (
                <CommandItem key={x.path}>
                  <Link to={x.path}>
                    <span>{x.label}</span>
                  </Link>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        )}
      </Command>
    </div>
  );
}

export default SearchBar;
