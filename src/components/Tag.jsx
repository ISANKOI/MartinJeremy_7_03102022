
function Tags(tags) {
    
    return (
        <div>
            {tags.map((tag) => (
                <div className="details__info__tag" key={tag}>
                    <span className="details__info__tag__content">{tag}</span>
                </div>
                
            ))}
        </div>
    );
}
export default Tags;