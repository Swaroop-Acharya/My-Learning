//Passing data from parent to child using props , so that one change can
//reflect in many components this helps reusing the code
import PromoHeading from './PromoHeading';
const data={
    discount:"81% off on all products",
    message:"3 days left hurry up!!!"
}
function Promo(){
    
    return (
        <div>
            <h1>hi</h1>
            <PromoHeading discount={data.discount} message={data.message}/>
        </div>
    )
}

export default Promo;