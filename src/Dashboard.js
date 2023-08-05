import React from 'react'
import './Dashboard.css'
import Header from './Header'
const Dashboard = () => {
   
    return (
        <div>
            <div className='dashboard'>
             <Header/>
                <div className='hero_image'>
                    <div className='grid-container'>
                        <div className='grid-item'>
                            <div className='detail-box'>
                                <h1 className='details-box-h1-tag'>We Will Take Care
                                    <br></br>
                                    Of Your Pets
                                </h1>
                                <p className='details-box-p-tag'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rem veritatis dolorem voluptas dolore odio pariatur explicabo nesciunt non et obcaecati repellat est sint aliquid, temporibus ab ad eum nisi.
                                </p>
                                <button className='details-box-button-tag'>Read More</button>
                            </div>
                        </div>
                        <div className='grid-item'>2</div>
                    </div>
                </div>
                
             
               <div>
              
               </div>
            </div>
        </div>
    )
}

export default Dashboard
