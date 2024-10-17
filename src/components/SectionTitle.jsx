import './SectionTitle.css'

function SectionTitle({imgSrc, title}) {
    return (
        <>
        <div className = "section-title-and-img">
            <img src={imgSrc} alt="" />
            <h2>{title}</h2>
        </div>
        </>
    )
}

export default SectionTitle;