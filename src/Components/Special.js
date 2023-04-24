import React from 'react';
import GreekSalad from '../icons_assets/greeksalad.jpg';
//import Bruchetta from '../icons_assets/bruchetta.svg';
import LemonDessert from '../icons_assets/lemon dessert.jpg'

const dishes = [
    {
        image: GreekSalad,
        name:'Greek salad',
        price:'$10.99',
        description:'The famous great salad of crispy lettuce, peppers, olives and our chicago style teta cheese,gernished with crunchy gartic and rosemary croutons'
    },
    {
        image: GreekSalad,
        name:'Bruchetta',
        price:'$5.99',
        description:'Out Bruchetta is made from grilled bread that has born smoared with garlic and seasonned with saltand olive oil'
    },
    {
        image: LemonDessert,
        name:'Lemon Dessert',
        price:'$5.99',
        description:"This comes from straight from grandma's recipe book every last ingredient has been sourced and is an authentic as can be imagined"
    }
]


const Special = () => {
    return (
        <div className='grid SpecialSection'>
            <div className='container'>
                <div className='SpecialHeader flex-center'>
                    <h1 className='flex-1'>This weeks specials!</h1>
                    <button className='button'>Online Menu</button>
                </div> 
                <div className='flex-space-between SpecialBody'>
                    {dishes.map((dish, index) =>{
                        return (
                            <div className='CardSpecial flex-1' key={index}>
                                <img src={dish.image} alt={dish.name}/>
                                <h3 className='CardSpecialHeader'><span>{dish.name}</span><span>{dish.price}</span></h3>
                                <div className='CardSpecialBody'>
                                    <p>{dish.description}</p>  
                                </div>
                                <h4 className='CardSpecialFooter'>Order a delivery</h4>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Special;