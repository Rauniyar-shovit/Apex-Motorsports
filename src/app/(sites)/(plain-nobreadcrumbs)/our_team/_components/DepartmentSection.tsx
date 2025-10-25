import Members from "@/components/reusable/Members";
import { Department } from "@/models";
import React from "react";

const DepartmentsSection = ({
  departmentsArray,
}: {
  departmentsArray: Department[];
}) => {
  return (
    <section className="mt-20">
      <div className="section-padding wrapper font-sans">
        {departmentsArray.map((department) => {
          if (department.members.length === 0) return null;
          return (
            <div key={department._id} className="mb-16">
              <h1 className="text-4xl md:text-5xl font-barlow uppercase text-center">
                {department.name}
              </h1>
              <div className="mt-4 border-b-2 border-primary w-40 mx-auto mb-10" />

              <Members
                members={department.members}
                enableHoverOverlay={false}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DepartmentsSection;
