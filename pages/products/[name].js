import {data} from '../../data'
import styles from '../../styles/product.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Product = ({product}) => {
    return (
        <div className={styles.container}>
            <div className={styles.cardS}>
                <h1 className={styles.title}>{product.title}</h1>
                <p className={styles.desc}>{product.longdesc}
                 <a href={product.web} passHref className={styles.link}>Link!</a></p>
                <button className={styles.button}>
                    <Link href="https://wa.me/5493484506772" passHref target='_blank'>
                        Contactame
                    </Link>
                </button>
            </div>
            <div className={styles.cardL}>
                { 
                product.images.map( img => (
                    <div key={img.id}  className={styles.imgContainer} >
                        <Image 
                        src={`/imagenes/${img.url}`}
                        width="100%"
                        height="100%"
                        objectFit='cover'
                        layout='responsive'
                        alt=''
                        className={styles.image}/>
                    </div>
                ))
                }
                
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const products = data;
    const paths = products.map(item => {
        return {
            params: {name: item.name}
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (ctx) => {
   const name = ctx.params.name;
   const product = data.filter(item => item.name === name)[0];
   return {
    props: {product}
   }
}

export default Product;