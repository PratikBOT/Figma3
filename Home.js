import React from 'react'
export default function Home() {
    return (






        <div class=" grid grid-cols-4 gap-4 pt-3 mx-9">

            <div className='shadow border:1px solid #E1E6E3 border-radius: 10px;' >
                <div className='hover:bg-slate-200 flex items-center pl-7 space-x-4 bg-slate-100'>
                    
                    <img  src='Group.png' className='w-11 pt-7 pb-7 ' /> 
                    <div ><h2 className='pb-1 light-300'>Compensation</h2>
                        <h1 className='text-xl font-medium '><b> &#8377; 58.53 Cr.</b></h1>
                    </div>
                </div>
                <div className=' flex  flex-row place-content-center space-x-4'>
                    <div className='ml-2'><h2 className='text-sm text-center'>LY Value</h2>
                        <h1 className='text-center'><b>&#8377;46.37 Cr</b></h1>
                        
                       
                    </div>
                    <img src='Rect.png' className='pt-3 h-8'/>
                    <div className='ml-2'><h2 className='text-sm text-center'>LY Var% </h2>
                        <h1 className='text-center' ><b>26% </b></h1>
                       
                    </div>
                    <img src='Rect.png' className='pt-3 h-8'/>

                    <div className='ml-2'><h2 className='text-sm text-center'>3 Yr CAGR</h2>
                        <h1 className='text-center'><b>12% </b></h1>
                       
                    </div>
                   
                </div>


            </div>
            <div className='shadow' >
                <div className='hover:bg-slate-200 flex items-center pl-7  space-x-4 bg-slate-100'>
                    <img src='Rs.png' className='w-11 pt-8 pb-7 ' /> <div><h2 className='pb-1 light-300'>Other Cost</h2>
                        <h1 className='text-xl font-medium' ><b> &#8377;61.18 Cr.</b></h1>
                    </div>
                </div>
                <div className=' flex  flex-row place-content-center space-x-4'>
                    <div className='ml-2'><h2 className='text-sm text-center'>LY Value</h2>
                        <h1 className='text-center' ><b>&#8377;54.40 Cr</b></h1>
                       
                    </div>    <img src='Rect.png' className='pt-3 h-8'/>
                    <div className='ml-2'><h2 className='text-sm text-center'>LY Var% </h2>
                        <h1 className='text-center' ><b>11% </b></h1>
                       
                    </div><img src='Rect.png' className='pt-3 h-8'/>
                    <div className='ml-2'><h2 className='text-sm text-center'>3 Yr CAGR</h2>
                        <h1 className='text-center' ><b>12% </b></h1>
                       
                    </div>
                   
                </div>


            </div>
            <div className='shadow' >
                <div className='hover:bg-slate-200 flex items-center pl-7  space-x-4 bg-slate-100 '>
                    <img src='pep.png' className='w-11 pt-8 pb-7 ' />
                    <div>
                        <h2 className='pb-1'>Opex</h2>
                        <h1 className='text-xl font-medium' ><b> &#8377;120.71 Cr</b></h1>
                    </div>
                </div>
                <div className=' flex  flex-row place-content-center space-x-4'>
                    <div className='ml-2'><h2 className='text-sm text-center'>LY Value</h2>
                        <h1 className='text-center' ><b>&#8377;100.76 Cr</b></h1>
                       
                    </div><img src='Rect.png' className='pt-3 h-8'/>
                    <div className='ml-2'><h2 className='text-sm text-center'>LY Var% </h2>
                        <h1 className='text-center'><b>20% </b></h1>
                       
                    </div><img src='Rect.png' className='pt-3 h-8'/>
                    <div className='ml-2'><h2 className='text-sm text-center'>3 Yr CAGR</h2>
                        <h1 className='text-center'><b>20% </b></h1>
                       
                    </div>
                   
                </div>


            </div>
            <div className='shadow ' >
                <div className='hover:bg-slate-200 flex items-center pl-7  space-x-4 bg-slate-100 '>
                    <img src='Rs.png' className='w-11 pt-8 pb-7 ' /> <div><h2 className='pb-1'>WC Intrest</h2>

                        <h1  className='text-xl font-medium' ><b> &#8377;-1.81 Cr</b></h1></div>
                </div>
                <div className=' flex  flex-row place-content-center space-x-4'>
                    <div className='ml-2'><h2 className='text-sm text-center'>LY Value</h2>
                        <h1 className='text-center '><b>&#8377;19.63 Cr</b></h1>
                       
                    </div><img src='Rect.png' className='pt-3 h-8'/>
                    <div className='ml-2'><h2 className='text-sm text-center'>LY Var% </h2>
                        <h1 className='text-center text-red-600' ><b>-109% </b></h1>
                       
                    </div><img src='Rect.png' className='pt-3 h-8'/>
                    <div className='ml-2'><h2 className='text-sm text-center'>3 Yr CAGR</h2>
                        <h1 className='text-center text-red-600'><b>-131% </b></h1>
                       
                    </div>
                   
                </div>

            </div>

        </div>


    )
}
