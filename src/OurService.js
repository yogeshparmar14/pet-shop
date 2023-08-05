import React from 'react'
import serviceImages1 from './assets/images/s1.png'
import serviceImages2 from './assets/images/s2.png'
import serviceImages3 from './assets/images/s3.png'
import './Dashboard.css'
import Header from './Header'
const OurService = () => {
    const allService = [
        {
            serviceName: "Pet Grooming",
            serviceImage: serviceImages1,
            describe: "Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful",
            price: "100$"
        },
        {
            serviceName: "Pet Checkup",
            serviceImage: serviceImages2,
            describe: "Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful",
            price: "200$"
        },
        {
            serviceName: "Dental Care",
            serviceImage: serviceImages3,
            describe: "Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful",
            price: "300$"
        },
        {
            serviceName: "Pet Shower",
            serviceImage: serviceImages1,
            describe: "Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful",
            price: "400$"
        },
        {
            serviceName: "Nail Cutting",
            serviceImage: serviceImages2,
            describe: "Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful",
            price: "500$"
        },
        {
            serviceName: "Surgery",
            serviceImage: serviceImages3,
            describe: "Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful",
            price: "600$"
        },
    ]
    return (
        <div>
            <Header />
            <div className='grid-container' style={{ gridTemplateColumns: "auto" }}>
                <div className='flex-center'>
                    <div>
                        <h2 className='grid-container-h2'>Our Services</h2>
                    </div>

                </div>
            </div>
            <div className='grid-container' style={{
                gridTemplateColumns: "auto auto auto", justifyItems: "center",
                alignItems: "center", marginBottom: "2%"
            }}>
            {
                allService.map((item,index)=>{
                   return(
                    <div className='box' key={index}>
                    <div className='image-box'>
                        <img src={item?.serviceImage} alt='' width="75px"></img>
                    </div>
                    <div className='service-details-box'>
                        <h5 style={{
                            fontWeight: "600",
                            fontSize: "20px"
                        }}>{item?.serviceName}</h5>
                        <p style={{ fontFamily: "Open Sans, sans-serif" }}>{item?.describe}</p>
                        <h5 style={{
                            fontWeight: "600",
                            fontSize: "20px",
                            marginTop: "15px"
                        }}>Only {item?.price} </h5>
                    </div>
                </div>
                   )
                })
            }
            </div>
        </div>
    )
}

export default OurService
