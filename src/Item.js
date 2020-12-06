import React,{useState} from 'react'
import './Item.css'

export default function Item({ item , addToCart } ) {
    const [added,setAdded] = useState(false)
    const [labelText,setLabelText] = useState("Add To Cart")
    const [backDis,setBackDis] = useState("")
  

    // useEffect(()=>{
    //   const tempCart = [...cart]
    //   const checkingOne = tempCart.filter(tempData => tempCart.face === item.face).length
    //   if(checkingOne === 1) {
    //     setBackDis("#D4C26A")
    //     setLabelText("Added")
    //     setAdded(true)
    //   }else{
    //     setBackDis("")
    //     setLabelText("Add to Cart")
    //     setAdded(false)
    //   }
    // },[])

    // useEffect(()=>{
      
    //   const tempCart = [...cart]
    //   const checkingOne = tempCart.filter(tempData => tempCart.face === itemFace)
    //   const lengthCheck = checkingOne.length
     
    //   if(lengthCheck === 1) {
    //     setBackDis("#D4C26A")
    //     setLabelText("Added")
    //     setAdded(true)
    //   }
    // },[cart])

    

    const handleAddToCart = (e) =>{
      setBackDis("#D4C26A")
      setLabelText("Added")
      setAdded(true)
      addToCart(item)
    }

    const checkRelativeDate = (dateSubmitted) => {
        const currentDate = new Date().getTime()
        const tempDate = new Date(dateSubmitted).getTime()

        const difference = currentDate - tempDate
        if(difference >= 604800000){
            return dateSubmitted;
        }else{
             let days = parseInt(((((difference/1000)/60)/60)/24)) + " days ago"
             return days
        }
    }

 

    return (
        <>
        <div className="card">
          <div className="card-title">
               <p className="item-face" style={{fontSize:item.size}}> {item.face}</p>
          </div>
          <div className="card-header">
                <p className="item-name"> {item.name} ( {item.size} px ) </p>
          </div>
          <div className="card-body">
            <div className="item-details">
                <p className="item-price"><span className="label-details">Price:</span> ${item.price} </p>
                <p className="item-date"><span className="label-details">Date:</span> {checkRelativeDate(item.submitDate)} </p>
            </div>
               
                <button className="item-button" onClick = {handleAddToCart} disabled={added} style={{backgroundColor:backDis}}>{labelText}</button>

                
          </div>
        </div>
        </>
    )
}
