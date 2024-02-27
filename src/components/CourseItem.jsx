// eslint-disable-next-line react/prop-types
export default function CourseItem({image, title, price}) {
    return (
        <div className="item-card">
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{price}</p>
            <button>Kursa Git</button>
        </div>
    )
}