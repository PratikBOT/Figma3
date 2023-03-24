import React from 'react';
import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';

function Designs() {
    const [visible, setVisible] = useState(false);
    const [filter, setFilter] = useState(false);
    const [selectedYear, setSelectedYear] = useState(null);
    const Year = [
        { name: '2022-23', code: 'NY' },
        { name: '2021-22', code: 'RM' },
        { name: '2020-21', code: 'LDN' },
        { name: '2019-20', code: 'IST' },
    ];
    const [selectedSUB, setSelectedSUB] = useState(null);
    const SUB = [
        { name: 'All' },
        { name: 'Cloud' },
        { name: 'L&S' },
        { name: 'Software' },
    ];

    const items = [
        {
            icon: 'pi pi-user',
            label: 'Profile',
        },
        {
            icon: 'pi pi-user',
            label: 'logout',
        },

    ];


    const [open, setOpen] = useState(true);
    return (
        <div>
            <div class="min-h-screen flex fixed">
                <nav class={`grid w-16 flex-none bg-green-900 rounded-r-xl px-2 py-3 mt-1 mb-1 h-screen hover:w-44 group-hover:shadow-xl duration-500 z-10  group-hover:visible delay-150`}>
                    <div className='justify-between h-[500px] flex-col justify-between'>
                        <img src='../assest/img/Redington (India) 1.png' />
                        <div className=''>
                            <button className='flex mt-7 px-2  cursor-pointer text-white origin-left'>
                                <img src='../assest/img/Vector.png' width={"20px"} className='mr-5' /><spn className='absolute opacity-0 invisible group-hover:animate-tooltip_show ml-2'  >Home</spn>
                            </button>
                            <div className='flex mt-4 px-1 cursor-pointer text-white btn btn-bg-gray-900'>
                                <img src='../assest/img/Home.png' width={"30px"} className='mr-4' /><spn className='hidden'>Dashboard</spn>
                            </div>
                        </div>
                    </div>

                    <div className='sidebar-footer'>
                        <span className='block mb-5 px-3'>
                            <img src='../assest/img/setting.png' width={"20px"} />
                        </span>
                        <span className='block px-3'>
                            <img src='../assest/img/export.png' width={"20px"} />
                        </span>
                    </div>

                </nav>

                <main class="flex-1 min-w-0 overflow-auto fixed ml-20 mt-1 p-2 z-0">
                    <header class=" p-0 w-full h-28">
                        <div className='flex items-center justify-between px-5'>
                            <div className='object-left'>
                                <div className='flex lg:flex-1 text-sm'>Dashboard</div>
                                <div className='text-xl '>At a Glance</div>
                            </div>
                            <div className='object-right-top flex item-center p-0 gap-5 items-center'>
                                <div className='w-6 h-6 items-center rounded-full bg-gray-200'>
                                    <img className='ml-1 mt-1' src='../assest/img/notification.png' />
                                </div>
                                <div className='flex row center p-0 gap-5'>
                                    <div className='row flex'>
                                        <img src='../assest/img/Ellipse 1.png' className='w-auto' />
                                        <img src='../assest/img/Frame 36835.png' className='w-auto m-2' />
                                        {/* <div className='flex-none'>
                                            <div className='text-md flex-none'>
                                                Alex Mathew</div>
                                            <div className='text-sm'>
                                                Reportee</div>
                                        </div> */}
                                    </div>
                                    <SplitButton model={items} severity="secondary" className=' hover:bg-white-900 z-10' text></SplitButton>


                                </div>
                            </div>
                        </div>
                        <div className='flex row justify-between absolute h-14 top-[60px] mx-10'>
                            <div className='grid grid-cols-2 flex justify-evenly'>
                                <div className='flex justify-between'>
                                    <Sidebar visible={filter} position="right" onHide={() => setFilter(false)} className="w-full md:w-20rem lg:w-30rem">
                                        <h2>Sidebar</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </Sidebar>
                                    <a className='' onClick={() => setVisible(true)}  ><img src='./assest/img/_button base.png' /></a>
                                    <div className='flex justify-between mx-5'>
                                        <div className="flex-1 mt-0 mx-0">
                                            <label className='text-sm font-light'>Fiancial Year</label>
                                            <Dropdown value={selectedYear} onChange={(e) => setSelectedYear(e.value)} options={Year} optionLabel="name"
                                                placeholder="2021-22" className="w-22 md:w-12rem text-sm h-7 items-center m-auto pt-0" />
                                        </div>
                                        {/* <div className="flex justify-between mx-5"> */}
                                        <label className='text-sm font-light'>SUB</label>
                                        <Dropdown value={selectedSUB} onChange={(e) => setSelectedSUB(e.value)} options={SUB} optionLabel="name"
                                            placeholder="Select a SUB" className="w-22 md:w-12rem text-sm h-7 items-center" />
                                        {/* </div> */}
                                    </div>
                                </div>


                                <div className='flex justify-end mt-3'>
                                    <Sidebar visible={visible} position="right" onHide={() => setVisible(false)} className="w-full md:w-20rem lg:w-30rem">
                                        <h2>Sidebar</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </Sidebar>
                                    <Button onClick={() => setVisible(true)} severity="secondary" className='bg-surface-900 h-8'>Parent component</Button>
                                </div>

                            </div>

                        </div>
                    </header>
                    <div class=" grid grid-cols-4 gap-4 pt-3 mx-9">

                        <div className='shadow border:1px solid #E1E6E3 rounded-md border-1' >
                            <div className='hover:bg-slate-200 flex items-center pl-7 space-x-4 bg-slate-100'>

                                <img src='./assest/img/Group.png' className='w-11 pt-7 pb-7 ' />
                                <div ><h2 className='pb-1 light-300'>Compensation</h2>
                                    <h1 className='text-xl font-medium '><b> &#8377; 58.53 Cr.</b></h1>
                                </div>
                            </div>
                            <div className=' flex  flex-row place-content-center space-x-4'>
                                <div className='ml-2'><h2 className='text-sm text-center'>LY Value</h2>
                                    <h1 className='text-center'><b>&#8377;46.37 Cr</b></h1>
                                </div>
                                <img src='./assest/img/Rect.png' className='pt-3 h-8' />
                                <div className='ml-2'><h2 className='text-sm text-center'>LY Var% </h2>
                                    <h1 className='text-center' ><b>26% </b></h1>
                                </div>
                                <img src='./assest/img/Rect.png' className='pt-3 h-8' />

                                <div className='ml-2'><h2 className='text-sm text-center'>3 Yr CAGR</h2>
                                    <h1 className='text-center'><b>12% </b></h1>
                                </div>
                            </div>
                        </div>
                        <div className='shadow' >
                            <div className='hover:bg-slate-200 flex items-center pl-7  space-x-4 bg-slate-100'>
                                <img src='./assest/img/Rs.png' className='w-11 pt-8 pb-7 ' /> <div><h2 className='pb-1 light-300'>Other Cost</h2>
                                    <h1 className='text-xl font-medium' ><b> &#8377;61.18 Cr.</b></h1>
                                </div>
                            </div>
                            <div className=' flex  flex-row place-content-center space-x-4'>
                                <div className='ml-2'><h2 className='text-sm text-center'>LY Value</h2>
                                    <h1 className='text-center' ><b>&#8377;54.40 Cr</b></h1>

                                </div>    <img src='./assest/img/Rect.png' className='pt-3 h-8' />
                                <div className='ml-2'><h2 className='text-sm text-center'>LY Var% </h2>
                                    <h1 className='text-center' ><b>11% </b></h1>

                                </div><img src='./assest/img/Rect.png' className='pt-3 h-8' />
                                <div className='ml-2'><h2 className='text-sm text-center'>3 Yr CAGR</h2>
                                    <h1 className='text-center' ><b>12% </b></h1>

                                </div>

                            </div>


                        </div>
                        <div className='shadow' >
                            <div className='hover:bg-slate-200 flex items-center pl-7  space-x-4 bg-slate-100 '>
                                <img src='./assest/img/pep.png' className='w-11 pt-8 pb-7 ' />
                                <div>
                                    <h2 className='pb-1'>Opex</h2>
                                    <h1 className='text-xl font-medium' ><b> &#8377;120.71 Cr</b></h1>
                                </div>
                            </div>
                            <div className=' flex  flex-row place-content-center space-x-4'>
                                <div className='ml-2'><h2 className='text-sm text-center'>LY Value</h2>
                                    <h1 className='text-center' ><b>&#8377;100.76 Cr</b></h1>

                                </div><img src='./assest/img/Rect.png' className='pt-3 h-8' />
                                <div className='ml-2'><h2 className='text-sm text-center'>LY Var% </h2>
                                    <h1 className='text-center'><b>20% </b></h1>

                                </div><img src='./assest/img/Rect.png' className='pt-3 h-8' />
                                <div className='ml-2'><h2 className='text-sm text-center'>3 Yr CAGR</h2>
                                    <h1 className='text-center'><b>20% </b></h1>

                                </div>

                            </div>


                        </div>
                        <div className='shadow'>
                            <div className='hover:bg-slate-200 flex items-center pl-7  space-x-4 bg-slate-100 '>
                                <img src='./assest/img/Rs.png' className='w-11 pt-8 pb-7 ' /> <div><h2 className='pb-1'>WC Intrest</h2>

                                    <h1 className='text-xl font-medium' ><b> &#8377;-1.81 Cr</b></h1></div>
                            </div>
                            <div className=' flex  flex-row place-content-center space-x-4'>
                                <div className='ml-2'><h2 className='text-sm text-center'>LY Value</h2>
                                    <h1 className='text-center '><b>&#8377;19.63 Cr</b></h1>

                                </div><img src='./assest/img/Rect.png' className='pt-3 h-8' />
                                <div className='ml-2'><h2 className='text-sm text-center'>LY Var% </h2>
                                    <h1 className='text-center text-red-600' ><b>-109% </b></h1>

                                </div><img src='./assest/img/Rect.png' className='pt-3 h-8' />
                                <div className='ml-2'><h2 className='text-sm text-center'>3 Yr CAGR</h2>
                                    <h1 className='text-center text-red-600'><b>-131% </b></h1>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* <div className=" flex w-auto flex-nowrap mt-4">
                        <div className="flex flex-col w-6/12 h-72 border-2 rounded-md border-gray-400 m-4 bg-slate-100">
                            <div className=" flex flex-row justify-between">
                                <div className="h-1/6  font-bold ml-2">Revenue</div>
                                <div className="font-bold mr-2">:</div>
                            </div>
                            <div className=" flex flex-row h-3/12 gap-2 m-4" >
                                <div className="w-4/12 border-slate-900 border-2 rounded-md ">
                                    <div className=" text-sm ml-2"> Gross Sale </div>
                                    <div className="text-xl ml-2 flex flex-row"> ₹ 199 Cr
                                        <span className="text-red-500 text-xs ml-2 mt-1"> ▼ 4%</span></div>
                                </div>
                                <div className="w-4/12 border-slate-900 border-2 rounded-md">
                                    <div className="ml-2 text-sm"> Revenue </div>
                                    <div className="text-xl ml-2 flex flex-row"> ₹ 197 Cr
                                        <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 4%</span>
                                    </div>
                                </div>
                                <div className="w-4/12 border-slate-900 border-2 rounded-md">
                                    <div className=" ml-2 text-sm"> Revenue/Group </div>
                                    <div className="text-xl ml-2 flex flex-row"> ₹ 33 Cr
                                        <span className="text-green-500 text-xs ml-2 content-end mt-1"> ▲ 4%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div>
                                    <div className="text-xl ml-2 flex flex-row">Target vs. Actual <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 2%</span> </div>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col w-6/12 h-72 m-4 border-2 rounded-md border-gray-400 bg-slate-100">
                            <div className=" flex flex-row justify-between">
                                <div className="h-1/6  font-bold ml-2">Margin</div>
                                <div className="font-bold mr-2">:</div>
                            </div>
                            <div className=" flex flex-row h-3/12 gap-2 m-4" >
                                <div className="w-4/12 border-slate-900 border-2 rounded-md ">
                                    <div className=" text-sm ml-2"> GM before Provision </div>
                                    <div className="text-xl ml-2 flex flex-row"> ₹ 45 Cr
                                        <span className="text-green-500 text-xs ml-2 mt-1">  ▲ 4%</span></div>
                                </div>
                                <div className="w-4/12 border-slate-900 border-2 rounded-md">
                                    <div className="ml-2 text-sm"> GM after Provision </div>
                                    <div className="text-xl ml-2 flex flex-row"> ₹ 50 Cr
                                        <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 4%</span>
                                    </div>
                                </div>
                                <div className="w-4/12 border-slate-900 border-2 rounded-md">
                                    <div className=" ml-2 text-sm"> GM % </div>
                                    <div className="text-xl ml-2 flex flex-row"> 4 %
                                        <span className="text-green-500 text-xs ml-2 content-end mt-1"> ▲ 4%</span>
                                    </div>
                                </div>s
                            </div>
                            <div className="flex flex-row">
                                <div>
                                    <div className="text-xl ml-2 flex flex-row">Target vs. Actual <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 2%</span> </div>
                                </div>

                            </div>
                        </div>
                    </div> */}

                    <div className='container mb-5'>
                        <div className='row'>
                            <div className='grid grid-cols-2'>
                                <div className='border-2 shadow'>
                                    <div className='flex justify-between '>
                                        <span className='text-xl font-bold'>Revenue</span>
                                        <i className='pi pi-ellipsis-v mt-1'></i>
                                    </div>
                                    <div className=''>
                                        <div className='grid grid-cols-3'>
                                            <div className='border'>
                                                <div className=''>
                                                    <div>Gross Sale</div>
                                                    <div>&#8377; 199 Cr
                                                        <i className='pi pi-sort-down ml-3'></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=''>

                                            </div>
                                            <div className=''>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </main>
            </div>
        </div>
    )
}

export default Designs;
