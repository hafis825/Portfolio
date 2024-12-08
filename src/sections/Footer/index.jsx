import { data } from "../../contents/footer";

const Footer = () => {
    return (
        <section className="space-y-5 mb-10">
            <div className="flex justify-end text-sm mb-12">
                <span className="font-bold">{data.descriptions} {data.title} </span>
            </div>
        </section>
    )
}

export default Footer