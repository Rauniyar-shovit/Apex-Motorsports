"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DEPARTMENT_CATEGORIES } from "@/sanity/constants";
import DepartmentsSection from "./DepartmentSection";
import { Department, DepartmentKey } from "@/models";

const TeamTabs = ({ tabContent }: { tabContent: Department[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const departmentFromParams = searchParams.get("department");
  const currentTab: DepartmentKey = Object.values(
    DEPARTMENT_CATEGORIES
  ).includes(departmentFromParams as DepartmentKey)
    ? (departmentFromParams as DepartmentKey)
    : DEPARTMENT_CATEGORIES.TECHNICAL;

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete("tab");
    params.set("department", value);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const departments = Object.values(DEPARTMENT_CATEGORIES).filter(
    (dept) => dept !== DEPARTMENT_CATEGORIES.MANAGEMENT
  );

  return (
    <div className="wrapper">
      <Tabs
        value={currentTab}
        onValueChange={handleTabChange}
        className="flex flex-col justify-center items-center font-barlow"
      >
        <TabsList className="gap-3">
          {departments.map((dept) => (
            <TabsTrigger
              key={dept}
              value={dept}
              className="uppercase text-lg md:text-2xl px-4"
            >
              {dept}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={currentTab}>
          <DepartmentsSection departmentsArray={tabContent} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TeamTabs;
