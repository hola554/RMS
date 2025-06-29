import { Card } from "../card"

export const ManageAccountCard = () => {
    return (
        <section className="flex gap-2 w-full">
            <Card title="Active Account"
                stat="30"
                bgColor="#31A093" 
            />
            <Card title="Innactive Account"
                stat="20"
                bgColor="#FE9A62" 
            />
            <Card title="Total User"
                stat="50"
                bgColor="#7542ff" 
            />
            

        </section>
    )
}
