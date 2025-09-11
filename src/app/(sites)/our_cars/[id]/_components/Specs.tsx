import RevealWrapper from "@/components/reusable/RevealWrapper";
import React from "react";

const specsData = [
  {
    title: "M22 Dimensions",
    data: [
      { label: "Overall Length", value: "3255.8 mm" },
      { label: "Overall Width", value: "1501.5 mm" },
      { label: "Overall Height", value: "1191 mm" },
      { label: "Mass (without Driver)", value: "Front 106 kg / Rear 125.5 kg" },
    ],
  },
  {
    title: "M22 Chassis & Driver Controls",
    data: [
      {
        label: "Seat",
        value:
          "Carbon Fibre/Kevlar Seat. Rigidly mounted to chassis. Confor foam headrest",
      },
      { label: "Frame Construction", value: "Composite Monocoque" },
      {
        label: "Frame Material",
        value:
          "Pre-preg carbon fibre skins, aluminium honeycomb core, bonded aluminium hardpoints.",
      },
      {
        label: "Instrumentation",
        value:
          "Dash mounted MoTeC C153 Display with testing, competition and diagnostic display configurations, and electrical safety system LED indicator lights",
      },
    ],
  },
  {
    title: "M22 Suspension",
    data: [
      {
        label: "Front Suspension Type",
        value: "Double unequal length A-Arm, direct acting",
      },
      {
        label: "Rear Suspension Type",
        value: "Double unequal length A-Arm, pushrod, adjustable anti roll bar",
      },
      { label: "Tyre", value: "20.0 x 7.0 -13 D2704 Goodyear" },
      {
        label: "Front Wheels",
        value: 'Spun Al halves, CNC Al centre, +2" offset',
      },
      {
        label: "Rear Wheels",
        value: 'Spun Al halves, CNC Al centre, +2" offset',
      },
      {
        label: "Front Upright Assembly",
        value: "NC machine, 2024-T351 Al, sliding camber adjustment clevis",
      },
      {
        label: "Rear Upright Assembly",
        value: "NC machine, 2024-T351 Al, sliding camber adjustment clevis",
      },
    ],
  },
  {
    title: "M22 Tractive Power System",
    data: [
      {
        label: "Motor",
        value: "Fischer Elektromotoren TI085-052-070-04B7S-07S04BE2",
      },
      { label: "Max Torque (Continuous)", value: "29.1 Nm" },
      { label: "Motor Technology Utilised", value: "PMSM" },
      {
        label: "Accumulator Cells",
        value:
          "Shenzhen Melasta Battery Co., Ltd SLPB9675175HM | 138s 1p, 14Ah LiCoO2",
      },
    ],
  },
  {
    title: "M22 Aerodynamics",
    data: [
      {
        label: "Configuration",
        value:
          "Multi-element front wing, triple element rear wing, central and outboard diffusers, sidewings, nosewings, bargeboard, suspension profiles",
      },
      { label: "CLA", value: "5.1" },
      { label: "CDA", value: "1.8" },
    ],
  },
  {
    title: "M22 Powertrain",
    data: [
      { label: "Engine", value: "2017 KTM 690 Duke-R" },
      { label: "Bore", value: "102 mm" },
      { label: "Stroke", value: "84.5 mm" },
      { label: "Cylinders", value: "1 Cylinder" },
      { label: "Displacement", value: "690 cc" },
      { label: "Induction", value: "Naturally aspirated" },
      { label: "Fuel Type", value: "98-RON" },
      {
        label: "Engine Modifications",
        value: "Cam cover mounted camshaft position sensor",
      },
      { label: "Differential Type", value: "Spool Driven" },
    ],
  },
];

const Specs = () => {
  return (
    <>
      <div className="mt-10 md:mt-20 px-5 md:px-10 wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {specsData.map((section, idx) => (
            <RevealWrapper key={idx} index={idx}>
              <div>
                <h3 className="text-3xl mb-4 font-barlow uppercase ">
                  {section.title}
                </h3>

                <ul className="space-y-2 font-sans">
                  {section.data.map((item, i) => (
                    <li key={i}>
                      <span className="font-semibold">{item.label}:</span>{" "}
                      <span className="font-medium">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </>
  );
};

export default Specs;
