import React from 'react';
import AddressModal from '../Addresmodal/AddressModal';
import AddressModalCard from '../AddressCard/AddressModalCard';
import LeasingModalCard from '../card/LeasingModalCard';
import ChargesModalCard from '../card/ChargesModalCard';
import RentReminderModalCard from '../card/RentReminderModalCard';
import ApplicationAgreementCard from '../card/ApplicationAgreementCard';
import AboutPropertyCard from '../card/AboutPropertyCard';
import CommunityFeaturesCard from '../card/CommunityFeaturesCard';
import PetFeesCard from '../card/PetFeesCard';
import ParkingCard from '../card/ParkingCard';
import NearestInstitutionModalCard from '../card/NearestInstitutionCard';
import NearestStationModalCard from '../card/NearestStationModalCard';
import NearestLandmarkModalCard from '../card/NearestLandmarkModalCard';
import UtilitiesProvider from '../card/UtilitiesProvider';
import { Link } from 'react-router';
import PropertyMediaForm from '../PropertyMediaForm/PropertyMediaForm';


const Info = () => {
    return (
        <div>
            <div>
                <h2 className='p-6 ml-6 mt-2  text-2xl font-semibold'>Condominiums information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">

                <div>
                    <AddressModalCard></AddressModalCard>
                    <LeasingModalCard></LeasingModalCard>
                    <ChargesModalCard></ChargesModalCard>
                    <RentReminderModalCard></RentReminderModalCard>
                    <ApplicationAgreementCard></ApplicationAgreementCard>
                    <AboutPropertyCard></AboutPropertyCard>
                    <CommunityFeaturesCard></CommunityFeaturesCard>


                </div>
                <div>
                    <PetFeesCard></PetFeesCard>
                    <ParkingCard></ParkingCard>
                    <NearestInstitutionModalCard></NearestInstitutionModalCard>
                    <NearestStationModalCard></NearestStationModalCard>
                    <NearestLandmarkModalCard></NearestLandmarkModalCard>
                    <UtilitiesProvider></UtilitiesProvider>

                </div>

            </div>

            <div>
                <PropertyMediaForm></PropertyMediaForm>
            </div>
            <div className="btn-container flex justify-between">
                <button className='btn  mb-2'> <Link to={'/'}> Back </Link></button>
                <button className='btn btn-primary mb-2'> <Link to={'/info/plan'}> Next </Link></button>
            </div>
        </div>
    );
};

export default Info;