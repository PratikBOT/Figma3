import React,{useState} from "react";
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';



export default function RedingtonFigma(){
  const [visible, setVisible] = useState(false);
  const customIcons = (
    <>
    <img></img>
    </>
  )

    return(
        <div className=" flex w-auto flex-nowrap mt-4">
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
                    </div>
                </div>
                <div className="flex flex-row">
                    <div>
                        <div className="text-xl ml-2 flex flex-row">Target vs. Actual <span className="text-green-500 text-xs ml-2 mt-1"> ▲ 2%</span> </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
