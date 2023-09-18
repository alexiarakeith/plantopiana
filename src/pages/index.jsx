import InfoCard from '@/components/InfoCard'
import { RiPlantLine } from 'react-icons/ri'
import { BiUserCircle } from 'react-icons/bi'
import { TbPlant2 } from 'react-icons/tb'
import TopPlants from '@/components/TopPlants'

export default function Home({ userCount, plantCount, gardenCount }) {

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const defaultMonth = 'September'; // Set your default month
  const plantLists = {
    January: ['No Plants'],
    February: ['No Plants'],
    March: ['No Plants'],
    April: ['No Plants'],
    May: ['1. European Silver Fir', '2. Eskimo Sunset Sycamore Maple', '3. No Plants', '4. No Plants', '5. No Plants'],
    June: ['1. European Silver Fir', '2. Aloe Vera', '3. Candid Apple Flowering Crab', '4. Eskimo Sunset Sycamore Maple', '5. No Plants'],
    July: ['No Plants'],
    August: ['No Plants'],
    September: ['No Plants'],
    October: ['No Plants'],
    November: ['No Plants'],
    December: ['No Plants'],
    
  };


  return (
    <div>
      <h1 className='text-4xl font-fig'>Welcome to Plantopia Admin Panel</h1>

      <div className='flex justify-center items-center gap-5 py-8'>
        <InfoCard
          icon={<BiUserCircle className='mr-2' />}
          route={'/user'}
          title={'Total Users'}
          value={('000' + userCount).slice(-4)}
        />
        {/* <InfoCard
          icon={<RiPlantLine className='mr-2' />}
          route={'/plant'}
          title={'Registered Plants'}
          value={('000' + plantCount).slice(-4)}
        /> */}
        <InfoCard
          icon={<TbPlant2 className='mr-2' />}
          route={'/garden'}
          title={'User Gardens'}
          value={('000' + gardenCount).slice(-4)}
        />
      </div>
      <div className='flex justify-center items-center gap-4 py-5'>
    
      <TopPlants
          icon={<TbPlant2 className='mr-2' />}
          title={'Top Plants'}
          months={months}
          defaultMonth={defaultMonth}
          plantLists={plantLists}
        />
          
        </div>
    </div>
  )
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
