import { Helmet } from 'react-helmet-async';
import Cover from '../Home/Shared/Cover/Cover';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import UseMenu from '../../Hooks/UseMenu';
import MenuCategory from './MenuCategory/MenuCategory';

import bgMenu from '../../assets/menu/banner3.jpg'
import bgPizz from '../../assets/menu/pizza-bg.jpg'
import dessbg from '../../assets/menu/dessert-bg.jpeg'
import bgSalad from '../../assets/menu/salad-bg.jpg'
import bgSoup from '../../assets/menu/soup-bg.jpg'


const Menu = () => {
    const [menu] = UseMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
           <section className='bg-cover' style={{backgroundImage:`url(${bgMenu})`}}>
           <Cover
           
            coverHeader={'our menu'}
            coverDesc={'Would you like to try a dish?'}
            ></Cover>
           </section>
           <SectionTitle
           subHeading={"Don't miss"}
           heading={"Today's Offer"}
           ></SectionTitle>
           <MenuCategory items={offered}></MenuCategory>

           {/* offered */}
           <section className='bg-cover' style={{backgroundImage:`url(${dessbg})`}}>
           <Cover
           
            coverHeader={'Dessert'}
            coverDesc={'Would you like to try a dish?'}
            ></Cover>
           </section>
           <MenuCategory items={dessert}></MenuCategory>
           {/* dessert */}

           <section className='bg-cover' style={{backgroundImage:`url(${bgPizz})`}}>
           <Cover
           
            coverHeader={'pizza'}
            coverDesc={'Would you like to try a dish?'}
            ></Cover>
           </section>
           <MenuCategory items={pizza}></MenuCategory>
           {/* pizza */}

           <section className='bg-cover' style={{backgroundImage:`url(${bgSalad})`}}>
           <Cover
           
            coverHeader={'salad'}
            coverDesc={'Would you like to try a dish?'}
            ></Cover>
           </section>
           <MenuCategory items={salad}></MenuCategory>
           {/* salad */}

           <section className='bg-cover' style={{backgroundImage:`url(${bgSoup})`}}>
           <Cover
           
            coverHeader={'soup'}
            coverDesc={'Would you like to try a dish?'}
            ></Cover>
           </section>
           <MenuCategory items={soup}></MenuCategory>
           {/* soup */}

        </div>
    );
};

Menu.propTypes = {
    
};

export default Menu;