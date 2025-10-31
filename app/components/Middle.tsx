import { Author } from "./Author"
import { Info } from "./Info"
import { Lines } from "./Lines"

export const Middle = ()=>{
    return(
        <div className="bg-[#EEEDEA] rounded-t-4xl">
            <Author/>
            <Lines/>
            <Info/>
        </div>
    )
}