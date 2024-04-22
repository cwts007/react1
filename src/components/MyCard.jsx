import Tags from './Tags';

export default function MyCard({ image, name, description, tag }) {
    return (
        <div className="card">
            <img src={image} alt={name} className="card-image" />
            <h2 className="card-title">{name}</h2>
            <p className="card-description">{description}</p>
            <Tags text={tag.text} color={tag.color} />
        </div>
    );
}
