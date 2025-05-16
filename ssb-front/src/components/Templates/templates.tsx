import { TemplateItemType,TemplateItemStyle } from '@/types/components/Template.type'
import styles from './templates.module.scss'
import TemplateItem from './TemplateItem/templateItem'

export default function Templates(){
    const templateList:TemplateItemType[] = [{type:TemplateItemStyle.STYLE},{type:TemplateItemStyle.STYLE},{type:TemplateItemStyle.STYLE}]
    return <div className={styles.template_wrapper}>
        {templateList.map((item)=>{return <TemplateItem type={item.type}/>})}
    </div>
}

