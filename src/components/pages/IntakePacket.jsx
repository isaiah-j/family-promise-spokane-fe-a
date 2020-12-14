import React from 'react';
import IdVerification from './IntakePacketContent/BySupervisor/IdVerification';
import ContactInfo from './IntakePacketContent/ByGuests/ContactInfo';
import FamilyMembers from './IntakePacketContent/ByGuests/FamilyMembers';
import RaceEthnicityInfo from './IntakePacketContent/ByGuests/RaceEthnicityInfo';
import BarriersPage from './IntakePacketContent/ByGuests/BarriersPage';
import ChildSchoolInfo from './IntakePacketContent/ByGuests/ChildSchoolInfo';
const IntakePacket = () => {
  return (
    <div className="container">
      <h1>Intake Packet</h1>
      <ContactInfo />
      <FamilyMembers />
      <RaceEthnicityInfo />
      <BarriersPage />
      <ChildSchoolInfo />
      <IdVerification />
    </div>
  );
};

export default IntakePacket;
