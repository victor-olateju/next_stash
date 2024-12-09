export default function ProductLayout({children}: {children: React.ReactNode}){
    return <div>
        <h2>Product layout</h2>
        <br />
        {children}
        <br />
        <div>
            <h2>featured product</h2>
        </div>
    </div>
}