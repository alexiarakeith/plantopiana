import InfoCard from '@/components/InfoCard';
import { RiPlantLine } from 'react-icons/ri';
import { BiUserCircle } from 'react-icons/bi';
import { TbPlant2 } from 'react-icons/tb';
import TopPlants from '@/components/TopPlants';

// Import the images using relative paths
import image1 from '../../public/image1.jpg';
import image2 from '../../public/image2.jpg';
import image3 from '../../public/image3.jpg';
import image4 from '../../public/image4.jpg';




export default function Home({ userCount, plantCount, gardenCount }) {

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const defaultMonth = 'September';
  const plantLists = {
    January: {
      images: [],
      plants: [],
    },
    February: {
      images: [],
      plants: [],
    },
    March: {
      images: [],
      plants: [],
    },
    April: {
      images: [],
      plants: [],
    },
    May: {
      images: [image1, image2],
      plants: ['European Silver Fir', 'Eskimo Sunset Sycamore Maple'],
    },
    June: {
      images: [image1, image3,image4,image2],
      plants: ['European Silver Fir', 'Aloe Vera', 'Candid Apple Flowering Crab', 'Eskimo Sunset Sycamore Maple'],
    },
    July: {
      images: [],
      plants: [],
    },
    August: {
      images: [],
      plants: [],
    },
    September: {
      images: [],
      plants: [],
    },
    October: {
      images: [],
      plants: [],
    },
    November: {
      images: [],
      plants: [],
    },
    December: {
      images: [],
      plants: [],
    },
    
    
  };

  
  return (
    <div>
      <h1 className='text-4xl font-fig'>Welcome to Plantopia Admin Panel</h1>

      <div className='flex justify-between items-start gap-12 py-8 ml-12'>
        {/* Left Side */}
        <div className='flex flex-col justify-center items-center gap-12'>
          {/* InfoCard 1 */}
          <InfoCard
            icon={<BiUserCircle className='mr-2' />}
            route={'/user'}
            title={'Total Users'}
            value={('000' + userCount).slice(-4)}
          />

          {/* InfoCard 2 */}
          <InfoCard
            icon={<TbPlant2 className='mr-2' />}
            route={'/garden'}
            title={'User Gardens'}
            value={('000' + plantCount).slice(-4)}
          />
        </div>

        {/* Right Side */}
        <div className='flex flex-col justify-center items-center gap-2 mr-12'>
          {/* Container for TopPlants */}
          <div style={{ maxHeight: '60rem' }}>
            <TopPlants
              icon={<TbPlant2 className='mr-2' />}
              title={'Top Plants'}
              months={months}
              defaultMonth={defaultMonth}
              plantLists={plantLists}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { userCount, plantCount, gardenCount } = await (
    await fetch('http://localhost:3000/api/analytics')
  ).json()
  return {
    props: {
      userCount: userCount,
      plantCount: plantCount,
      gardenCount: gardenCount,
      
    },
  }
}
