import React , {useState , useEffect} from 'react'
import Firebase from '../../../All/Firebase/firebase'
import { useHistory } from 'react-router'
import { connect } from 'react-redux'


import { handleProfileDataFromFirebase } from '../../../redux/actions/userActions'

import './Profile.css' 

const Profile = (props) => {

    const history = useHistory() 



    const userUid = props.user.userAllInformation.uid 
    const userOrderInformation = props.user.userOrderInformation



    useEffect(() => {
        props.handleProfileDataFromFirebase(userUid)
    },[])



    let allInfo = '' 
    let displayAllInfo = ''

    if(userOrderInformation !== null){

        const order = Object.entries(userOrderInformation)

        allInfo = order.map(item => {

            return Object.keys(item[1]).map((key , index) => {
                return(
                    <div className="single__order" key={index}>
                       { ( (key === 'name' || key === 'colors' || key === 'product' || key === 'totalPrice') === true) ? (
                            // console.log(item[1][key]);
                            <>
                                <div className='someStyle'>
                                    <div className='key__value'>
                                        {/* {`[${key} : ${item[1][key]}]`} */}
                                        <span className='key__name'>
                                            {`${key}`}
                                        </span>
                                        :
                                        <span className='value'>
                                            {`${item[1][key]}`}
                                        </span>
                                    </div>
                                </div> 
                            </>
                            ) 
                            : 
                            null 
                        }
                    </div>
                )
            })
        })
      

        

    }
    else{
        console.log('userOrderInformation is null');
    }
    
    

    // console.log(props.user.userAllInformation.displayName);

    const displayName = props.user.userAllInformation.displayName
    const email = props.user.userAllInformation.email 

    return (
        <div>
            <div className="full__profile">
            <h3>{displayName}</h3>
            <h4>
                {email}
            </h4>
            {userOrderInformation === null ? 
                    <h5>No Order Has Been Placed</h5> 
                    : 
                    <div>
                        <p>wait here is some order to show</p>
                    </div>
            }
            <div className='all__info'>
                {allInfo}
            </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return({
        user : state.user
    })
}

export default connect(mapStateToProps , {
    handleProfileDataFromFirebase : handleProfileDataFromFirebase 
})(Profile) 
