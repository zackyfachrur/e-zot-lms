import { ReactLenis } from "lenis/react";
import { LenisProps } from "@type/LenisType";

const SmoothScroll: React.FC<LenisProps> = ({ children }) => { 

    return (
        <ReactLenis root>
            {children}
        </ReactLenis>
    )

}

export default SmoothScroll

