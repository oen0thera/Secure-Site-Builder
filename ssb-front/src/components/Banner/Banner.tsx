import { BannerList } from '@/types/components/Banner.type';
import styles from './banner.module.scss'
import Image from '../Image/Image';
import { ImageProps, ImageSize, ImageSrc, ImageType } from '@/types/components/Image.type';
import { useEffect, useState } from 'react';
import React from 'react';
export default function Banner(){
    const [bannerChange,setBannerChange] = useState(false);
    const [bannerList,setBannerList] = useState<BannerList>([])
    //const BannerList:BannerList = [<Image size={ImageSize.LARGE} src={ImageSrc.Banner1} type={ImageType.BANNER}/>,<Image size={ImageSize.LARGE} src={ImageSrc.Banner2} type={ImageType.BANNER}/>,<Image size={ImageSize.LARGE} src={ImageSrc.Banner3} type={ImageType.BANNER}/>];
    useEffect(()=>{
        setBannerList([<Image size={ImageSize.LARGE} type={ImageType.BANNER}/>,<Image size={ImageSize.LARGE} type={ImageType.TEMPLATE}/>,<Image size={ImageSize.LARGE} type={ImageType.LOGO}/>]);   
        setInterval(() => {
            setBannerChange(true);
        }, 3000);
    },[])
    useEffect(()=>{
        
    setBannerChange(false);},[bannerList])
    useEffect(()=>{
        
        if(bannerChange){
            const firstBanner:React.ReactElement<ImageProps> = bannerList.at(0) as React.ReactElement<ImageProps>;
            setBannerList([bannerList.slice(1,bannerList.length),firstBanner].flat()) ;
            
        }
        
    },[bannerChange])
     const renderBanner= () => {
        if(!bannerChange)
            return bannerList.map((BannerItem,index)=>{return <span key={index} className={`${styles.banner_item} ${styles.slide_in}`}>{BannerItem}</span>})
        else
            return bannerList.map((BannerItem,index)=>{return <span key={index} className={`${styles.banner_item} ${styles.slide_out}`}>{BannerItem}</span>})
     }
    
    
    return <div className={styles.banner}>
        {renderBanner()}
    </div>
}