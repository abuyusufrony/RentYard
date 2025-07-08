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


const Info = () => {
    return (
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
    );
};

export default Info;