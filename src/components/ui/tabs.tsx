import React from "react";

import { cn } from "@/lib/utils";

interface TabsContextValue {
  value: string;
  setValue: (v: string) => void;
}
const TabsContext = React.createContext<TabsContextValue | undefined>(undefined);

export const Tabs: React.FC<{ defaultValue: string; children: React.ReactNode }> = ({ defaultValue, children }) => {
  const [value, setValue] = React.useState(defaultValue);
  return <TabsContext.Provider value={{ value, setValue }}>{children}</TabsContext.Provider>;
};

export const TabsList: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", ...props }) => (

  <div className={cn("flex border-b", className)} {...props} />

  <div className={`flex border-b ${className}`.trim()} {...props} />

);

export const TabsTrigger: React.FC<{ value: string } & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ value, className = "", ...props }) => {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error("TabsTrigger must be used within Tabs");
  const active = ctx.value === value;
  return (
    <button

      className={cn("px-2 py-1 text-sm", active ? "font-semibold" : "text-muted-foreground", className)}

      className={`px-2 py-1 text-sm ${active ? "font-semibold" : "text-muted-foreground"} ${className}`.trim()}

      onClick={() => ctx.setValue(value)}
      {...props}
    />
  );
};

export const TabsContent: React.FC<{ value: string } & React.HTMLAttributes<HTMLDivElement>> = ({ value, className = "", ...props }) => {
  const ctx = React.useContext(TabsContext);
  if (!ctx || ctx.value !== value) return null;

  return <div className={cn(className)} {...props} />;

  return <div className={className} {...props} />;

};
