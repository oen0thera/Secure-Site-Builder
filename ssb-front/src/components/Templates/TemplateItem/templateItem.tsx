import { TemplateItemProps } from "@/types/components/Template.type";
import styles from './templateItem.module.scss'

export default function TemplateItem({type}:TemplateItemProps){
    return <div className={styles.template_item}><div className={styles.template_details}>{'내부 텍스트입니다'}</div>{type}</div>
}