import { BannerList } from '@/types/components/Banner.type';
import styles from './banner.module.scss'
import Image from '../Image/Image';
import { ImageSize, ImageSrc, ImageType } from '@/types/components/Image.type';
export default function Banner(){
    const BannerList:BannerList = [<Image size={ImageSize.LARGE} src={ImageSrc.Banner1} type={ImageType.BANNER}/>,<Image size={ImageSize.LARGE} src={ImageSrc.Banner2} type={ImageType.BANNER}/>,<Image size={ImageSize.LARGE} src={ImageSrc.Banner3} type={ImageType.BANNER}/>];
    return <div className={styles.banner}>
        {BannerList.map((BannerItem)=>{return BannerItem})}
    </div>
}