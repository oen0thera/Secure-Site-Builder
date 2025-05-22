import { IconColor, IconProps, IconSize } from '@/types/components/Icon.type';
import styles from './icon.module.scss';
export default function Icon({size,src,color}:IconProps){

    
    return <div className={styles.icon}>
        <img className={styles[color]} src={`/icons/${src}`} sizes={IconSize.SMALL?'10':'40'}/>
    </div>

}