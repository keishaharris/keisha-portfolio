import ColorBorder from "./ColorBorder";

const PageTitle = ({title}) => {
    return(        
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-bold text-3xl lowercase">
                        {title} 
                    </h1>
                    <ColorBorder />
                </div> 
    )
}

export default PageTitle