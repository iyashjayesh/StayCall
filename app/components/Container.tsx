'use client';

interface ContainerProps {
    children: React.ReactNode
} 

const Container = ({ children }: ContainerProps) => {
    return (
        <div className="
            mx-auto
            max-w-[2520px]
            px-4
            xl:px-20
            md:px-10
            sm:px-2
        ">
            {children}
        </div>
    )
}

export default Container