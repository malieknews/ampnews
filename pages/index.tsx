import Head from 'next/head'
import { useAmp } from 'next/amp'
import Byline from '../components/Byline'

export const config = {
  amp: 'hybrid',
}

export default function PrivacyPage() {
  const isAmp = useAmp()

  return (
    <div>
      <Head>
      <title>The Mobile Blog</title>
      </Head>
      <h1>The Mobile Privacy</h1>
      <Byline author="Don't Sell My Info" />
      <p>
        <a href={isAmp ? '/dog' : '/dog?amp=1'}>
          {isAmp ? 'View Non-AMP' : 'View AMP'} Version
        </a>
      </p>
      <p className="caption">Privacy Policy</p>
     
       <p>
        Wafer donut candy soufflé{' '}
        <a href={isAmp ? '/?amp=1' : '/'}>Privacy Policy</a>. 
        Marzipan gummi bears pie danish lollipop pudding powder gummi bears sweet. Pie sweet
        roll sweet roll topping chocolate bar dragée pudding chocolate cake.
        Croissant sweet chocolate bar cheesecake candy canes. Tootsie roll icing
        macaroon bonbon cupcake apple pie candy canes biscuit candy canes.
        Jujubes jelly liquorice toffee gingerbread. Candy tootsie roll macaroon
        chocolate bar icing sugar plum pie. Icing gummies chocolate bar
        chocolate marzipan bonbon cookie chocolate tart. Caramels danish halvah
        croissant. Cheesecake cookie tootsie roll ice cream. Powder dessert
        carrot cake muffin tiramisu lemon drops liquorice topping brownie.
        Soufflé chocolate cake croissant cupcake jelly.
      </p>
      
    </div>
  )
}
