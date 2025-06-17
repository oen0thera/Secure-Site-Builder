import { TemplateItemProps } from "@/types/components/Template.type";
import styles from "./templateItem.module.scss";

export default function TemplateItem({ templateItems }: TemplateItemProps) {
  const { id, title, content, imageUrl, type } = templateItems;
  return (
    <div className={styles.template_item}>
      <div className={styles.template_details}>{content}</div>
      {title}
    </div>
  );
}
