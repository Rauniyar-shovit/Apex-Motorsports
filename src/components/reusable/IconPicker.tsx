import { ACHIEVEMENTS_ICONS } from "@/sanity/constants";
import { FormSetPatch, FormUnsetPatch, set, unset } from "sanity";

export default function IconPicker({
  value,
  onChange,
}: {
  value?: string | null;
  onChange: (event: FormUnsetPatch | FormSetPatch) => void;
}) {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {Object.entries(ACHIEVEMENTS_ICONS).map(([name, Icon]) => {
        const isSelected = value === name;
        return (
          <button
            key={name}
            type="button"
            style={{
              padding: "0.5rem",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "70px",
              height: "60px",
              backgroundColor: isSelected ? "#ffffff" : "#5f3cff",
              color: isSelected ? "#5f3cff" : "#ffffff",
              transition: "all 0.2s",
            }}
            onClick={() => onChange(isSelected ? unset() : set(name))}
          >
            <Icon size={28} />
          </button>
        );
      })}
    </div>
  );
}
