import { useEffect, useState,useMemo } from "react"


interface Step{
    identifier:string
}

interface TourConfigProps{
    id:string
    steps:Step[]
    defaultActiveStep:number

}

interface GuidePositionProps{
    top:number
    left:number
    height:number,
    width:number
}

const initailGuidePosition ={top:0,left:0,width:0,height:0}

const useTour =(config:TourConfigProps)=>{

    const {defaultActiveStep =0,steps} = config

    const [activeStep,setActiveStep] = useState<number>(defaultActiveStep)
    const [showModal,setShowModal] = useState(false)
    const [guidePosition,setGuidePosition] = useState<GuidePositionProps>(initailGuidePosition)
    const [isVisible,setIsVisible] = useState(true)


    const length = steps.length
    

    useEffect(()=>{
        let currentStepObject = steps[activeStep]
        let element = document.getElementById(currentStepObject.identifier)!
        
        
        let position = element.getBoundingClientRect()
        setGuidePosition({
            top:position?.top,
            left:position?.left,
            width:position?.width,
            height:position?.height
        })
    },[activeStep])

    const start = ()=>{
        setActiveStep(0)
        setShowModal(true)
    }

    const next =()=>{
        if(activeStep==length-1){
            stop()
            return
        }
        setActiveStep((prev)=>prev +1)
    }

    const stop =()=>{
        setShowModal(false)
        setGuidePosition(initailGuidePosition)
    }


    return{start,next,stop,showModal,guidePosition}
}

export default useTour