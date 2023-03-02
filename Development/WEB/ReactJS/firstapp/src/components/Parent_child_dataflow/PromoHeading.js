function PromoHeading(props){
    return (
        <div>
            <h1>{props.discount}</h1>
            <p>{props.message}</p>
        </div>
        
    )
}

export default PromoHeading;