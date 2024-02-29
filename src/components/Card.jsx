import '../styles/Card.css';

function Card({image, title, location, category, stars, link}) {
    const imageName = `../src/assets/thumbnails/${image}`;
    const alt = `thumbnail-${title}-${location}`;

    // Create an array of star elements based on the stars prop
    let starElements = 0;
    if (stars == 1 || stars == 2 || stars == 3) {
        starElements = Array.from({ length: stars }, (_, index) => (
            <img key={index} src="../MichelinStar.png" alt="star" className="star-image" />
        ));
    }
    else if (stars == 'Bib Gourmand') {
        starElements = (
            <img src="../BibGourmand.png" alt="BibGourmand" className="star-image" />
        );
    }
    else {
        starElements = (
            <p className="card-michelinrecommend">Recommended by MICHELIN</p>
        );
    }
    
    return (
        <>
            <div className="card">
                <img src={imageName} alt={alt} className="card-thumbnail"/>
                <div className="card-body">
                    <p className="card-title">{title}</p>
                    <p className="card-text">{location}, Vietnam</p>
                    <p className="card-text">{category}</p>
                    {starElements}
                </div>
                <a href={link} target="_blank">Reserve</a>
            </div>
        </>
    )
}

export default Card
