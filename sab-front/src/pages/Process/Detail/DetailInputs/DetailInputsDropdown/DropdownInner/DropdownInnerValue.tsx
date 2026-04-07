import styles from "./dropdown_inner_value.module.scss";

interface DropdownInnerValueProps {
  label: string;
  selectedLabel?: string;
  setIsSelected: (label: string) => void;
}

export default function DropdownInnerValue({
  label,
  selectedLabel,
  setIsSelected,
}: DropdownInnerValueProps) {
  console.log(label, selectedLabel);
  return (
    <div
      className={`${styles.dropdown_inner_value} ${
        selectedLabel === label && styles.selected
      }`}
      onClick={() => {
        setIsSelected(label);
      }}
    >
      {label}
    </div>
  );
}
