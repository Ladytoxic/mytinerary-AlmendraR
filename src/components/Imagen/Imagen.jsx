function Imagen({ url_img, alt_img }) {
    return (
        <>
            <img className={img_class || img_default} src={url_img} alt={alt_img} />
        </>
    )
}

export default Imagen