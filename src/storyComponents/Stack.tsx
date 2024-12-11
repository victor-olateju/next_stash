import { CSSProperties, PropsWithChildren } from "react";


type StackProps = PropsWithChildren & {
    orientation: 'horizontal' | 'veritcal'
}

export default function Stack({children, orientation='horizontal'}: StackProps){

    const orientationStyles : Record<StackProps['orientation'], CSSProperties> = {
        horizontal:{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
        },
        veritcal: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
        }
    }

    return <div className="" style={{...orientationStyles[orientation]}}>
        {children}
    </div>
}