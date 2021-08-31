import React , {useState , useEffect} from 'react'
import Firebase from '../../../All/Firebase/firebase'
import { useHistory } from 'react-router'
import './Profile.css' 

const Profile = (props) => {

    const history = useHistory() 

    useEffect(() => {
        props.handleProfileDataFromFirebase()
    },[])


    const userAllInformation = props.userAllInformation
    const userOrderInfo = props.userOrderInformation

    // if(userAllInformation.email === null){
    //     // props.loadCurrentInfoOfUser()
    //     history.push('/')
    // }


    console.log(userAllInformation);

    let displayAllInfo ;
    let allInfo ;

    if(userOrderInfo !== null){

        const order = Object.entries(userOrderInfo)

        allInfo = order.map(item => {
            console.log(item[1]);
            
            return Object.keys(item[1]).map(key => {
                return(
                    <div className="single__order">
                       { ( (key === 'name' || key === 'colors' || key === 'product' || key === 'price') === true) ? (
                            // console.log(item[1][key]);
                                <div className='someStyle'>
                                    {`[${key} : ${item[1][key]}]`}
                                </div> 
                            ) 
                            : 
                            null 
                        }
                    </div>
                )
            })
        })
        displayAllInfo = allInfo.map(item => {
            return item.map((info , index) => {
                return (
                    <div key={index}>
                        {info}
                    </div>
                )
            })
        })

        

    }
    else{
        console.log('userOrderInfo is null');
    }
    
    

    

    return (
        <div>
            <div className="full__profile">
            <h3>{props.userAllInformation.displayName}</h3>
            <h4>
                {props.userAllInformation.email}
            </h4>
            {userOrderInfo === null ? 
                    <h5>No Order Has Been Placed</h5> 
                    : 
                    <div>
                        <p>wait here is some order to show</p>
                    </div>
            }
            <div>
                {allInfo}
            </div>
            </div>
        </div>
    )
}

export default Profile
